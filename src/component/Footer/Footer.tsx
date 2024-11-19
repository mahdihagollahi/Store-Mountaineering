import React, { Fragment } from "react";
import Background from "@/assent/Imge/Footer/FoterGrassBg.svg";
import Background2 from "@/assent/Imge/Footer/FoterGreenBg.svg";
import Logo from "@/assent/Imge/Product/Logo.svg";
import EnamadIran from '@/assent/Imge/Footer/enamadIran.svg'
import Enamad from '@/assent/Imge/Footer/enamad.svg'

import Image from "next/image";
const Footer = () => {
  return (
    <Fragment>
      <div
        className="mt-60 py-5 flex justify-center"
        style={{
          backgroundImage: `url(${Background.src})`,
          width:"100%"
          ,

        }}
      >
        <div>
          <div className="flex mt-20 mb-10 justify-center items-center">
            <div className="flex items-center  gap-4 ">
              <div>
                <Image src={Logo} width={33} height={37} alt="" />
              </div>
              <div>
                <p className="font-semibold text-base leading-6 text-[#2E8B57]">
                  سفری به قله
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-10 ">
            <div className="flex flex-col gap-3 items-center">
              <p className="font-demiBold text-xl text-[#3A3A3A]">درباره ما</p>

              <p className="text-base w-80 leading-7 font-regular text-[#727272]">
                ما یک تیم از علاقه‌مندان به کوهنوردی و طبیعت‌گردی هستیم که با
                ارائه بهترین تجهیزات کوهنوردی، شما را در مسیر تجربه‌های جدید
                همراهی می‌کنیم.تا از هر لحظه سفرتان لذت ببرید.
              </p>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <p className="font-demiBold text-xl text-[#3A3A3A]">
                لینک های مهم
              </p>

              <ul className="text-base font-regular text-[#727272]">
                <li>کفش‌های کوهنوردی</li>

                <li className="mt-2">کوله‌پشتی و کیف</li>

                <li className="mt-2">چادر و کیسه‌خواب</li>

                <li className="mt-2">لباس‌های ضد آب و باد</li>

                <li className="mt-2">لوازم کمپینگ</li>

                <li className="mt-2">تجهیزات ایمنی</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <p className="font-demiBold text-xl text-[#3A3A3A]">
                خدمات مشتریان
              </p>

              <ul className="text-base font-regular text-[#727272]">
                <li>پشتیبانی و خدمات پس از فروش</li>

                <li className="mt-2">شرایط بازگشت کالا</li>

                <li className="mt-2">قوانین و مقررات</li>

                <li className="mt-2">پیگیری سفارشات</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <p className="font-demiBold  text-xl text-[#3A3A3A]">
                اطلاعات تماس
              </p>

              <ul className="text-base  font-regular text-[#727272]">
                <li >
                  آدرس فروشگاه:
                  <span className="text-[#393939] font-medium">
                    تهران، خیابان آزادی، پلاک ۱۲۳
                  </span>
                </li>

                <li className="mt-2">
                  شماره تماس:
                  <span className="text-[#393939] font-medium">
                    : ۰۲۱-۱۲۳۴۵۶۷۸
                  </span>
                </li>

                <li className="mt-2">
                  ایمیل:
                  <span className="text-[#393939] font-medium">
                    info@safar be gole.com
                  </span>
                </li>
              </ul>
            </div>

            <div className="">
              <p className="font-demiBold text-xl text-[#3A3A3A]">
                نماد های اعتماد
              </p>
              <div className="flex items-center gap-3">
                <Image src={EnamadIran} alt="" width={92} height={92} />

                <Image src={Enamad} alt="" width={86} height={92} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex  justify-center"
        style={{
          backgroundImage: `url(${Background2.src})`,
          width:"100%",
          height:'2%'
          ,

        }}
      >
      
        </div>
    </Fragment>
  );
};

export default Footer;
