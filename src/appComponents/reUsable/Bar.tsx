import Image from 'next/image';

import React from 'react';
const BarComponent: React.FC=()=>{
return(
    <div className="container mx-auto bg-white overflow-hidden">
    <div className="bg-[#061b2c] text-white uppercase md:py-5 mb-5">
      <div className="max-w-2xl mx-auto tracking-wider leading-none">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/3 px-2 py-3 md:py-0  last:border-b-0 md:border-0 md:border-r md:border-r-white md:last:border-r-0">
            <div className="flex flex-wrap justify-center items-center gap-4">
             <Image src="/images/free-shipping-new.png" alt='' width={40} height={40}/>
              <span className="inline-block text-left">
                <span className="block font-extrabold">
                  Free Shipping
                </span>
                <span>ORDERS OVER $4K---</span>
              </span>
            </div>
          </div>
          <div className="w-full  md:w-1/3 px-2 py-3 md:py-0  last:border-b-0 md:border-0 md:border-r md:border-r-white md:last:border-r-0">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Image src="/images/logo-free.png" alt=" " width={40} height={40}/>
              <span className="inline-block text-left">
                <span className="block font-extrabold">
                  1st Logo Free
                </span>
                <span >WITH ORDER</span>
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 py-3 md:py-0  last:border-b-0 md:border-0 md:border-r md:border-r-white md:last:border-r-0">
            <div className="flex flex-wrap justify-center items-center gap-4">
              {/* <image src="images/guarantee.png" alt="">  */}
              <Image src="/images/guarantee.png" alt=" " width={40} height={40}/>
              <span className="inline-block text-left">
                <span className="block font-extrabold">
                SATISFACTION
                </span>
                <span>GUARANTEE</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

)

}

export default BarComponent;