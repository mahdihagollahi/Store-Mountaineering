import AboutUs from "@/component/AboutUs/AboutUs";
import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Navbar/Navbar";
import Header from "@/component/Products/Product/Header";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
     <AboutUs/>
     <Footer/>
    </Fragment>
  );
};

export default page;
