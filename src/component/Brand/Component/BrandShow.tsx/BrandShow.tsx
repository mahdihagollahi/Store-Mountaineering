"use client";
import React, { Fragment } from "react";
import BrandData from "./BrandData";
import Link from "next/link";
import Image from "next/image";
const BrandShow = () => {
  const data = BrandData().Brand;

  return (
    <Fragment>
      {data.map((items) => (
        <div
          key={items.id}
          className="w-80 relative h-32 px-2  rounded-xl transition-transform duration-300 hover:scale-105 group"
        >
          <Link href="/productshow">
            <div className="flex items-center gap-2 ">
              <Image src={items.src} width={246} height={135} alt="" />
              <div className="flex flex-col items-center">
                <p className="font-medium text-lg text-[#3A3A3A]">
                  {items.name}
                </p>
                <p className="font-medium text-lg text-[#3A3A3A]">
                  {items.sum}
                  محصول
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      <div className="mt-10 xl:mr-96 flex justify-center"></div>
    </Fragment>
  );
};

export default BrandShow;
