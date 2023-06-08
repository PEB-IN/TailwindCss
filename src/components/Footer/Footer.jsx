import React from "react";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className=" bg-gray-500">
      <div className="container m-auto flex flex-wrap justify-between items-center p-6">
        <div className="row sm:w-1/5 lg:w-3/12">
          <a>
            <img src={Logo} className="h-12 mr-3 py-2" />
          </a>
        </div>
        <div className="sm:w-2/4  w-full">
          <ul className="sm:flex sm:flex-wrap justify-between">
            <li className="block py-2 pl-3 font-bold  hover:text-blue-700">
              <a>Home</a>
            </li>
            <li className="block py-2 pl-3 font-bold hover:text-blue-700">
              <a>Shop</a>
            </li>
            <li className="block py-2 pl-3 font-bold hover:text-blue-700">
              <a>Account</a>
            </li>
            <li className="block py-2 pl-3 font-bold hover:text-blue-700">
              <a>Pages</a>
            </li>
            <li className="block py-2 pl-3 font-bold hover:text-blue-700">
              <a>Blog</a>
            </li>
            <li className="block py-2 pl-3 font-bold hover:text-blue-700">
              <a>Docs/Components</a>
            </li>
          </ul>
        </div>
        <div className="md:w-3/12  sm:w-full justi">
          <ul className="flex font-medium lg:justify-center">
            <li className="block py-2 lg:pl-11 md:pl-5">
              <a
                href="https://twitter.com/i/flow/login"
                className="text-3xl block py-2 pl-3 pr-4  md:hover:text-blue-700 md:p-0"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li>

            <li className="block py-2 lg:pl-11 md:pl-5">
              <button className="text-3xl block py-2 pl-3 pr-4 md:hover:text-blue-700 md:p-0">
                <i className="fa fa-facebook-official"></i>
              </button>
            </li>

            <li className="block py-2 lg:pl-11 md:pl-5">
              <a
                href=""
                className="text-3xl block py-2 pl-3 pr-4 md:hover:text-blue-700 md:p-0"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
