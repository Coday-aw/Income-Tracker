import { Income } from "@/lib/types";
import Link from "next/link";

interface IncomeCardProps {
  income: Income;
}

const IncomeCard = ({ income }: IncomeCardProps) => {
  return (
    <Link
      href={`/incomeDetail/${income._id}`}
      className="flex w-full flex-col border border-white/20 rounded-lg p-5 sm:w-64 md:w-80 gap-3 hover:scale-105 transition-transform duration-300 cursor-pointer"
      style={{
        background:
          " linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
      }}
    >
      <p className="text-2xl font-bold">{income.incomeTitle}</p>
      <p className="text-lg font-bold">Total timmar: {income.hourlyPay}</p>
      <div className="flex justify-center items-center bg-white/10  rounded-lg p-2 mt-2 text-xl font-bold">
        <span>Netto:</span> 7000kr
      </div>
    </Link>
  );
};
export default IncomeCard;
