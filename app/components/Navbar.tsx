import Link from "next/link";
import { GiReceiveMoney } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 rounded-2xl bg-transparent border border-white/30">
      <div className="flex justify-center items-center space-x-2">
        <GiReceiveMoney size={30} />
        <p className="font-bold text-xl">Icome Tracker</p>
      </div>
      <ul className="flex space-x-4">
        <li className="font-bold  border border-white/20 p-2 rounded-full hover:bg-white hover:text-blue-400 cursor-pointer   ">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className="font-bold  border border-white/20 p-2 rounded-full hover:bg-white hover:text-blue-400 cursor-pointer   ">
          <Link href="/addIcome">Add Income</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
