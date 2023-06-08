import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import { Otherproduct } from "../Common/slider/Settings";
import cream2 from "../../assets/images/cream2.jpg";
import cream3 from "../../assets/images/cream3.jpg";
import top1 from "../../assets/images/top1.jpg";
import top2 from "../../assets/images/top2.jpg";
import top3 from "../../assets/images/top3.jpg";
import TabProduct from "./TabProduct";

const Review = () => {
  const [toggle, setToggle] = useState(1);
  const updateToggle = (id) => {
    setToggle(id);
  };

  const Customerreview = [
    {
      content: "",
      description:
        "This is the first item's accordion body.You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the. Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule",
      heading: "Product Features :",
      value1: "Unlimited product updates",
      value2: "Unlimited shares",
      value3: "Every feature in Figmaland",
    },
  ];

  const Other = [
    { image: cream2, name: " Almond Milk Soap", amount: "$32.00" },
    { image: cream3, name: " Almond Milk Soap", amount: "$32.00" },
    { image: top1, name: " Almond Milk Soap", amount: "$32.00" },
    { image: top2, name: " Almond Milk Soap", amount: "$32.00" },
    { image: top3, name: " Almond Milk Soap", amount: "$32.00" },
    { image: cream3, name: " Almond Milk Soap", amount: "$32.00" },
  ];

  return (
    <section>
      <div>
        <div>
          <ul
            className="flex flex-wrap justify-center mb-5 w-tabwidth"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                onClick={() => updateToggle(1)}
                className={`inline-block text-gray-500 rounded-t-lg py-4 px-4 text-sm font-bold text-center border-transparent border-b-2 ${
                  toggle == 1 && "border-blue-500 border-b-3 active"
                }`}
                id="featured-tab"
                data-tabs-target="#featured"
                type="button"
                role="tab"
                aria-controls="featured"
                aria-selected="true"
              >
                Description
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                onClick={() => updateToggle(2)}
                className={`inline-block text-gray-500 rounded-t-lg py-4 px-4 text-sm font-bold text-center border-transparent border-b-2 ${
                  toggle == 2 && "border-blue-500 border-b-3 active"
                }`}
                id="bestseller-tab"
                data-tabs-target="#bestseller"
                type="button"
                role="tab"
                aria-controls="bestseller"
                aria-selected="false"
              >
                Reviews ( 20 )
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                onClick={() => updateToggle(3)}
                className={`inline-block text-gray-500 rounded-t-lg py-4 px-4 text-sm font-bold text-center border-transparent border-b-2 ${
                  toggle == 3 && "border-blue-500 border-b-3 active"
                }`}
                id="newarrivals-tab"
                data-tabs-target="#newarrivals"
                type="button"
                role="tab"
                aria-controls="newarrivals"
                aria-selected="false"
              >
                More products
              </button>
            </li>
          </ul>
        </div>

        <div id="myTabContent">
          {toggle === 1 && (
            <div
              className="container w-4/5 m-auto"
              id="featured"
              role="tabpanel"
              aria-labelledby="featured-tab"
            >
              {Customerreview.map((item, i) => (
                <div key={i} className="px-5 pb-5 w-3/5">
                  <a href="#">
                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.content}
                    </h5>
                  </a>

                  <div className="flex items-center justify-between">
                    <span className="text-base dark:text-white">
                      {item.description}
                      <p className="pt-3">{item.description1}</p>
                    </span>
                  </div>
                  <div>
                    <h4 className="mt-6 font-bold">{item.heading}</h4>
                    <ul
                      style={{ listStyleType: "disc" }}
                      className="leading-loose pl-7"
                    >
                      <li>{item.value1}</li>
                      <li>{item.value2}</li>
                      <li>{item.value3}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {toggle === 2 && (
            <div
              className="container w-4/5 m-auto"
              id="bestseller"
              role="tabpanel"
              aria-labelledby="bestseller-tab"
            >
              {Customerreview.map((item, i) => (
                <div key={i} className="px-5 pb-5 w-3/5">
                  <a href="#">
                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.content}
                    </h5>
                  </a>

                  <div className="flex items-center justify-between">
                    <span className="text-base dark:text-white">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {toggle === 3 && (
            <div
              className="container w-4/5 m-auto"
              id="newarrivals"
              role="tabpanel"
              aria-labelledby="newarrivals-tab"
            >
              <div className="flex flex-wrap">
                {Customerreview.map((item, i) => (
                  <div key={i} className="px-5 pb-5 w-3/5">
                    <a href="#">
                      <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                        {item.content}
                      </h5>
                    </a>

                    <div className="flex items-center justify-between">
                      <span className="text-base dark:text-white">
                        {item.description}
                      </span>
                    </div>
                    <div>
                      <h4 className="mt-6 font-bold">{item.heading}</h4>
                      <ul
                        style={{ listStyleType: "disc" }}
                        className="leading-loose pl-7"
                      >
                        <li>{item.value1}</li>
                        <li>{item.value2}</li>
                        <li>{item.value3}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <section className="mb-6">
        <div>
          <h2 className="text-start text-xl font-bold w-otherwidth m-auto">
            Other Products
          </h2>
          <div className="container w-4/5 mt-12 justify-center m-auto otherslide">
            <Slider {...Otherproduct}>
              {Other.map((item, i) => (
                <div key={i}>
                  <div className="text-right">
                    <a
                      href="#"
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
                    </a>
                  </div>
                  <a href="#">
                    <img
                      className="p-8 h-60 object-contain w-full"
                      src={item.image}
                    />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                    </a>

                    <div className="flex items-center justify-between">
                      <span className="font-bold text-base text-gray-500 dark:text-white">
                        {item.amount}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Review;
