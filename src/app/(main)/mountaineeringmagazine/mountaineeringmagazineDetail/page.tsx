import Footer from "@/component/Footer/Footer";
import MountaineeringMagazineDetail from "@/component/MountaineeringMagazine/Component/MountaineeringMagazineDetail/MountaineeringMagazineDetail";
import Navbar from "@/component/Navbar/Navbar";
import Header from "@/component/Products/Product/Header";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
     <MountaineeringMagazineDetail/>
     <Footer/>
    </Fragment>
  );
};

export default page;
