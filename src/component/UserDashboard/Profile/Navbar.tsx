"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathName = usePathname();

  return (
    <div className="relative bg-white z-10">
      <div className="flex px-4 md:px-20 py-6 items-center md:justify-between">
        <div className="flex justify-center items-center w-full ">
          <div className="hidden md:flex  gap-16 items-center">
            <Link href="/userdashboard/profile">
              <button className="cursor-pointer">
                <span
                  style={pathName === "/userdashboard/profile" ? { color: "#2E8B57" } : {}}
                  className={`w-20 font-demiBold text-base whitespace-nowrap 
                  ${
                    pathName === "/userdashboard/profile"
                      ? " text-[#2E8B57] pb-[2px] w-[90px] text-lg mt-[1px] leading-7 font-bold duration-300"
                      : "text-[#727272]"
                  }
                  hover:w-[90px] hover:text-[#2E8B57]   hover:text-lg duration-300`}
                >
                 پروفایل من
                </span>
              </button>
            </Link>

            <Link href="/userdashboard/orderhistory">
              <button className="cursor-pointer">
                <span
                  style={pathName === "/userdashboard/orderhistory" ? { color: "#2E8B57" } : {}}
                  className={`w-20 font-demiBold text-base whitespace-nowrap 
                      ${
                        pathName === "/userdashboard/orderhistory"
                          ? " text-[#2E8B57] pb-[2px] w-[90px] text-lg mt-[1px] leading-7 font-bold duration-300"
                          : "text-[#727272]"
                      }
                      hover:w-[90px] hover:text-[#2E8B57]   hover:text-lg duration-300`}
                >
                  تاریخچه سفارشات
                </span>
              </button>
            </Link>

            <Link href="/">
              <button className="cursor-pointer">
                <p
                  style={pathName === "/" ? { color: "#2E8B57" } : {}}
                  className={`w-20 font-demiBold text-base whitespace-nowrap 
                     ${
                       pathName === "/"
                         ? " text-[#2E8B57] pb-[2px] w-[90px] text-lg mt-[1px] leading-7 font-bold duration-300"
                         : "text-[#727272]"
                     }
                     hover:w-[90px] hover:text-[#2E8B57]   hover:text-lg duration-300`}
                >
                 آدرس ها
                </p>
              </button>
            </Link>

            <Link href="/mountaineeringmagazine">
              <button className="cursor-pointer">
                <p
                  style={pathName === "/mountaineeringmagazine" ? { color: "#2E8B57" } : {}}
                  className={`w-20 font-demiBold text-base whitespace-nowrap 
                     ${
                       pathName === "/mountaineeringmagazine"
                         ? " text-[#2E8B57] pb-[2px] w-[90px] text-lg mt-[1px] leading-7 font-bold duration-300"
                         : "text-[#727272]"
                     }
                     hover:w-[90px] hover:text-[#2E8B57]   hover:text-lg duration-300`}
                >
                  دیدگاه های من
                </p>
              </button>
            </Link>

            <Link href="/aboutus">
              <button className="cursor-pointer">
                <p
                  style={pathName === "/aboutus" ? { color: "#2E8B57" } : {}}
                  className={`w-20 font-demiBold text-base whitespace-nowrap 
                     ${
                       pathName === "/aboutus"
                         ? " text-[#2E8B57] pb-[2px] w-[90px] text-lg mt-[1px] leading-7 font-bold duration-300"
                         : "text-[#727272]"
                     }
                     hover:w-[90px] hover:text-[#2E8B57]   hover:text-lg duration-300`}
                >
                علاقه مندی ها
                </p>
              </button>
            </Link>

            <Link href="/aboutus">
              <button className="cursor-pointer">
                <p
                  style={pathName === "/aboutus" ? { color: "#2E8B57" } : {}}
                  className={`w-20 font-demiBold text-base whitespace-nowrap 
                     ${
                       pathName === "/aboutus"
                         ? " text-[#2E8B57] pb-[2px] w-[90px] text-lg mt-[1px] leading-7 font-bold duration-300"
                         : "text-[#727272]"
                     }
                     hover:w-[90px] hover:text-[#2E8B57]   hover:text-lg duration-300`}
                >
               تیکت ها
                </p>
              </button>
            </Link>
          </div>

       
        </div>
      </div>
    </div>
  );
}

export default Navbar;
