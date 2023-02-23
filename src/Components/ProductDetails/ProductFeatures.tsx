import { _Store } from 'page.config';
import React from 'react';

const ProductFeatures: React.FC<
  { fewFeatures?: boolean } & { storeCode: string }
> = ({ fewFeatures, storeCode }) => {
  if (
    storeCode === _Store.type1 ||
    storeCode === _Store.type15 ||
    storeCode === _Store.type16
  ) {
    return (
      <div className='w-full text-center flex justify-center mt-5 py-3'>
        <div className='w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3'>
          <div className='flex flex-wrap justify-center items-center border-r border-b border-b-primary lg:border-b-transparent lg:border-r-primary pb-3 lg:pb-0'>
            <span className='material-icons text-2xl'>local_shipping</span>
            <span className='ml-2 text-left text-sm uppercase leading-4'>
              <strong>FREE SHIPPING</strong> <br />
              To One Location
            </span>
          </div>
          <div className='flex flex-wrap justify-center items-center border-r border-b border-b-primary lg:border-b-transparent lg:border-r-primary py-3 lg:py-0'>
            <span className='material-icons text-2xl'>style</span>
            <span className='ml-2 text-left text-sm uppercase leading-4'>
              <strong>1ST LOGO FREE</strong> <br />
              UP TO 10,000 STITCHES
            </span>
          </div>
          <div className='flex flex-wrap justify-center items-center pt-3 lg:pt-0'>
            <span className='material-icons text-2xl'>verified</span>
            <span className='ml-2 text-left text-sm uppercase leading-4'>
              <strong>FREE PROOF</strong> <br />
              ON ALL ORDERS
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (storeCode === _Store.type2) {
    if (fewFeatures) {
      return (
        <section className=''>
          <div className='container mx-auto pt-10'>
            <div className='bg-[#CFD2D3] p-4 flex flex-wrap'>
              <div className='w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r last:border-r-0 border-[#8b9ba7] flex justify-center items-center gap-2 text-3xl font-bold px-1 lg:px-6 tracking-wide lg:tracking-widest lg:justify-end'>
                <div className='w-1/4 lg:w-auto'>
                  <img src='images/first-logo-img.png' alt='' />
                </div>
                <div>First Logo Free</div>
              </div>
              <div className='w-full lg:w-1/2 border-r last:border-r-0 border-[#8b9ba7] flex justify-center items-center gap-2 text-3xl font-bold px-1 lg:px-6 tracking-wide lg:tracking-widest lg:justify-start'>
                <div className='w-1/4 lg:w-auto'>
                  <img src='images/free-shipping-img.png' alt='' />
                </div>
                <div>Free Shipping</div>
              </div>
            </div>
          </div>
        </section>
      );
    }
    return (
      <div className='py-4 mb-5 text-center bg-[#061b2c] text-white uppercase'>
        <div className='inline-block py-2 md:py-0 px-8 md:border-b-0 md:border-r border-white'>
          <div className='w-full md:w-auto flex flex-wrap justify-center items-center'>
            <img src='images/free-shipping-new.png' alt='' />
            <span className='leading-5 ml-4 inline-block text-left'>
              <strong className='block font-extrabold'>Free Shipping</strong>{' '}
              <span>To One Location</span>
            </span>
          </div>
        </div>
        <div className='inline-block py-2 md:py-0 px-8'>
          <div className='w-full md:w-auto flex flex-wrap justify-center items-center'>
            <img src='images/logo-free.png' alt='' />
            <span className='leading-5 ml-4 inline-block text-left'>
              <strong className='block font-extrabold'>1st Logo Free</strong>{' '}
              <span>With Order</span>
            </span>
          </div>
        </div>
        <div className='inline-block py-2 md:py-0 px-8 md:border-t-0 md:border-l border-white'>
          <div className='w-full md:w-auto flex flex-wrap justify-center items-center'>
            <img src='images/guarantee.png' alt='' />
            <span className='leading-5 ml-4 inline-block text-left'>
              <strong className='block font-extrabold'>Satisfaction</strong>{' '}
              <span>Guarantee</span>
            </span>
          </div>
        </div>
      </div>
      // <div className="bg-[#061b2c] text-white uppercase md:py-5 mb-5 text-center">
      //   <div className="max-w-lg mx-auto">
      //     <div className="flex flex-wrap max-w-2xl -mx-3">
      //       <div className="w-full md:w-1/3 px-3 py-3 md:py-0 border-b border-b-white last:border-b-0 md:border-0 md:border-r md:border-r-white md:last:border-r-0">
      //         <div className="flex flex-wrap justify-center items-center gap-4 tracking-wider leading-none">
      //           <img src="images/free-shipping-new.png" alt="" />
      //           <span className="inline-block text-left">
      //             <span className="block font-extrabold">Free Shipping</span>
      //             <span>To One Location</span>
      //           </span>
      //         </div>
      //       </div>
      //       <div className="w-full md:w-1/3 px-3 py-3 md:py-0 border-b border-b-white last:border-b-0 md:border-0 md:border-r md:border-r-white md:last:border-r-0">
      //         <div className="flex flex-wrap justify-center items-center gap-4 tracking-wider leading-none">
      //           <img src="images/logo-free.png" alt="" />
      //           <span className="inline-block text-left">
      //             <span className="block font-extrabold">1st Logo Free</span>
      //             <span>With Order</span>
      //           </span>
      //         </div>
      //       </div>
      //       <div className="w-full md:w-1/3 px-3 py-3 md:py-0 border-b border-b-white last:border-b-0 md:border-0 md:border-r md:border-r-white md:last:border-r-0">
      //         <div className="flex flex-wrap justify-center items-center gap-4 tracking-wider leading-none">
      //           <img src="images/guarantee.png" alt="" />
      //           <span className="inline-block text-left">
      //             <span className="block font-extrabold">Satisfaction</span>
      //             <span>Guarantee</span>
      //           </span>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }

  if (storeCode === _Store.type3) {
    return (
      <div className='w-full bg-[#061b2c] text-center flex justify-center mb-4 py-4 text-white'>
        <div className='w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3'>
          <div className='flex flex-wrap justify-center items-center border-r border-b border-b-white lg:border-b-transparent lg:border-r-white pb-3 lg:pb-0'>
            <span className=''>
              <img src='images/free-shipping-new.png' alt='' />
            </span>
            <span className='ml-2 text-left text-xs uppercase leading-4'>
              <strong>FREE SHIPPING</strong> <br />
              To One Location
            </span>
          </div>
          <div className='flex flex-wrap justify-center items-center border-r border-b border-b-white lg:border-b-transparent lg:border-r-white py-3 lg:py-0'>
            <span className=''>
              <img src='images/logo-free.png' alt='' />
            </span>
            <span className='ml-2 text-left text-xs uppercase leading-4'>
              <strong>1ST LOGO FREE</strong> <br />
              UP TO 10,000 STITCHES
            </span>
          </div>
          <div className='flex flex-wrap justify-center items-center pt-3 lg:pt-0'>
            <span className=''>
              <img src='images/guarantee.png' alt='' />
            </span>
            <span className='ml-2 text-left text-xs uppercase leading-4'>
              <strong>FREE PROOF</strong> <br />
              ON ALL ORDERS
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (storeCode === _Store.type4) {
    return <> NO product feature component added for Divinig UI </>;
  }

  return <>No Product Feature Component Found</>;
};

export default ProductFeatures;
