import { useEffect, useRef, useState } from "react";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";

import logo from "../../public/logo.png";
import { Link } from "react-router-dom";


const Header = () => {
  const navLinks = [
    { text: "Home", route: "/" },
    { text: "About", route: "/about" },
    { text: "Products", route: "/products" },
    { text: "Technology", route: "/technology" },
    { text: "Quality Assurance", route: "/quality-assurance" },
    { text: "Careers", route: "/careers" },
    { text: "Contact Us", route: "/contact-us" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverLink, setHoverLink] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  // handleClickOutside
  const handleClickOutside = () => {
    if (headerRef.current) {
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // handleScroll
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <div>
      <header
        className={` px-8 border-b py-3  fixed  w-full z-50  shadow-md ${
          scrolled ? "bg-white text-[#242323]" : "text-white"
        }`}
        ref={headerRef}
      >
        {/* <SearchBar /> */}
        <div className="container mx-auto flex justify-between items-center">
          <Link to={'/'} className="">
            <img
              src={logo}
              alt="Square Contracting Logo"
              className=" w-[90px] lg:w-[130px] "
            />
          </Link>
          {/* Navigation as */}
          <nav
            className={`hidden lg:flex items-center gap-10  mb-3 ${
              scrolled ? " " : ""
            } 
         
          } `}
          >
            {navLinks.map((navLink, index) => {
              return (
                <Link
                  to={navLink.route}
                  key={index}
                  className={`text-[14px] font-300 uppercase relative before:absolute before:transition duration-500  before:h-[1px] before:bg-red-100 before:bottom-0 before:left-0 ${
                    hoverLink ? "" : "before:w-0"
                  }`}
                  onMouseEnter={() => setHoverLink(!hoverLink)}
                  onMouseLeave={() => setHoverLink(!hoverLink)}
                >
                  {navLink.text}
                </Link>
              );
            })}
          </nav>
          {/* toggleMenu  */}
          <div className="text-2xl block lg:hidden cursor-pointer ">
            <div
              className={` ${
                scrolled ? "text-[#242323] mb-1 " : "text-white mb-6"
              }  ${menuOpen ? "hidden" : "block text-white "} `}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <MdOutlineMenu />
            </div>
            <div
              className={` ${
                menuOpen ? "bloc text-black" : "hidden"
              } relative z-40 mb-0`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <MdOutlineClose />
            </div>
          </div>
          {/* Mobile Menu */}
          <div
            className={`${
              menuOpen ? " scale-x-100" : " scale-x-0"
            } absolute right-0 top-0 bg-white text-black w-[300px] duration-300 h-[100vh] shadow-lg transition-transform transform origin-top-right z-30`}
          >
            <div className="mt-28 p-4 flex flex-col text-[11px] font-bold ">
              <div className="border-b mb-2 pb-2">
                <a href="#home" className=" py-3  font-bold">
                  Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
     
    </div>
  );
};

export default Header;
