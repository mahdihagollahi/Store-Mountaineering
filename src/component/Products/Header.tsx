import React, { Fragment } from "react";
import Logo from "@/assent/Imge/Product/Logo.svg";
import Image from "next/image";
const Header = () => {
  return (
    <Fragment>
      <div className="px-20 bg-white py-4 flex justify-between">
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
        <div className="">
          <label className="input input-bordered flex items-center gap-2" 
          style={{background:'#f8f8f8'}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6 opacity-70 text-[#A5A5A5] "
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow w-[591px] h-[48px]  placeholder:text-[#A5A5A5] placeholder:text-base placeholder:font-medium"  placeholder="جستجو" />

          </label>
        </div>
      
      </div>
    </Fragment>
  );
};

export default Header;
