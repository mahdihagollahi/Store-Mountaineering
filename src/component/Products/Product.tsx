import React, { Fragment } from 'react'
import ProductRout from '@/assent/Imge/Product/ProductRout.svg'
import Image from 'next/image'
import FilterProduct from './FilterProduct'
const Product = () => {
  return (
    <Fragment>
       
      <div className="mt-14 px-24">
        <Image src={ProductRout} width={167} height={21} alt="" />
      </div>

      <div>
        <FilterProduct/>
      </div>
    </Fragment>
  )
}

export default Product