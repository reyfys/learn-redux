import React from "react";
import { useSelector } from "react-redux";

const CardImage = () => {
  const { data } = useSelector((store) => store);
  return (
    <div>
      <img src={data.avatar} />
    </div>
  );
};

export default CardImage;
