import Link from "next/link";
import React, { Fragment } from "react";
import BrandShow from "./Component/BrandShow/BrandShow";

const Brand = () => {
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
                href="/‌brand"
                className="text-[#3A3A3A] font-medium text-base"
              >
                برند ها
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-3  mt-10 gap-20 w-[100%]">
          <BrandShow />
        </div>
      </div>
    </Fragment>
  );
};

export default Brand;
