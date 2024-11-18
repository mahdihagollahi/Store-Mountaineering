import Image from "next/image";
import React, { Fragment } from "react";
import Eye from "@/assent/Imge/MountaineeringMagazine/eye.svg";
import Link from "next/link";
import ArrowImage from "@/assent/Imge/MountaineeringMagazine/ArrowButton.svg";
const MountaineeringMagazineShow = ({ currentPageData }) => {
  return (
    <Fragment>
      {currentPageData.map((items) => (
        <Link href="/" key={items.id}>
          <div className="w-[100%] ">
            <div className="flex  ">
              <Image
                src={items.src}
                width={170}
                height={133}
                alt=""
                className="rounded-xl"
              />
              <div className="flex flex-col mr-2 gap-2">
                <div className="flex text-right justify-between ">
                  <p className="font-medium text-[#3A3A3A] text-base">
                    {items.name}
                  </p>
                  <p className="font-medium text-[#3A3A3A] text-base">
                    {items.date}
                  </p>
                </div>
                <p className="font-regular text-sm text-[#8F8F8F]">
                  کمپینگ حرفه ای یک فعالیت تفریحی و ماجراجویانه است که به صورت
                  متخصصانه برگزار می‌شود. در این نوع کمپینگ، شرکت‌کنندگان با
                  اصول و مهارت‌های خاصی به جایگاه طبیعت نزدیک می‌شوند
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 items-center">
                    <Image src={Eye} width={24} height={24} alt="" />
                    <p className="font-medium text-base text-[#565656]">
                      {items.seen}
                    </p>
                  </div>
                
                    <button>
                    <Link href="/" >
                      <Image src={ArrowImage} height={32} width={32} alt="" />
                      </Link>
                    </button>
                 
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Fragment>
  );
};

export default MountaineeringMagazineShow;
