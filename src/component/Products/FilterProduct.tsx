"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import FFilterProductImage from "@/assent/Imge/Product/FilterProduct.svg";
const FilterProduct = () => {
  const [activeFilter, setActiveFilter] = useState("همه مقالات");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  return (
    <Fragment>
      <div className="bg-white mt-10 w-[990px]  rounded-xl mr-[28%] px-3 py-4  h-[73px]">
        <div className=" flex gap-1 items-center">
          <Image src={FFilterProductImage} width={45} height={45} alt="" />
          <p className="text-[#727272] font-medium text-lg">
            مرتب سازی بر اساس :
          </p>
          <div className="flex  gap-5 mr-12 cursor-pointer items-center">
            <p
              className={`font-medium text-base duration-300 ${
                activeFilter === "همه محصولات"
                  ? "text-[#2E8B57]"
                  : "text-[#727272] hover:text-[#2E8B57]"
              }`}
              onClick={() => handleFilterClick("همه محصولات")}
            >
              همه محصولات
            </p>

            <p
               className={`font-medium text-base duration-300 ${
                activeFilter === "  جدید ترین مقالات"
                  ? "text-[#2E8B57]"
                  : "text-[#727272] hover:text-[#2E8B57]"
              }`}
              onClick={() => handleFilterClick("جدید ترین مقالات")}
            >
              جدید ترین مقالات
            </p>

            <p  className={`font-medium text-base duration-300 ${
                activeFilter === ' ارزان ترین'
                  ? "text-[#2E8B57]"
                  : "text-[#727272] hover:text-[#2E8B57]"
              }`}
              onClick={() => handleFilterClick(" ارزان ترین ")}>
             ارزان ترین
            </p>

            <p   className={`font-medium text-base duration-300 ${
                activeFilter === "گران ترین"
                  ? "text-[#2E8B57]"
                  : "text-[#727272] hover:text-[#2E8B57]"
              }`}
              onClick={() => handleFilterClick("گران ترین")}>
             گران ترین
            </p>


            <p   className={`font-medium text-base duration-300 ${
                activeFilter === "پر بازدید ترین"
                  ? "text-[#2E8B57]"
                  : "text-[#727272] hover:text-[#2E8B57]"
              }`}
              onClick={() => handleFilterClick("پر بازدید ترین")}>
            پر بازدید ترین
            </p>


            <p   className={`font-medium text-base duration-300 ${
                activeFilter === "پر فروش ترین"
                  ? "text-[#2E8B57]"
                  : "text-[#727272] hover:text-[#2E8B57]"
              }`}
              onClick={() => handleFilterClick("پر فروش ترین")}>
          پر فروش ترین
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterProduct;
