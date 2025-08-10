"use client";
import { useParams } from "next/navigation";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useIncome } from "@/app/hooks/useIncome";
import HoursForm from "@/app/components/HoursForm";
import StatCard from "@/app/components/StatCard";
import HoursHistory from "@/app/components/HoursHistory";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Hours_entries, Income } from "@/lib/types";

function page() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : undefined;
  const { income: initialIncome, isLoading } = useIncome(id as string);

  // Local state to manage real-time updates
  const [income, setIncome] = useState<Income | undefined>(initialIncome);

  // Update local state when hook data changes
  useEffect(() => {
    setIncome(initialIncome);
  }, [initialIncome]);

  // Function to update income when hours are added
  const handleHoursAdded = (newHoursEntry: Hours_entries) => {
    if (income) {
      const updatedIncome = {
        ...income,
        hours_entries: [...income.hours_entries, newHoursEntry],
      };
      setIncome(updatedIncome);
    }
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading... </div>
      ) : (
        <div
          className="border border-white/20 rounded-3xl p-8"
          style={{
            background:
              "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
          }}
        >
          <div className="flex justify-between">
            <p className="text-5xl font-bold">{income?.incomeTitle}</p>{" "}
            <Link href={"/dashboard"}>
              <button className="bg-white/20 font-semibold px-6 py-3 rounded-full flex justify-center items-center gap-2 hover:translate-y-[-3px] transition duration-300 ease-in-out hover:shadow-2xl hover:bg-white/40 cursor-pointer">
                <FaLongArrowAltLeft />
                Back
              </button>{" "}
            </Link>
          </div>
          {income && <StatCard income={income} />}
          {id && <HoursForm incomeId={id} onHoursAdded={handleHoursAdded} />}
          {income && <HoursHistory income={income} />}
        </div>
      )}
    </div>
  );
}
export default page;
