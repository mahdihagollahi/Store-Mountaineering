import React, { Fragment } from "react";
import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Navbar/Navbar";
import Header from "@/component/Products/Product/Header";
import ShowProductUI from "@/component/Landing/ShowProduct/ShowProductUI";
const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <ShowProductUI />
      <Footer />
    </Fragment>
  );
};

export default page;
