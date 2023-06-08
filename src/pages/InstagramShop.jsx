import React from "react";
import backgroundbtn from "./../assets/images/backgroundbtn.jpg";
import background from "./../assets/images/background.jpg";
import bg2 from "./../assets/images/bg2.jpg";
import bg5 from "./../assets/images/bg5.jpg";
import bg3 from "./../assets/images/bg3.jpeg";
// import top2 from "./../assets/images/top2.jpg";
// import top3 from "./../assets/images/top3.jpg";

const InstagramShop = () => {
  return (
    <div className="container-fluid">
      <div className="row flex flex-wrap">
        <div
          className="sm:w-1/2 w-full h-backhight bg-center items-center flex justify-center bg-cover bg-no-repeat"
          data-aos="flip-left"
          style={{
            backgroundImage: `url(${backgroundbtn} )`,
          }}
        >
          <div>
            <button className="border-2 p-4 text-sm bg-gray-500 opacity-50 text-white hover:text-white hover:font-bold hover:bg-blue-500">
              FRAGRANCE FREE
            </button>
          </div>
        </div>

        <div className="sm:w-1/2 w-full">
          <div className="row flex">
            <div
              className="w-3/6 h-subheight items-center flex justify-center  bg-cover bg-no-repeat"
              data-aos="zoom-out-left"
              style={{
                backgroundImage: `url(${bg5})`,
              }}
            >
              <div className="">
                <button className="border-2 px-4 py-2 text-sm  text-white bg-gray-500 opacity-50 hover:text-white hover:font-bold hover:bg-blue-500">
                  GLUTEN FREE
                </button>
              </div>
            </div>

            <div
              className="w-3/6 h-subheight items-center flex justify-center  bg-cover bg-no-repeat"
              data-aos="zoom-out-right"
              style={{
                backgroundImage: `url(${background})`,
              }}
            >
              <div className="">
                <button className="border-2 px-4 py-2 text-sm text-white bg-gray-500 opacity-50  hover:text-white hover:font-bold hover:bg-blue-500">
                  ACCESSORIES
                </button>
              </div>
            </div>
          </div>

          <div className="row flex">
            <div
              className="w-3/6 h-subheight items-center flex justify-center  bg-cover bg-no-repeat"
              data-aos="zoom-out-left"
              style={{
                backgroundImage: `url(${bg2} )`,
              }}
            >
              <button className="border-2 px-4 py-2 text-sm bg-gray-500 opacity-50  text-white hover:text-white hover:font-bold hover:bg-blue-500">
                VEGAN
              </button>
            </div>
            <div
              className="w-3/6 h-subheight items-center flex justify-center  bg-cover bg-no-repeat"
              data-aos="zoom-out-right"
              style={{
                backgroundImage: `url(${bg3} )`,
              }}
            >
              <div className="">
                <button className="border-2 px-4 py-2 text-sm bg-gray-500 opacity-50 text-white hover:text-white hover:font-bold hover:bg-blue-500">
                  PARABENS FREE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramShop;
