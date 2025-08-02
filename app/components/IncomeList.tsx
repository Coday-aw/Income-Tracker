"use client";
import IncomeCard from "./IncomeCard";
import { useIncomes } from "../hooks/useIncome";

const IncomeList = () => {
  const { incomes, loading } = useIncomes();
  return (
    <div className="flex flex-wrap gap-4">
      {loading ? (
        <div className="text-center text-white font-bold text-xl">
          Loading...
        </div>
      ) : (
        incomes.map((income) => <IncomeCard key={income.id} income={income} />)
      )}
    </div>
  );
};
export default IncomeList;
