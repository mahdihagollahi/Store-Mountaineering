import React, { Fragment } from "react";
import Navbar from "@/component/Navbar/Navbar";
import Header from "@/component/Products/Product/Header";
import ProductDetail from "@/component/Products/ProductDetail/ProductDetail";
import Footer from "@/component/Footer/Footer";
const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <ProductDetail />
      <Footer/>
    </Fragment>
  );
};

export default page;
