import React, { useState, useEffect } from "react";
import prodimg from "../../assets/images/21.jpg";
import prodimg1 from "../../assets/images/45.jpg";
import prodimg2 from "../../assets/images/49.jpg";
import cream1 from "../../assets/images/cream1.jpg";
import cream2 from "../../assets/images/cream2.jpg";
import cream3 from "../../assets/images/cream3.jpg";
import cream4 from "../../assets/images/cream4.jpg";
import cream5 from "../../assets/images/cream5.jpg";
import TabProduct from "../Tab/TabProduct";
import axios from "axios";
import { Link } from "react-router-dom";

const FeatureProduct = () => {
  const [toggle, setToggle] = useState(1);
  const updateToggle = (id) => {
    setToggle(id);
  };

  const [feature, setFeature] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setFeature(res.data.products);
      console.log(res.data.products);
    });
  }, []);

  const singleprod = [
    {
      image: prodimg,
      name: " Almond Milk Soap",
      amount: "$599",
    },
    {
      image: prodimg1,
      name: " Almond Milk Soap",
      amount: "$599",
    },
    {
      image: prodimg2,
      name: " Almond Milk Soap",
      amount: "$599",
    },
    {
      image: cream5,
      name: " Almond Milk Soap",
      amount: "$599",
    },
    {
      image: cream4,
      name: " Almond Milk Soap",
      amount: "$599",
    },
    {
      image: cream1,
      name: " Almond Milk Soap",
      amount: "$599",
    },
    {
      image: cream2,
      name: " Almond Milk Soap",
      amount: "$599",
    },
    {
      image: cream3,
      name: " Almond Milk Soap",
      amount: "$599",
    },
  ];

  const Bestsell = [
    {
      image: cream1,
      name: " Almond Milk Soap",
      amount: "$599",
    },
    {
      image: cream3,
      name: " Almond Milk Soap",
      amount: "$599",
    },
    {
      image: prodimg2,
      name: " Almond Milk Soap",
      amount: "$599",
    },
    {
      image: prodimg1,
      name: " Almond Milk Soap",
      amount: "$599",
    },
  ];

  const Arrivals = [
    {
      image: cream5,
      name: " Almond Milk Soap",
      amount: "$599",
    },
    {
      image: cream4,
      name: " Almond Milk Soap",
      amount: "$599",
    },
    {
      image: cream1,
      name: " Almond Milk Soap",
      amount: "$599",
    },
    {
      image: cream2,
      name: " Almond Milk Soap",
      amount: "$599",
    },
  ];
  return (
    <>
      <div>
        <div>
          <ul
            className="flex flex-wrap justify-center mb-5"
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
                Featured
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
                Best Seller
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
                New Arrivals
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent" data-aos="flip-down">
          {toggle === 1 && (
            <div
              className="container w-4/5 m-auto"
              id="featured"
              role="tabpanel"
              aria-labelledby="featured-tab"
            >
              <div className="flex flex-wrap">
                {feature.map((item) => (
                  <TabProduct key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}

          {toggle === 2 && (
            <div
              className="container w-4/5 m-auto"
              id="bestseller"
              role="tabpanel"
              aria-labelledby="bestseller-tab"
            >
              <div className="flex flex-wrap">
                {feature.slice(20, 28).map((item) => (
                  <TabProduct key={item.id} item={item} />
                ))}
              </div>
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
                {feature.slice(15, 19).map((item) => (
                  <TabProduct key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
