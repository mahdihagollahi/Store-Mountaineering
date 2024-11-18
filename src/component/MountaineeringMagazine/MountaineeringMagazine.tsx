"use client";
import React, { Fragment, useState } from "react";
import MountaineeringMagazineData from "@/component/MountaineeringMagazine/Component/MountaineeringMagazineData";
import  MountaineeringMagazineShow from '@/component/MountaineeringMagazine/Component/MountaineeringMagazineShow'
 import Link from "next/link";
import Paginate from "@/component/Products/Product/Paginate";
const MountaineeringMagazine = () => {
  const Data = MountaineeringMagazineData().MountaineeringMagazine;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  const offset = (currentPage - 1) * itemsPerPage;
  const currentPageData = Data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  const pageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1);
  };

  return (
    <Fragment>
      <div className="mt-14 px-24">
      <div className="breadcrumbs text-base">
          <ul>
            <li>
              <Link href="/" className="text-[#727272] font-medium text-base">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                href="/mountaineeringmagazine"
                className="text-[#3A3A3A] font-medium text-base"
              >
             مجله کوهنوردی
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 mr-24 mt-10 gap-12 w-[87%] h-full">
        <MountaineeringMagazineShow currentPageData={currentPageData} />
      </div>
      <div className="mt-20 ml-80 flex justify-center">
        <Paginate
          currentPageData={currentPageData}
          pageCount={pageCount}
          pageClick={pageClick}
        />
      </div>
    </Fragment>
  );
};

export default MountaineeringMagazine;
