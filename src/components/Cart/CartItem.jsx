import React from "react";

const Dummy_prod = [
  {
    name: "Phone",
    brand: "Apple",
    price: "$355",
  },
  {
    name: "RedMi",
    brand: "MI",
    price: "$35",
  },
];

const CartItem = () => {
  const product = Dummy_prod.map((item) => <li>{item.name}</li>);

  return (
    <div>
      <li>
        <div>
          <p>{product}</p>
          <p>name</p>
          <p>description</p>
          <p>price</p>
        </div>
        <div>
          <button>+</button>
          <button>-</button>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
