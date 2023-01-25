import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';

type _props = Pick<any, 'features'>;

const Features: React.FC<_props> = ({ features }) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  // const show = useTypedSelector((state) => state.store.display.footer);

  if (storeLayout === _Store.type2) {
    return (
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
    );
  }

  // return <div dangerouslySetInnerHTML={{ __html: features }}></div>;
  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
    return (
      <div className='bg-secondary'>
        <div className='container mx-auto md:py-5 text-center'>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full md:w-auto inline-block px-8 py-5 md:py-0 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-slate-800'>
              <div className='w-full md:w-auto flex flex-wrap justify-center items-center'>
                <span className='material-icons text-4xl' role='heading'>
                  local_shipping
                </span>
                <div className='leading-5 ml-2 text-left text-default-text font-default-text'>
                  <div className='font-semibold'>Free Shipping</div>
                  <div className=''>To One Location</div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-auto inline-block px-8 py-5 md:py-0 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-slate-800'>
              <div className='w-full md:w-auto flex flex-wrap justify-center items-center'>
                <span className='material-icons text-4xl' role='heading'>
                  style
                </span>
                <div className='leading-5 ml-2 text-left text-default-text font-default-text'>
                  <div className='font-semibold'>1st Logo Free</div>
                  <div className=''>Up To 10,000 Stitches</div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-auto inline-block px-8 py-5 md:py-0 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-slate-800'>
              <div className='w-full md:w-auto flex flex-wrap justify-center items-center'>
                <span className='material-icons text-4xl' role='heading'>
                  verified
                </span>
                <div className='leading-5 ml-2 text-left text-default-text font-default-text'>
                  <div className='font-semibold'>Free Proof</div>
                  <div className=''>On All Orders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};

export default Features;
