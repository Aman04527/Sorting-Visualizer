import React from "react";

const SortingBar = (props) => {
  let color = "#FFB6C1";

  switch (props.colorCode) {
    case 1:
      color = "#AFEEEE";
      break;
    case 2:
      color = "red";
      break;
    case 3:
      color = "yellow";
      break;
    default:
      break;
  }
  return <div style={{ ...props.style, backgroundColor: color }}></div>;
};

export default SortingBar;
