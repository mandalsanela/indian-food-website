import React from "react";

const FoodCard = (props) => {
  return (
    <div
      className="food-card-wrapper"
      style={{ width: props.width, height: props.height }}
    >
      {props.children}
    </div>
  );
};

export default FoodCard;
