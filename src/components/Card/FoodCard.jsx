import React from "react";

const FoodCard = (props) => {
  return (
    <div className="m-auto mt-12 border-2 border-red-400 rounded w-full h-full">
      {props.children}
    </div>
  );
};

export default FoodCard;
