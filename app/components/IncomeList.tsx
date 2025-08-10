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
      ) : incomes.length > 0 ? (
        incomes.map((income) => <IncomeCard key={income._id} income={income} />)
      ) : (
        <div className="text-center text-white font-bold text-xl">
          No incomes found
        </div>
      )}
    </div>
  );
};
export default IncomeList;
