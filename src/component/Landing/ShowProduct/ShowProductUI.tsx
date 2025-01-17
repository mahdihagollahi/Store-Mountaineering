import Image from "next/image";
import React, { Fragment } from "react";
import ShowProduct from "@/assent/Imge/Landing/ShowProduct/ShowProduct.svg";
import Data from "./ShowProductData";
const ShowProductUI = () => {
  const Product = Data().Product;
  return (
    <Fragment>
      <div className="my-12 ">
        <div className="flex justify-center items-center ">
          <Image src={ShowProduct} width={742} height={24} alt="" />
        </div>
        <div className="flex justify-between px-20 my-10 items-center ">
          {" "}
          {Product.map((items) => (
            <div key={items.id}>
              <Image src={items.src} width={214} height={209} alt="ctigouris" />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ShowProductUI;
