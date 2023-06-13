import React from "react";
import singleimg from "../assets/images/singleimg.jpg";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Oneproduct } from "../components/Common/slider/Settings";
import cream1 from "./../assets/images/cream1.jpg";
import cream2 from "./../assets/images/cream2.jpg";
import cream3 from "./../assets/images/cream3.jpg";
import top1 from "./../assets/images/top1.jpg";
import top2 from "./../assets/images/top2.jpg";
import top3 from "./../assets/images/top3.jpg";
import Review from "../components/Tab/Review";
import Testing from "./Testing";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionCommon from "./AccordionCommon";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [selectedOption, setSelectedOption] = useState();

  const [singleimage, setsingleimage] = useState(0);
  const params = useParams();

  const changeimg = (indesid) => {
    setsingleimage(indesid);
  };

  const [simple, setSimple] = useState({});
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params.id}`)
      .then((res) => {
        setSimple(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.id]);

  const products = {
    image: singleimg,
    image: [cream1, cream2, cream3, top1, top2, top3, cream1],
  };

  const [accordianopen, setaccordianopen] = useState("1");
  const toggle = (id) => {
    if (accordianopen === id) {
      setaccordianopen(id);
    } else {
      setaccordianopen(id);
    }
  };

  const handleChange = () => {
    setSelectedOption(true);
  };

  return (
    <section>
      <div className="container-fluid bg-white mb-9">
        <div className="row w-3/4 m-auto justify-center border-2 rounded shadow ">
          <div className="md:flex mt-14">
            <div className="md:w-2/3 relative">
              <div className=" w-9 h-9 rounded-full border-2 pl-2 leading-9 right-2 bg-gray-400 absolute left-auto ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 34 34"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" text-white inline-block leading-10 text-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>

              <div className="mb-14">
                <img
                  className="m-auto h-single object-contain"
                  src={simple?.images && simple?.images[singleimage]}
                />
              </div>

              <div className="w-11/12 m-auto slide">
                {simple?.images ? (
                  <>
                    <Slider {...Oneproduct}>
                      {simple?.images.map((item, i) => (
                        <div key={i}>
                          <img
                            onClick={() => changeimg(i)}
                            className="h-32 object-contain w-full"
                            src={item}
                            alt="product_pic"
                          />
                        </div>
                      ))}
                    </Slider>
                  </>
                ) : (
                  <>
                    <p>Loadinng</p>
                  </>
                )}
              </div>
            </div>
            <div className="md:w-1/3 md:px-0 md:mt-0 mt-6 px-8">
              <h3 className="font-bold text-2xl mb-6">{simple.title}</h3>
              <p className="font-medium text-xl mb-6">
                Brand: <span className="font-bold">{simple.brand}</span>
              </p>
              <p className="font-medium text-xl mb-6">
                Category: {simple.category}
              </p>
              <div className="mb-4">
                <span className="mr-2 text-yellow-400 font-bold">4.0</span>
                <span className="text-yellow-400">
                  <i className="fa fa-star mr-1" aria-hidden="true"></i>
                  <i className="fa fa-star mr-1" aria-hidden="true"></i>
                  <i className="fa fa-star mr-1" aria-hidden="true"></i>
                  <i className="fa fa-star mr-1" aria-hidden="true"></i>
                  <i className="fa fa-star-o mr-2" aria-hidden="true"></i>
                </span>
                <span>{simple.rating} Rating</span>
              </div>
              <div className="py-4 text-xl">
                <span className="mr-4 font-bold">${simple.price}</span>
                <span className="line-through text-red-500">$280</span>
              </div>
              <p className="mb-3 p-1 w-offer text-green-600 font-medium">
                {simple.discountPercentage}% :off
              </p>
              <p className="mb-3 p-1 text-center w-24 font-medium border-2 bg-green-200">
                Stock : {simple.stock}
              </p>
              <div className=" mb-8">
                <h4 className="font-medium mb-2">Color</h4>
                <span>
                  <input
                    className="mr-3 w-6 h-6 appearance-none rounded-full bg-red-500"
                    // checked={selectedOption === "option1"}
                    onChange={handleChange}
                    type="radio"
                    // value={option1}
                  ></input>
                  <input
                    className="mr-3 w-6 h-6 appearance-none rounded-full bg-green-500"
                    // checked={selectedOption === "option2"}
                    onChange={handleChange}
                    type="radio"
                    // value={option2}
                  ></input>
                  <input
                    className="mr-3 w-6 h-6 appearance-none rounded-full bg-violet-600"
                    // checked={selectedOption === "option3"}
                    onChange={handleChange}
                    type="radio"
                    // value={option3}
                  ></input>
                  <input
                    className="mr-3 w-6 h-6 appearance-none rounded-full bg-black"
                    // checked={selectedOption === "option4"}
                    onChange={handleChange}
                    type="radio"
                    // value={option4}
                  ></input>
                </span>
              </div>

              <div className="lg:flex">
                <button className="bg-gray-400 hover:bg-gray-500 mb-3 text-white font-bold py-2 mr-4 px-4 rounded inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>

                  <span> Add To Wishlist</span>
                </button>
                <button className="bg-cart hover:bg-blue-500 mb-3 text-white font-bold py-2 mr-4 px-4 rounded">
                  <span>Add To Cart</span>
                </button>
              </div>
              <div className="mb-6">
                <p className="text-2xl mt-6 font-normal">Product Description</p>
                <div>
                  <p>
                    {simple.description}
                    <span className="text-blue-400 font-medium">
                      See Full Description
                    </span>
                  </p>
                </div>
              </div>
              <div>
                {/* <Accordion open={accordianopen} toggle={toggle}>
                  <AccordionItem>
                    <AccordionHeader targetId="1">
                      Accordion Item 1
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                      <strong>
                        This is the first item&#39;s accordion body.
                      </strong>
                      You can modify any of this with custom CSS or overriding
                      our default variables. It&#39;s also worth noting that
                      just about any HTML can go within the.
                    </AccordionBody>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionHeader targetId="2">
                      Accordion Item 2
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                      <strong>
                        This is the first item&#39;s accordion body.
                      </strong>
                      You can modify any of this with custom CSS or overriding
                      our default variables. It&#39;s also worth noting that
                      just about any HTML can go within the.
                    </AccordionBody>
                  </AccordionItem>
                </Accordion> */}
                <div id="accordionExample">
                  <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="mb-0" id="headingOne">
                      <button
                        className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Accordion Item #1
                        <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="!visible"
                      data-te-collapse-item
                      data-te-collapse-show
                      aria-labelledby="headingOne"
                      data-te-parent="#accordionExample"
                    >
                      <div className="px-5 py-4">
                        <strong>
                          This is the first item's accordion body.
                        </strong>
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="mb-0" id="headingTwo">
                      <button
                        className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Accordion Item #2
                        <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="!visible hidden"
                      data-te-collapse-item
                      aria-labelledby="headingTwo"
                      data-te-parent="#accordionExample"
                    >
                      <div className="px-5 py-4">
                        <strong>
                          This is the second item's accordion body.
                        </strong>
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="accordion-header mb-0" id="headingThree">
                      <button
                        className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Accordion Item #3
                        <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="!visible hidden"
                      data-te-collapse-item
                      aria-labelledby="headingThree"
                      data-te-parent="#accordionExample"
                    >
                      <div className="px-5 py-4">
                        <strong>
                          This is the third item's accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p>Share this product :</p>
                <div className="text-xl mt-4 mb-9">
                  <a href="https://twitter.com/i/flow/login">
                    <i
                      className="fa fa-twitter socialmedia leading-height"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a href="#">
                    <i
                      className="fa fa-facebook-official cursor-pointer mr-4 w-10 h-10 rounded-full border-2 bg-gradient-to-r from-green-400 to-blue-500 text-white text-center leading-height"
                      aria-hidden="true"
                    ></i>
                  </a>

                  <a href="#">
                    <i
                      className="fa fa-linkedin-square  socialmedia leading-height"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a href="#">
                    <i
                      className="fa fa-ellipsis-h socialmedia leading-height"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Review />
      <div>
        <AccordionCommon />
      </div>
    </section>
  );
};

export default SingleProduct;
