const HoursForm = () => {
  return (
    <div className="mt-10 bg-white/10 rounded-2xl p-6">
      <p className="text-3xl mb-5 font-bold ">Lägg Till Timmar</p>
      <form>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
          <div className="flex flex-col font-bold gap-2 w-full ">
            <label htmlFor="Datum">Datum</label>
            <input type="date" className="bg-white/20 p-4 rounded-2xl   " />
          </div>
          <div className="flex flex-col font-bold gap-2 w-full  ">
            <label htmlFor="Timmar">Vanliga timmar</label>
            <input
              type="number"
              placeholder="0.0"
              className="bg-white/20 p-4 rounded-2xl   "
            />
          </div>
          <div className="flex flex-col font-bold gap-2 w-full  ">
            <label htmlFor="OB-timamr">OB timmar</label>
            <input
              type="number"
              placeholder="0.0"
              className="bg-white/20 p-4 rounded-2xl "
            />
          </div>
        </div>

        <button className="bg-white text-blue-600 font-bold text-2xl p-4 rounded-3xl w-full mt-10 cursor-pointer hover:translate-y-[-3px] transition duration-300 ease-in-out ">
          Lägg till
        </button>
      </form>
    </div>
  );
};
export default HoursForm;
