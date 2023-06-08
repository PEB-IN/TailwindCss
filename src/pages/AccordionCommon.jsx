import React from "react";
import Testing from "./Testing";

const AccordionCommon = () => {
  const data = [
    {
      question: "What's your name ?",
      answer: "My name is Lun Dev",
      active: 1,
    },
    {
      question: "What do you do ?",
      answer: "I'm FullStack Deveoper",
      active: 1,
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="list">
        {data.map((item, i) => (
          <Testing item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default AccordionCommon;
