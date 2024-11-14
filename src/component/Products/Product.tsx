"use client";
import React, { Fragment, useState } from "react";
import ProductData from "@/component/Products/ProductData";
import ProductRout from "@/assent/Imge/Product/ProductRout.svg";
import Image from "next/image";
import FilterProduct from "./FilterProduct";
import FilterData from "./FilterData";
import Paginate from "./Paginate";
import ProductShow from "./ProductShow";
const Product = () => {
  const Data = ProductData().Product;
  const [filledHeart, setFilledHeart] = useState<Record<number, boolean>>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 7;

  const offset = (currentPage - 1) * itemsPerPage;
  const currentPageData = Data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  const pageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1);
  };

  const handleHeartClick = (index: number) => {
    setFilledHeart((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <Fragment>
      <div className="mt-14 px-24">
        <Image src={ProductRout} width={167} height={21} alt="" />
      </div>

      <div>
        <FilterProduct />
      </div>
      <div className="flex">
        <div>
          <FilterData />
        </div>
        <div className="grid grid-cols-3 mr-10 mt-10 gap-9 w-[80%]">
          <ProductShow
            currentPageData={currentPageData}
            filledHeart={filledHeart}
            handleHeartClick={handleHeartClick}
          />
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Paginate
          currentPageData={currentPageData}
          pageCount={pageCount}
          pageClick={pageClick}
        />
      </div>
    </Fragment>
  );
};

export default Product;
