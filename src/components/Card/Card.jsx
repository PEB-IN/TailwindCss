import React from "react";
import card1 from "../../assets/images/card1.jpg";
import card3 from "../../assets/images/card3.jpg";

const Card = () => {
  const Cardimg = [
    {
      image: card1,
      date: "20/MAY/2023",
      heading: "Life Tips From <br/> Top Ten Adventure",
      description:
        "<b>Slate helps you see how many </br> more days you need to work to reach.",

      day: "20 May 2023",
    },
    {
      image: card3,
      date: "20/MAY/2023",
      heading: "Life Tips From Top <br/> Ten Adventure",
      description:
        "Slate helps you see how many <br/> more days you need to work to reach.",

      day: "20 May 2023",
    },
    {
      image: card1,
      date: "20/MAY/2023",
      heading: "Top Ten Adventure <br/> Travelers",
      description:
        "Slate helps you see how many <br/> more days you need to work to reach.",
      new: "New",
      day: "20 May 2023",
    },
  ];
  return (
    <div className="flex flex-wrap">
      {Cardimg.map((item, i) => (
        <div
          key={i}
          className="max-w-sm m-auto mb-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img className="rounded-t-lg" src={item.image} alt="" />
          </a>
          <div className="p-9 bg-white">
            <p className="mb-2 font-bold text-gray-400">{item.day}</p>
            <a href="#">
              <div
                className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                dangerouslySetInnerHTML={{ __html: item.heading }}
              ></div>
            </a>
            <div
              dangerouslySetInnerHTML={{ __html: item.description }}
              className="mb-7 font-medium text-gray-400 dark:text-gray-400"
            ></div>
            <span className="text-blue-400">
              <a
                href="#"
                className="hover:text-blue-600 inline-flex font-bold mr-8 text-center focus:ring-4 focus:outline-none "
                data-aos="fade-left"
              >
                Google
              </a>
              <a
                href="#"
                className="hover:text-blue-600 inline-flex font-bold mr-8 text-center focus:ring-4 focus:outline-none "
                data-aos="fade-out"
              >
                Trending
              </a>
              <a
                href="#"
                className="hover:text-blue-600 inline-flex font-bold mr-8 text-center focus:ring-4 focus:outline-none "
                data-aos="fade-right"
              >
                New
              </a>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
