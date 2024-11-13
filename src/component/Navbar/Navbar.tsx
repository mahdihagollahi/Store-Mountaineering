"use client";
import React from "react";
import Image from "next/image";
import loginButton from "@/assent/Imge/Navbar/user.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathName = usePathname();

  return (
    <div className="relative bg-white z-10">
      <div className="flex px-4 md:px-20 py-6 items-center md:justify-between">
        <div className="flex justify-between items-center w-full ">
        <div className="hidden md:flex  gap-10 items-center">
          <Link href="/">
            <button className="cursor-pointer">
              <span
                style={pathName === "/" ? { color: "#4BB09C" } : {}}
                className={`w-20 font-demiBold text-base whitespace-nowrap 
                  ${
                    pathName === "/"
                      ? " text-[#2E8B57] pb-[2px] w-[90px] text-lg mt-[1px] leading-7 font-bold duration-300"
                      : "text-[#727272]"
                  }
                  hover:w-[90px] hover:text-[#2E8B57]   hover:text-lg duration-300`}
              >
                صفحه اصلی
              </span>
            </button>
          </Link>

          <Link href="/product">
            <button className="cursor-pointer">
              <span
                    style={pathName === "/product" ? { color: "#2E8B57" } : {}}
                    className={`w-20 font-demiBold text-base whitespace-nowrap 
                      ${
                        pathName === "/product"
                          ? " text-[#2E8B57] pb-[2px] w-[90px] text-lg mt-[1px] leading-7 font-bold duration-300"
                          : "text-[#727272]"
                      }
                      hover:w-[90px] hover:text-[#2E8B57]   hover:text-lg duration-300`}
                  >
               محصولات ما
              </span>
            </button>
          </Link>

          <Link href="/Doctors">
            <button className="cursor-pointer">
              <p
                   style={pathName === "/" ? { color: "#4BB09C" } : {}}
                   className={`w-20 font-demiBold text-base whitespace-nowrap 
                     ${
                       pathName === "/"
                         ? " text-[#2E8B57] pb-[2px] w-[90px] text-lg mt-[1px] leading-7 font-bold duration-300"
                         : "text-[#727272]"
                     }
                     hover:w-[90px] hover:text-[#2E8B57]   hover:text-lg duration-300`}
                 >
               برند ما
              </p>
            </button>
          </Link>

          <Link href="/Article">
            <button className="cursor-pointer">
              <p
                   style={pathName === "/" ? { color: "#4BB09C" } : {}}
                   className={`w-20 font-demiBold text-base whitespace-nowrap 
                     ${
                       pathName === "/"
                         ? " text-[#2E8B57] pb-[2px] w-[90px] text-lg mt-[1px] leading-7 font-bold duration-300"
                         : "text-[#727272]"
                     }
                     hover:w-[90px] hover:text-[#2E8B57]   hover:text-lg duration-300`}
                 >
             مجله کوهنوردی
              </p>
            </button>
          </Link>

          <Link href="/AboutUs">
            <button className="cursor-pointer">
              <p
                   style={pathName === "/" ? { color: "#4BB09C" } : {}}
                   className={`w-20 font-demiBold text-base whitespace-nowrap 
                     ${
                       pathName === "/"
                         ? " text-[#2E8B57] pb-[2px] w-[90px] text-lg mt-[1px] leading-7 font-bold duration-300"
                         : "text-[#727272]"
                     }
                     hover:w-[90px] hover:text-[#2E8B57]   hover:text-lg duration-300`}
                 >
               ارتباط با ما
              </p>
            </button>
          </Link>
        </div>

        <div className="hidden md:block mr-44">
          <button className="flex gap-2 bg-[#2E8B57] rounded py-2 px-4 whitespace-nowrap">
            <Image src={loginButton} width={20} height={20} alt="" />
            <p className="font-medium text-[#FFFFFF] text-sm pl-4">
              ورود / ثبت نام
            </p>
          </button>
        </div>
        </div>

     

       
      </div>
    </div>
  );
}

export default Navbar;
