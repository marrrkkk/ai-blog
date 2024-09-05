import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar bg-[#18181b]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "text-[#2dd4bf]" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={
                  location.pathname === "/about" ? "text-[#2dd4bf]" : ""
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/history"
                className={
                  location.pathname === "/history" ? "text-[#2dd4bf]" : ""
                }
              >
                History
              </Link>
            </li>
            <li>
              <Link
                to="/people"
                className={
                  location.pathname === "/people" ? "text-[#2dd4bf]" : ""
                }
              >
                People
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-[#2dd4bf]">
          <img src={logo} className="size-12" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex bg-[#252529] rounded-full">
        <ul className="flex border border-neutral-700 space-x-10 px-8 py-2 rounded-full text-sm font-semibold">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "text-[#2dd4bf]" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "text-[#2dd4bf]" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/history"
              className={
                location.pathname === "/history" ? "text-[#2dd4bf]" : ""
              }
            >
              History
            </Link>
          </li>
          <li>
            <Link
              to="/people"
              className={
                location.pathname === "/people" ? "text-[#2dd4bf]" : ""
              }
            >
              People
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Join</a>
      </div>
    </div>
  );
};

export default Navbar;
