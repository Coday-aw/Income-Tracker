"use client";
import IncomeCard from "./IncomeCard";
import { useIncomes } from "../hooks/useIncome";

const IncomeList = () => {
  const { incomes, loading } = useIncomes();
  return (
    <div className="flex flex-wrap gap-4">
      {incomes.map((income) => (
        <IncomeCard key={income.id} income={income} loading={loading} />
      ))}
      {/* <IncomeCard income={income} loading={loading} /> */}
    </div>
  );
};
export default IncomeList;
