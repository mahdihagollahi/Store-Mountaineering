import Brand from "@/component/Brand/Brand";
import Navbar from "@/component/Navbar/Navbar";
import Header from "@/component/Products/Product/Header";
import Footer from "@/component/Footer/Footer";

import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Brand />
      <Footer/>
    </Fragment>
  );
};

export default page;
