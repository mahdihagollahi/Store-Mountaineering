import React, { Fragment } from "react";
import AboutUsImage from "@/assent/Imge/AboutUs/AboutUsImage.svg";
import Image from "next/image";
import AboutUsData from "./AboutUsData";
import MapImage from "@/assent/Imge/AboutUs/Map.svg";
import Instagram from "@/assent/Imge/AboutUs/instagram.svg";
import Telegram from "@/assent/Imge/AboutUs/Telegram.svg";
import BuyingImage from "@/assent/Imge/AboutUs/Buying.svg";
import HeadPhone from '@/assent/Imge/AboutUs/music-play.svg' 
import TikImage from '@/assent/Imge/AboutUs/shield-tick.svg'
import ExchangeImage from '@/assent/Imge/AboutUs/convert-3d-cube.svg'
import Truck from '@/assent/Imge/AboutUs/truck.svg'
const AboutUs = () => {
  const Data = AboutUsData().AboutUs;
  return (
    <Fragment>
      <div>
        <div className="flex justify-center mt-16">
          <Image
            src={AboutUsImage}
            width={1280}
            height={229}
            alt=""
            className="flex justify-center"
          />
        </div>
        {Data.map((items, index) => (
          <div key={index} className="flex justify-between px-20 mt-40">
            <div>
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-1">
                  <p className="text-[#727272] text-lg font-medium">تلفن :</p>

                  <p className="text-[#393939] text-lg font-medium">
                    {items.tel}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-[#727272] text-lg font-medium">
                    ساعات غیر اداری :
                  </p>

                  <p className="text-[#393939] text-lg font-medium">
                    {items.tel2}
                  </p>
                </div>
              </div>

              <p className="text-[#727272] mt-16 text-lg font-medium">
                ساعات غیر اداری :
              </p>

              <p className="text-[#393939] text-lg font-medium">
                {items.address}
              </p>
              <div className="flex items-center mt-16 gap-1">
                <p className="text-[#727272]  text-lg font-medium">
                  ساعت کاری :
                </p>

                <p className="text-[#393939] text-lg font-medium">
                  {items.time}
                </p>
              </div>

              <p className="text-[#393939] mt-16 text-lg font-medium">
                مارا در شبکه های اجتماعی دنبال کنید :
              </p>

              <div className="flex items-center mt-4 gap-5">
                <Image src={Instagram} width={24} height={24} alt="" />

                <Image src={Telegram} width={24} height={24} alt="" />
              </div>
            </div>

            <div>
              <Image src={MapImage} width={543} height={539} alt="" />
            </div>
          </div>
        ))}

        <div className="mt-60 flex justify-center">
          <Image src={BuyingImage} width={675} height={24} alt="" />
        </div>

        <div className="mt-20 px-20 flex justify-between">
             <div className="flex items-center gap-2">
                <Image
                src={HeadPhone}
                width={40}
                height={40}
                alt=""
                />
                <p className="font-medium text-lg text-[#3A3A3A]">
                پشتیبانی 24 ساعته
                </p>
             </div>

             <div className="flex items-center gap-2">
                <Image
                src={ExchangeImage}
                width={40}
                height={40}
                alt=""
                />
                <p className="font-medium text-lg text-[#3A3A3A]">
                سه روز ضمانت بازگشت کالا
                </p>
             </div>

             <div className="flex items-center gap-2">
                <Image
                src={TikImage}
                width={40}
                height={40}
                alt=""
                />
                <p className="font-medium text-lg text-[#3A3A3A]">
                ضمانت اصالت کالا
                </p>
             </div>


             <div className="flex items-center gap-2">
                <Image
                src={Truck}
                width={40}
                height={40}
                alt=""
                />
                <p className="font-medium text-lg text-[#3A3A3A]">
                ارسال به سراسر کشور
                </p>
             </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
