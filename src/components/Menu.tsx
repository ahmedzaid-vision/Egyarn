import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2"
        onMouseEnter={() => setMenuOpen(!menuOpen)}
      >
        {" "}
        Proucts
        <GoChevronDown />
      </div>
      {menuOpen ? (
        <div
          className="absolute bg-[#818181de] p-3 top-[40px] left-0 h-[130px] w-[200px] transition-transform translate-y-0  flex flex-col text-white"
          onMouseLeave={() => setMenuOpen(!menuOpen)}
        >
          <Link to={"/yarn"} className="py-2 uppercase">
            Yarn
          </Link>
          <Link to={"/knitting"} className="py-1 uppercase ">
           Knitting
          </Link>
          <Link to={"/Carments"} className="py-2  uppercase">
            Ready Made Carments
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Menu;
