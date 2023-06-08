import React from "react";
import Slider from "react-slick";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Products } from "../components/Common/slider/Settings";
import bgimg from "../assets/images/bg1.jpg";
import FeatureProduct from "../components/ProductTypes/FeatureProduct";
import top1 from "../assets/images/top1.jpg";
import top2 from "../assets/images/top2.jpg";
import top3 from "../assets/images/top3.jpg";
import imag from "../assets/images/imag1.jpg";
import latest from "../assets/images/latest.jpg";
import Card from "../components/Card/Card";
import InstagramShop from "./InstagramShop";
import Breadcrumbs from "../components/Header/Breadcrumbs";

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const Head = [
    {
      images: top1,
    },
    {
      images: top3,
    },
    {
      images: top2,
    },
    {
      images: top3,
    },
  ];

  const Latests = [
    {
      image: imag,
      name: " Almond Milk Soap",
      amount: "$32.00",
    },
    {
      image: latest,
      name: " Almond Milk Soap",
      amount: "$32.00",
    },
    {
      image: imag,
      name: " Almond Milk Soap",
      amount: "$32.00",
    },
    {
      image: latest,
      name: " Almond Milk Soap",
      amount: "$32.00",
    },
  ];
  return (
    <>
      <section>
        <Breadcrumbs />
        <div
          className="bg-cover mb-14 bg-bottom h-screen flex justify-center items-center"
          style={{
            backgroundImage: `url(${bgimg} )`,
          }}
        >
          <div className="text-center relative">
            <h2
              className="text-lg font-medium text-gray-700"
              data-aos="fade-right"
            >
              2023 Collection
            </h2>

            <h1
              className="sm:text-7xl text-4xl m-auto w-11/12"
              data-aos="fade-left"
            >
              Handmade Natural Cosmetics
            </h1>

            <p
              className="text-lg font-medium text-gray-700 mt-4"
              data-aos="fade-up-left"
            >
              Find The Perfect style for you
            </p>
            <button
              className="rounded transition duration-500 ease-in-out hover:bg-gray-400 transform hover:-translate-y-1 hover:scale-110 bg-blue-500 mt-5 px-6 py-2 text-white hover:transition hover:duration-300 hover:ease-in-out"
              data-aos="fade-up-right"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="mb-3">
          <h4 className="text-center font-bold text-lg" data-aos="fade-down">
            Featured Products
          </h4>
        </div>
        <FeatureProduct />
      </section>

      <section className="my-8">
        <div className="product container w-4/5 m-auto">
          <Slider {...Products}>
            {product.slice(4, 10).map((item) => (
              <div key={item.id}>
                <img
                  className="h-subheight w-full object-center object-cover m-auto"
                  src={item.thumbnail}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Latest Products */}

      <section>
        <div>
          <h4 className="text-center font-bold text-lg">Latest Products</h4>
        </div>

        <div className="container w-4/5 mt-12 justify-center flex flex-wrap m-auto">
          {Latests.map((item, i) => (
            <div
              key={i}
              className="products sm:w-1/2 md:w-1/4 w-ful transition duration-500 ease-in-out hover:bg-gray-300 transform hover:-translate-y-1"
              data-aos="flip-up"
            >
              <div className="absolute left-auto right-0 p-3">
                <a
                  href="#"
                  className="bg-gray-300 w-9 h-9 text-white rounded-full relative mr-auto inline-block p-1.5"
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
                <img src={item.image} alt="product image" />
              </a>

              <div className="mt-3 pl-3">
                <a href="#">
                  <h5 className="text-lg tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                </a>

                <div className="flex items-center justify-between">
                  <span className="font-bold text-base  dark:text-white">
                    {item.amount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-blogcolor mt-9">
          <div className="pt-6">
            <h4 className="text-center mt-4 font-bold text-lg">Our Blog</h4>
          </div>
          <div className="container m-auto w-5/6 my-9">
            <Card />
          </div>
        </div>
      </section>

      <section>
        <InstagramShop />
      </section>
    </>
  );
};

export default Home;
