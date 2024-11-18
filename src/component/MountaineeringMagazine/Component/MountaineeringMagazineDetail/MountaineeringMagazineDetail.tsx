import React, { Fragment } from "react";
import Link from "next/link";
import MountaineeringMagazineDetailData from "@/component/MountaineeringMagazine/Component/MountaineeringMagazineDetail/MountaineeringMagazineDetailData";
import Image from "next/image";
const MountaineeringMagazineDetail = () => {
  const Data = MountaineeringMagazineDetailData().Detail;
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
      <div className="mt-8 px-24">
        {Data.map((items, index) => (
          <div key={index} className="mb-10">
            <p className="font-demiBold leading-10 text-xl text-[#3A3A3A]">
              {items.title1}
            </p>

            <p className="font-medium mt-4 leading-8 text-lg text-[#8F8F8F]">
              {items.discription1}
            </p>
            <Image
              src={items.src1}
              width={1280}
              height={311}
              alt=""
              className="my-10"
            />

            <p className="font-demiBold leading-10 text-xl text-[#3A3A3A]">
              {items.title2}
            </p>

            <p className="font-medium mt-4 leading-8 text-lg text-[#8F8F8F]">
              {items.discription2}
            </p>

            <p className="font-demiBold mt-10 leading-10 text-xl text-[#3A3A3A]">
              {items.title3}
            </p>

            <p className="font-medium mt-4 leading-8 text-lg text-[#8F8F8F]">
              {items.discription4}
            </p>

            <p className="font-demiBold mt-10 leading-10 text-xl text-[#3A3A3A]">
              {items.title4}
            </p>

            <p className="font-medium mt-4 leading-8 text-lg text-[#8F8F8F]">
              {items.discription4}
            </p>

            <div className="flex items-center gap-4 justify-between">
              <Image
                src={items.src2}
                width={628}
                height={264}
                alt=""
                className="my-10"
              />

              <Image
                src={items.src3}
                width={628}
                height={264}
                alt=""
                className="my-10"
              />
            </div>

            <p className="font-demiBold mt-10 leading-10 text-xl text-[#3A3A3A]">
              {items.title5}
            </p>

            <p className="font-medium mt-4 leading-8 text-lg text-[#8F8F8F]">
              {items.discription51}
            </p>

            <p className="font-medium mt-4 leading-8 text-lg text-[#8F8F8F]">
              {items.discription52}
            </p>

            <p className="font-medium mt-4 leading-8 text-lg text-[#8F8F8F]">
              {items.discription53}
            </p>

            <p className="font-demiBold mt-10 leading-10 text-xl text-[#3A3A3A]">
              {items.title6}
            </p>

            <p className="font-medium mt-4 leading-8 text-lg text-[#8F8F8F]">
              {items.discription61}
            </p>


            <p className="font-medium mt-4 leading-8 text-lg text-[#8F8F8F]">
              {items.discription62}
            </p>


            <p className="font-medium mt-4 leading-8 text-lg text-[#8F8F8F]">
              {items.discription63}
            </p>

          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default MountaineeringMagazineDetail;
