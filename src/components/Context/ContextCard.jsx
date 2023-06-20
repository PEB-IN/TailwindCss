import React from "react";
import FoodCard from "../Card/FoodCard";
import CardItem from "../Card/CardItem";
import image1 from "../../assets/images/Foodimg.jpg";
import image2 from "../../assets/images/Foodimg2.jpg";
import image3 from "../../assets/images/Foodimg3.jpg";

const ContextCard = () => {
  const Values = [
    {
      id: "01",
      name: "Food",
      description: "value of people is so strong",
      price: "25.456",
      image: image1,
    },
    {
      id: "02",
      name: "Japan",
      description: "Japan Noodle",
      price: "15.821",
      image: image2,
    },
    {
      id: "03",
      name: "China",
      description: "China Noodle",
      price: "55.431",
      image: image3,
    },
  ];

  const Text = Values.map((textvalue) => (
    <CardItem
      key={textvalue.id}
      name={textvalue.name}
      description={textvalue.description}
      price={textvalue.price}
    />
  ));
  console.log(Text);
  return (
    <>
      <div>
        <FoodCard>
          <ul>{Text}</ul>
        </FoodCard>
      </div>
    </>
  );
};

export default ContextCard;
