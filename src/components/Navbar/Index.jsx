import { FaBeer } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <header>
        <span>DUROTAN</span>
        <div>
          <ul>
            <li>HOME</li>
            <li>SHOP</li>
            <li>PRODUCT</li>
            <li>BLOG</li>
            <li>PAGES</li>
          </ul>
        </div>
        <div>
          <p>EN</p>
          <p>FR</p>
        </div>
        <span>
          <FaBeer />
        </span>
        <span></span>
        <div></div>
      </header>
    </>
  );
};
