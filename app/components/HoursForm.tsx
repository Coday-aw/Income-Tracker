"use client";
import { Hours_entries } from "@/lib/types";
import { useState } from "react";

interface HoursFormProps {
  incomeId: string;
  onHoursAdded?: (newHoursEntry: Hours_entries) => void; // Callback to notify parent component when new hours are added
}

const HoursForm = ({ incomeId, onHoursAdded }: HoursFormProps) => {
  const [date, setDate] = useState<string>("");
  const [regular, setRegular] = useState<number | undefined>(undefined);
  const [overtime, setOvertime] = useState<number | undefined>(undefined);
  const [overtimeCompensation, setOvertimeCompensation] = useState<
    number | undefined
  >(undefined);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form inputs
    if (
      !date ||
      overtime === undefined ||
      regular === undefined ||
      overtimeCompensation === undefined
    ) {
      return alert("fill all fields");
    }

    // Prepare the data to be sent to the API
    const hours_entries = {
      income_id: incomeId,
      date: date,
      regular: regular,
      overtime: overtime,
      overtime_compensation: overtimeCompensation,
    };

    // Send the data to the API
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/hours`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hours_entries),
        }
      );

      const data = await res.json();
      if (res.ok) {
        // Create the new hours entry object
        const newHoursEntry: Hours_entries = {
          date: date,
          regular: regular,
          overtime: overtime,
          overtime_compensation: overtimeCompensation,
        };

        // Call the callback to update parent state
        if (onHoursAdded) {
          onHoursAdded(newHoursEntry);
        }

        // Reset form
        setDate("");
        setRegular(undefined);
        setOvertime(undefined);
        setOvertimeCompensation(undefined);
        console.log("time added successfully", data);
      } else {
        console.error("Error adding hours:", data.message);
        alert("Error adding hours: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10 bg-white/10 rounded-2xl p-6">
      <p className="text-3xl mb-5 font-bold ">Lägg Till Timmar</p>
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
          <div className="flex flex-col font-bold gap-2 w-full ">
            <label htmlFor="Datum">Datum</label>
            <input
              onChange={(e) => setDate(e.target.value || "")}
              value={date}
              type="date"
              className="bg-white/20 p-4 rounded-2xl   "
            />
          </div>
          <div className="flex flex-col font-bold gap-2 w-full  ">
            <label htmlFor="Timmar">Ordinarie Tid</label>
            <input
              onChange={(e) =>
                setRegular(e.target.value ? Number(e.target.value) : undefined)
              }
              value={regular}
              type="number"
              placeholder="0.0"
              className="bg-white/20 p-4 rounded-2xl   "
            />
          </div>
          <div className="flex flex-col font-bold gap-2 w-full  ">
            <label htmlFor="OB-timamr">OB timmar</label>
            <input
              onChange={(e) =>
                setOvertime(e.target.value ? Number(e.target.value) : undefined)
              }
              value={overtime}
              type="number"
              placeholder="0.0"
              className="bg-white/20 p-4 rounded-2xl "
            />
          </div>
          <div className="flex flex-col font-bold gap-2 w-full  ">
            <label htmlFor="OB-timamr">OB ersättning(%)</label>
            <input
              onChange={(e) =>
                setOvertimeCompensation(
                  e.target.value ? Number(e.target.value) : undefined
                )
              }
              value={overtimeCompensation}
              min={0}
              max={100}
              type="number"
              placeholder="0%"
              className="bg-white/20 p-4 rounded-2xl "
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-white text-blue-600 font-bold text-2xl p-4 rounded-3xl w-full mt-10 cursor-pointer hover:translate-y-[-3px] transition duration-300 ease-in-out "
        >
          Lägg till
        </button>
      </form>
    </div>
  );
};
export default HoursForm;
