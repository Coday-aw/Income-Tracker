const StatCard = () => {
  return (
    <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 ">
      <div className="bg-white/10 w-full  p-4 h-36 rounded-2xl flex flex-col justify-center items-center gap-2 hover:translate-y-[-3px] transition duration-300 ease-in-out  ">
        <p className="font-bold text-5xl">26</p>
        <p className="font-bold text-xl">Total Timmar</p>
      </div>
      <div className="bg-white/10 w-full  p-4 h-36 rounded-2xl flex flex-col justify-center items-center gap-2 hover:translate-y-[-3px] transition duration-300 ease-in-out  ">
        <p className="font-bold text-5xl">6</p>
        <p className="font-bold text-xl">OB Timmar</p>
      </div>
      <div className="bg-white/10  w-full   p-4 h-36 rounded-2xl flex flex-col justify-center items-center gap-2 hover:translate-y-[-3px] transition duration-300 ease-in-out ">
        <p className="font-bold text-5xl">5000kr</p>
        <p className="font-bold text-xl">Netto inkomst</p>
      </div>
    </div>
  );
};
export default StatCard;
