import React, { Fragment } from 'react'
import Logo from '@/assent/Imge/Product/Logo.svg'
import Image from 'next/image'
const Header = () => {
  return (
    <Fragment>
       <div className='px-10 py-4 flex justify-around'>
        <div className='flex items-center gap-4 '>
           <div>
            <Image
            src={Logo}
            width={33}
            height={37}
            alt=''
            />
           </div>
           <div>
            <p className='font-semibold text-base leading-6 text-[#2E8B57]'>
            سفری به قله
            </p>
           </div>
        </div>
       </div>
    </Fragment>
  )
}

export default Header