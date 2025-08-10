import { Income } from "@/lib/types";
import {
  formatCurrency,
  formatHours,
  calculateTotalHours,
  calculateOvertimeHours,
  calculateNetSalary,
  calculateGrossSalary,
} from "@/lib/calculations";

interface StatCardProps {
  income: Income;
}

const StatCard = ({ income }: StatCardProps) => {
  if (!income) {
    return <div>No income data available</div>;
  }

  const totalTimmar = calculateTotalHours(income);
  const obTimmar = calculateOvertimeHours(income);
  const nettoLön = calculateNetSalary(income);
  const bruttoLön = calculateGrossSalary(income);

  return (
    <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 ">
      <div className="bg-white/10 w-full  p-4 h-36 rounded-2xl flex flex-col justify-center items-center gap-2 hover:translate-y-[-3px] transition duration-300 ease-in-out  ">
        <p className="font-bold text-5xl">{formatHours(totalTimmar)}</p>
        <p className="font-bold text-xl">Total Timmar</p>
      </div>
      <div className="bg-white/10 w-full  p-4 h-36 rounded-2xl flex flex-col justify-center items-center gap-2 hover:translate-y-[-3px] transition duration-300 ease-in-out  ">
        <p className="font-bold text-5xl">{formatHours(obTimmar)}</p>
        <p className="font-bold text-xl">OB Timmar</p>
      </div>
      <div className="bg-white/10  w-full   p-4 h-36 rounded-2xl flex flex-col justify-center items-center gap-2 hover:translate-y-[-3px] transition duration-300 ease-in-out ">
        <p className="font-bold text-5xl">{formatCurrency(nettoLön)} kr</p>
        <p className="font-bold text-xl">Netto inkomst</p>
      </div>
      <div className="bg-white/10  w-full   p-4 h-36 rounded-2xl flex flex-col justify-center items-center gap-2 hover:translate-y-[-3px] transition duration-300 ease-in-out ">
        <p className="font-bold text-5xl">{formatCurrency(bruttoLön)} kr</p>
        <p className="font-bold text-xl">Brutto inkomst</p>
      </div>
    </div>
  );
};
export default StatCard;
