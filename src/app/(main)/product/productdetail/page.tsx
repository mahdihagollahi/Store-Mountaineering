import React, { Fragment } from "react";
import Navbar from "@/component/Navbar/Navbar";
import Header from "@/component/Products/Product/Header";
import ProductDetail from "@/component/Products/ProductDetail/ProductDetail";
const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <ProductDetail />
    </Fragment>
  );
};

export default page;
