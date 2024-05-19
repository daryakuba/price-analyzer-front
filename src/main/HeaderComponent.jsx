import React from "react";
import "./../App.css";

const HeaderComponent = ({ title, image }) => {
  return (
    <div className={"header"}>
      <div className={"title"}>{title}</div>
      <img className={"image"} src={image} alt="" />
    </div>
  );
};

export default HeaderComponent;
