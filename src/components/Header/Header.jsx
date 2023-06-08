import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleclick = () => {
    console.log("click");
    setOpen(!open);
    return;
  };
  return (
    <header>
      {/* absolute  */}
      <nav className="inset-x-0">
        <div className="justify-between flex p-4">
          <div className="sm:w-2/12 ">
            <Link to="#" className="items-center">
              <img src={Logo} className="h-8 mr-3" alt="Figma Logo" />
            </Link>
          </div>
          <div
            className={`${
              open ? "block" : "hidden"
            } items-center w-7/12 md:block justify-end`}
            id="mobile-menu-2"
          >
            <ul
              className="md:flex inset-x-0 z-10 justify-evenly md:relative absolute w-full flex-col font-medium p-4 md:p-0 mt-8 border 
             md:flex-row md:mt-0 md:border-0 bg-gray-300 md:bg-transparent lg:bg-none 
             "
            >
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-white hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-white hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  to="/singleproduct"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-white hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Pages
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-white hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-white hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Doc / Components
                </Link>
              </li>
            </ul>
          </div>
          <div className="items-center ">
            <div className=" hidden md:block ">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0  ">
                <li>
                  <button className="block py-2 pr-4 mr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 pr-4 mr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <button className="block py-2 pl-3 pr-4 mr-4 text-gray-900 rounded relative hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                    <span className="badge badge-light w-6 h-6 leading-5 cart_badge border-2 rounded-full bg-red-500 text-white gead absolute bottom-4">
                      0
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </button>
                </li>

                <li>
                  <button className="block py-2 pr-4 mr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <button onClick={handleclick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
