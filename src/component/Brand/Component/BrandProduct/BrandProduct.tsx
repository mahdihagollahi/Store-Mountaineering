"use client";
import React, { Fragment, useState } from "react";
import ProductData from "@/component/Products/Product/ProductData";
import Link from "next/link";
import FilterProduct from "./FilterProduct";
import FilterData from "./FilterData";
import Paginate from "@/component/Products/Product/Paginate";
import ProductShow from "./BrandProductShow";
const BrandProduct = () => {
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
      <div className="breadcrumbs text-base">
          <ul>
            <li>
              <Link href="/" className="text-[#727272] font-medium text-base">صفحه اصلی</Link>
            </li>
            <li>
              <Link href="/‌brand" className="text-[#3A3A3A] font-medium text-base">برند ها</Link>
            </li>
          </ul>
        </div>
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

export default BrandProduct;
