import React from "react";
import { useSelector } from "react-redux";

const NavbarName = () => {
  const reduxData = useSelector((store) => store);
  return (
    <div>
      <h1>{reduxData.data.name}</h1>
    </div>
  );
};

export default NavbarName;
