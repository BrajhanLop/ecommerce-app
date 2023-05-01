import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoCartOutline, IoMenuOutline, IoClose } from "react-icons/io5";
import "./Navbar.css";
export const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SHOP", link: "/" },
    { name: "PRODUCT", link: "/" },
    { name: "PAGES", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-colorPrimary w-full top-0 fixed left-0">
        <div className="flex justify-between items-center py-6 px-16 max-w-7xl h-20 m-auto container-navbar">
          <span className="text-2xl">DUROTAN</span>
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 cursor-pointer md:hidden menu-button"
          >
            {open ? <IoClose /> : <IoMenuOutline />}
          </div>

          <ul
            className={`md:flex md:items-center absolute md:static top-14 bg-colorPrimary  md:mt-0 w-full md:w-auto left-0 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            } `}
          >
            {Links.map((link) => {
              return (
                <li key={link.name} className="ml-8 md:my-0 my-7">
                  <a href={link.link}>{link.name}</a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-11 ">
            <div className="flex gap-4">
              <p>EN</p>
              <p className="text-gray-400">FR</p>
            </div>

            <div className="flex gap-4">
              <span>
                <FaUser className="text-gray-900" />
              </span>
              <span>
                <IoCartOutline />
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
