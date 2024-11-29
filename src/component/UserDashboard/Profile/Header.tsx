import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assent/Imge/Product/Logo.svg";
import NotifeIcon from "@/assent/Imge/UserDashboard/notification.svg";
import LogoutIcon from "@/assent/Imge/UserDashboard/logout.svg";
const Header = () => {
  return (
    <Fragment>
      <div className="px-20 flex justify-between ">
        <div className="w-20"></div>

        <div className="flex items-center my-3">
          <Link href="/">
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
          </Link>
        </div>
        <div className="flex justify-end ">
          <div className="flex gap-8 items-center">
            <Image src={NotifeIcon} width={24} height={24} alt="notife" />
            <Image src={LogoutIcon} width={24} height={24} alt="logout" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
