"use client";
import { supabase } from "@/lib/supbaseClient";
import { useState } from "react";

const IncomeForm = () => {
  const [title, setTitle] = useState("");
  const [hourlyPay, setHourlyPay] = useState<number | undefined>(undefined);
  const [taxCode, setTaxCode] = useState<number | undefined>(undefined);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (!title || !hourlyPay || !taxCode) {
        setError("Vänligen fyll i alla fält");
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase.from("income-tracker").insert([
        {
          income_title: title,
          hourly_pay: hourlyPay,
          tax_code: taxCode,
        },
      ]);

      if (error) {
        setError("Ett fel uppstod när data skulle sparas");
        console.error("Supabase error:", error);
      } else {
        console.log("Data saved successfully:", data);
        setTitle("");
        setHourlyPay(undefined);
        setTaxCode(undefined);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setError("Ett oväntat fel uppstod");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center flex-col gap-6 p-10 bg-white/10 backdrop-blur-sm rounded-lg w-full sm:w-2/3 shadow-lg"
    >
      <p className="text-2xl font-bold">Lägg till inkomst</p>

      {error && (
        <div className="w-full p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-100">
          {error}
        </div>
      )}
      <div className="flex flex-col gap-2 w-full">
        <label className="text-lg font-semibold" htmlFor="title">
          Titel
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          placeholder="Ange titel"
          className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label className="text-lg font-semibold" htmlFor="hourlyPay">
          Timlön
        </label>
        <input
          value={hourlyPay || ""}
          onChange={(e) =>
            setHourlyPay(e.target.value ? Number(e.target.value) : undefined)
          }
          type="number"
          id="hourlyPay"
          placeholder="Ange timlön"
          className="border border-gray-300 p-4 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400"
          min="0"
          required
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label className="text-lg font-semibold" htmlFor="taxCode">
          Skatt Tabell
        </label>
        <select
          value={taxCode || ""}
          onChange={(e) =>
            setTaxCode(e.target.value ? Number(e.target.value) : undefined)
          }
          name="taxCode"
          id="taxCode"
          className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">Välj skatt tabell</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
        </select>
      </div>
      <button
        className="bg-white text-blue-400 font-bold w-full p-4 cursor-pointer rounded-lg text-xl hover:translate-y-1 transition-transform duration-300 hover:bg-blue-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Sparar..." : "Lägg till"}
      </button>
    </form>
  );
};
export default IncomeForm;
