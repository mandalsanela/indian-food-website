import React from "react";

const ButtonYellow = (props) => {
  return (
    <div
      className="button-yellow-wrapper"
      style={{ width: props.width, height: props.height }}
    >
      {props.children}
    </div>
  );
};

export default ButtonYellow;
