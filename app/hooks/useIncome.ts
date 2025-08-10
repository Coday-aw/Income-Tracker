import { Income } from "@/lib/types";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

// Hook to fetch all incomes for the current user
export const useIncomes = () => {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    const fetchIncomes = async () => {
      if (!user?.id) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/income?creator=${user.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setIncomes(data.incomes || []);
        setLoading(false);
        console.log("Fetched incomes:", data);
      } catch (error) {
        console.error("Error fetching incomes:", error);
        setIncomes([]);
        setLoading(false);
      }
    };

    fetchIncomes();
  }, [user?.id]);

  return { incomes, loading };
};

// Hook to fetch a specific income by ID
export const useIncome = (id: string) => {
  const [income, setIncome] = useState<Income>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchIncomeById = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/income/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await res.json();
        setIncome(data.income || []);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log("error fetching data", error);
        setIsLoading(false);
      }
    };
    fetchIncomeById();
  }, [id]);

  return { isLoading, income };
};
