const timmar = [
  {
    id: 1,
    datum: "2025-07-17",
    NormalTimmar: 4,
    ObTimmar: 0,
    netto: 2500,
  },
  {
    id: 2,
    datum: "2025-07-17",
    NormalTimmar: 4,
    ObTimmar: 0,
    netto: 2500,
  },
  {
    id: 3,
    datum: "2025-07-17",
    NormalTimmar: 4,
    ObTimmar: 0,
    netto: 2500,
  },
];

const HoursHistory = () => {
  return (
    <div className="mt-10 bg-white/10 rounded-3xl p-6">
      <p className="text-3xl font-bold mb-5">Arbetstid Historik </p>
      <ul className="flex flex-col gap-5">
        {timmar.map((timme) => (
          <li
            key={timme.id}
            className="flex justify-between bg-white/20 p-6 rounded-2xl"
          >
            <div className="font-bold text-lg">{timme.datum}</div>
            <div className="flex gap-10">
              <p className="bg-white/15 px-3 py-1 rounded-full font-bold">
                Ordinare: {timme.NormalTimmar}t
              </p>
              <p className="bg-white/15 rounded-full px-3 py-1 font-bold">
                OB-timmar {timme.ObTimmar}t
              </p>
              <p className="bg-white/15 rounded-full px-3 py-1 font-bold">
                Netto: {timme.netto}kr
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HoursHistory;
