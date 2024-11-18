import Brand from "@/component/Brand/Component/Brand";
import Navbar from "@/component/Navbar/Navbar";
import Header from "@/component/Products/Product/Header";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Brand />
    </Fragment>
  );
};

export default page;
