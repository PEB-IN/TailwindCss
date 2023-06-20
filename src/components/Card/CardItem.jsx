import React from "react";

const CardItem = (props) => {
  const Price = `$${Number(props.price).toFixed(2)}`;

  return (
    <div className="mb-4 border-2 border-green-400">
      <li>
        <div>
          <h2>{props.name}</h2>
          <h4>{props.description}</h4>
        </div>
        <div>
          <h3>{Price}</h3>
        </div>
      </li>
    </div>
  );
};

export default CardItem;
