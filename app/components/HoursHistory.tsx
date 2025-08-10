import { Income } from "@/lib/types";
import { FaTrashAlt } from "react-icons/fa";

interface HoursHistoryProps {
  income: Income;
}

const HoursHistory = ({ income }: HoursHistoryProps) => {
  if (!income) return <div>No income data available!</div>;
  return (
    <div className="mt-10 bg-white/10 rounded-3xl p-6">
      <p className="text-3xl font-bold mb-5">Arbetstid Historik </p>
      <ul className="flex flex-col gap-5">
        {income.hours_entries.map((timme) => (
          <li
            key={timme.date}
            className="flex justify-between bg-white/20 p-6 rounded-2xl"
          >
            <div className="font-bold text-lg">{timme.date}</div>
            <div className="flex gap-10">
              <p className="bg-white/15 px-3 py-1 rounded-full font-bold">
                Ordinare: {timme.regular}t
              </p>
              <p className="bg-white/15 rounded-full px-3 py-1 font-bold">
                OB-timmar {timme.overtime}t
              </p>
              <button className="bg-white/15 rounded-full px-3 py-1 font-bold hover:text-red-500 cursor-pointer transition duration-300 ease-in-out scale-105">
                <FaTrashAlt />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HoursHistory;
