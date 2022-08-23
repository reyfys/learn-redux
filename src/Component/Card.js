import React from "react";
import CardImage from "./CardImage";
import CardName from "./CardName";
import { useState } from "react";
import { useSelector, useStore } from "react-redux";

const Card = () => {
  const reduxData = useSelector((store) => store);
  console.log(reduxData);
  return (
    <div>
      <CardName />
      <CardImage />
    </div>
  );
};

export default Card;
