import { FaUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <>
      <header className="bg-colorPrimary w-full h-20 justify-center  ">
        <div className="flex justify-between items-center px-16 max-w-7xl h-20 m-auto ">
          <span className="text-2xl">DUROTAN</span>
          <div className="flex">
            <ul className="flex gap-4 lg:gap-8 ">
              <li className="text-xs">HOME</li>
              <li className="text-xs">SHOP</li>
              <li className="text-xs">PRODUCT</li>
              <li className="text-xs">BLOG</li>
              <li className="text-xs">PAGES</li>
            </ul>
          </div>
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
