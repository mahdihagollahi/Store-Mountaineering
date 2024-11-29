import Header from "@/component/UserDashboard/Profile/Header";
import Navbar from "@/component/UserDashboard/Profile/Navbar";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <div className="bg-white border-b border-[#D6EDE1]">
        <Header />
      </div>
      <Navbar/>
    </Fragment>
  );
};

export default page;
