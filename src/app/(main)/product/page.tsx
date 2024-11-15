import Navbar from "@/component/Navbar/Navbar";
import Header from "@/component/Products/Product/Header";
import Product from "@/component/Products/Product/Product";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Product />
    </Fragment>
  );
};

export default page;
