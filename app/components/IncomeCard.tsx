import { Income } from "@/lib/types";

interface IncomeCardProps {
  income: Income;
  loading: boolean;
}

const IncomeCard = ({ income, loading }: IncomeCardProps) => {
  return (
    <div className="flex flex-col border bg-transparent border-white/20 rounded-lg p-4 w-64 gap-3 hover:scale-105 transition-transform duration-300 hover:bg-white/10 cursor-pointer">
      <p className="text-2xl font-bold">{income.income_title}</p>
      <p className="text-lg font-bold">Total timmar: {income.hourly_pay}</p>
      <div className="flex justify-center items-center bg-white/10  rounded-lg p-2 mt-2 text-xl font-bold">
        <span>Netto:</span> 7000kr
      </div>
    </div>
  );
};
export default IncomeCard;
