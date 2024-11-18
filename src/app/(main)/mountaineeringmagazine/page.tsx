import MountaineeringMagazine from "@/component/MountaineeringMagazine/MountaineeringMagazine";
import Navbar from "@/component/Navbar/Navbar";
import Header from "@/component/Products/Product/Header";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <MountaineeringMagazine />
    </Fragment>
  );
};

export default page;
