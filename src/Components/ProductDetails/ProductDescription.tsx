import { _Store, __constant } from 'page.config';
import React, { useState } from 'react';
interface _props {
  heading: string;
  text: string;
}
const ProductDescription: React.FC<_props & { storeCode: string }> = ({
  text,
  heading,
  storeCode,
}) => {
  const [showExtra, setShowExtra] = useState(false);

  if (!text) return <></>;
  const showExtraButton =
    text.length >= __constant._productDetails.descriptionLength;
  // const show = useTypedSelector((state) => state.store.display.footer);

  if (
    storeCode === _Store.type1 ||
    storeCode === _Store.type15 ||
    storeCode === _Store.type16
  ) {
    return (
      <div className='m-3'>
        <h3 className='font-semibold text-2xl mb-2'>{heading}</h3>
        <div
          className={`relative text-sm text-gray-700 tracking-widest div_description transition-all pb-4 ${
            !showExtra && 'max-h-40 h-20 overflow-hidden'
          }`}
        >
          <div
            className='pb-3'
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          ></div>
          {showExtraButton && (
            <div
              className={`bg-gradient-to-b from-[#fffefe00] to-[#ffffff] absolute bottom-0 left-0 right-0 ${
                !showExtra && 'pt-20'
              } text-center`}
            >
              <button
                className='text-indigo-500 underline text-sm font-bold'
                onClick={() => setShowExtra((show) => !show)}
              >
                {showExtra ? 'Read Less' : 'Read More'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (storeCode === _Store.type3) {
    return (
      <section className='mainsection pt-10'>
        <div className='container mx-auto'>
          <div className=''>
            <div className='w-full text-center text-2xl md:text-3xl lg:text-title font-title mb-4'>
              {heading}
            </div>
            <div className='' dangerouslySetInnerHTML={{ __html: text }}></div>
          </div>
        </div>
      </section>
    );
  }

  if (storeCode === _Store.type2) {
    return (
      <div className='container mx-auto pt-10'>
        <div className=''>
          <div className='w-full text-center text-xl md:text-2xl lg:text-sub-title font-sub-title mb-4'>
            {heading}
          </div>
          <div
            className='text-default-text font-default-text'
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </div>
      </div>
    );
  }

  if (storeCode === _Store.type4) {
    return (
      <section className='mainsection mt-20'>
        <div className='container mx-auto'>
          <div className=''>
            <div className='w-full text-center text-2xl md:text-3xl lg:text-title font-title mb-4'>
              {heading}
            </div>
            <div
              className='text-[#0A1C2B] text-sm'
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          </div>
        </div>
      </section>
    );
  }
  return <></>;
};

export default ProductDescription;
