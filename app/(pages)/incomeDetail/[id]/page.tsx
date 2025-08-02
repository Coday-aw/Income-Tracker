"use client";
import { useParams } from "next/navigation";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useIncome } from "@/app/hooks/useIncome";
import HoursForm from "@/app/components/HoursForm";
import StatCard from "@/app/components/StatCard";
import HoursHistory from "@/app/components/HoursHistory";
import Link from "next/link";

function page() {
  const params = useParams();
  const id = params.id ? Number(params.id) : undefined;
  const { income, isloading } = useIncome(id as number);
  //   const [income, setIncome] = useState<Income>();
  //   const [isloading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     const fetchIncomeById = async () => {
  //       const { data, error } = await supabase
  //         .from("income-tracker")
  //         .select("*")
  //         .eq("id", params.id)
  //         .single();
  //       if (error) {
  //         console.log(error);
  //       } else {
  //         setIncome(data as Income);
  //         setIsLoading(false);
  //       }
  //     };
  //     fetchIncomeById();
  //   }, [params.id]);
  return (
    <div>
      {isloading ? (
        <div>Loading... </div>
      ) : (
        <div
          className="border border-white/20 rounded-3xl p-8"
          style={{
            background:
              "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
          }}
        >
          <div className="flex justify-between">
            <p className="text-5xl font-bold">{income?.income_title}</p>{" "}
            <Link href={"/dashboard"}>
              <button className="bg-white/20 font-semibold px-6 py-3 rounded-full flex justify-center items-center gap-2 hover:translate-y-[-3px] transition duration-300 ease-in-out hover:shadow-2xl hover:bg-white/40 cursor-pointer">
                <FaLongArrowAltLeft />
                Back
              </button>{" "}
            </Link>
          </div>
          <StatCard />
          <HoursForm />
          <HoursHistory />
        </div>
      )}
    </div>
  );
}
export default page;
