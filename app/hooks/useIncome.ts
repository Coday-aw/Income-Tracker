import { supabase } from "@/lib/supbaseClient";
import { Income } from "@/lib/types";
import { useEffect, useState } from "react";

export const useIncomes = () => {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIncomes = async () => {
      const { data, error } = await supabase
        .from("income-tracker")
        .select("*")
        .order("id", { ascending: false });
      if (error) {
        console.log(error);
      } else {
        setIncomes(data as Income[]);
        setLoading(false);
      }
    };
    fetchIncomes();
  }, []);

  return { incomes, loading };
};

export const useIncome = (id: number) => {
  const [income, setIncome] = useState<Income>();
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchIncomeById = async () => {
      const { data, error } = await supabase
        .from("income-tracker")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        console.log(error);
      } else {
        setIncome(data as Income);
        setIsLoading(false);
      }
    };
    fetchIncomeById();
  }, [id]);

  return { isloading, income };
};
