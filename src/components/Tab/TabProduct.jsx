import React from "react";
import { Link } from "react-router-dom";

const TabProduct = ({ item, AddtoWhishlist }) => {
  return (
    <>
      <div className="products w-full h-2/4 sm:w-1/2 md:w-1/4 bg-white transition duration-500 ease-in-out hover:bg-gray-400 transform hover:-translate-y-1">
        <Link to={`/singleproduct/${item.id}`}>
          <div className="text-right">
            <Link
              to={"#"}
              onClick={() => AddtoWhishlist(item)}
              className="bg-gray-300 w-9 h-9 text-white rounded-full relative mr-auto inline-block p-1.5 top-4 right-4"
            >
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
            </Link>
          </div>

          <img
            className="p-4 h-60 object-contain w-full"
            src={item.thumbnail}
            alt="product image"
          />

          <div className="px-5 pb-5">
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {item.brand}
            </h5>

            <div className="flex items-center justify-between">
              <span className="font-bold text-base text-gray-500 dark:text-white">
                ${item.price}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default TabProduct;
