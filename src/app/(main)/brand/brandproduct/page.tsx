import BrandProduct from "@/component/Brand/Component/BrandProduct/BrandProduct";
import React, { Fragment } from "react";
import Navbar from "@/component/Navbar/Navbar";
import Header from "@/component/Products/Product/Header";

const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <BrandProduct />
    </Fragment>
  );
};

export default page;
