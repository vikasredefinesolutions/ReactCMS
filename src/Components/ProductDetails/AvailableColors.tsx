import Image from 'appComponents/reUsable/Image';
import { _modals } from 'definations/product.type';
import { useActions, useTypedSelector } from 'hooks';
import { _Store, __constant } from 'page.config';
import React, { useState } from 'react';
import SizeChart from './SizeChartModal';

const AvailableColors: React.FC<{ storeCode: string }> = ({ storeCode }) => {
  const { setColor } = useActions();
  const colors = useTypedSelector((state) => state.product.product.colors);
  const [showAllColors, setShowAllColors] = useState(false);
  const [showModal, setShowModal] = useState<null | _modals>(null);
  const selectedColor = useTypedSelector(
    (state) => state.product.selected.color,
  );

  if (colors === null) return <></>;
  const colorsCount = colors.length;
  const showAllColorsButton =
    colorsCount > __constant._productDetails.imagesInRow;

  if (
    storeCode === _Store.type1 ||
    storeCode === _Store.type15 ||
    storeCode === _Store.type16
  ) {
    return (
      <div>
        <div className='text-sm text-gray-600 bg-primary flex flex-wrap justify-between items-center p-2 md:p-0 md:pl-2 my-2'>
          <span className='text-lg font-bold text-white'>
            Available Colors:
          </span>
        </div>
        <div className='flex flex-wrap gap-5 text-sm text-center px-2 available-colors'>
          {colors.map((product, index) => {
            const show =
              showAllColors || index < __constant._productDetails.imagesInRow;
            const highlight =
              product.attributeOptionId === selectedColor?.attributeOptionId
                ? 'border-secondary'
                : 'border-slate-200';
            return (
              <div
                className={`w-20 ${show === false && 'sr-only'}`}
                key={product.attributeOptionId}
                onClick={() => setColor(product)}
              >
                <div
                  className={`border-2 ${highlight} hover:border-secondary mb-1 last:mb-0`}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.altTag}
                    className='w-full object-center object-cover'
                  />
                </div>
                <div
                  className=''
                  style={{ lineHeight: 1.25, wordWrap: 'break-word' }}
                >
                  {product.name}
                </div>
              </div>
            );
          })}
        </div>
        {showAllColorsButton && (
          <div className='text-right'>
            <button
              onClick={() => setShowAllColors((showAll) => !showAll)}
              className=''
            >
              {showAllColors ? (
                <span className='span1'>Show Less</span>
              ) : (
                <>
                  <span className='span1'>See All</span>
                  <span className='span2'> {colorsCount} </span>
                  <span className='span3'>Colors</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    );
  }

  if (storeCode === _Store.type2) {
    return (
      <>
        <div className='text-black mb-5 flex items-center'>
          <span className='font-bold w-32'>Color Name </span>
          <span>: {selectedColor?.name}</span>
        </div>
        <div className='flex justify-between flex-wrap items-end mb-5'>
          <div className='flex align-top'>
            <div className='w-32 flex flex-wrap items-center'>
              <span className='font-bold'>Select Color</span>
            </div>
            <div className='flex flex-wrap gap-1 text-sm text-center'>
              {colors.map((product) => {
                const active =
                  product.attributeOptionId === selectedColor?.attributeOptionId
                    ? ' border-[#cdde00]'
                    : 'border-[#415364] hover:border-[#cdde00]';
                return (
                  <div
                    key={product.attributeOptionId}
                    className={`w-8 h-8 border-2 ${active} cursor-pointer overflow-hidden text-center`}
                    onClick={() => setColor(product)}
                  >
                    <Image
                      src={product.imageUrl}
                      alt={product.altTag}
                      className='max-h-full mx-auto'
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className=''>
            <button onClick={() => setShowModal('sizeChart')}>
              <img src='images/size-chart.jpg' alt='' />
            </button>
          </div>
          {showModal && (
            <SizeChart modalHandler={setShowModal} storeCode={storeCode} />
          )}
        </div>
      </>
    );
  }

  if (storeCode === _Store.type3) {
    return (
      <>
        <div className='text-black mb-5 flex items-center'>
          <span className='font-bold w-32'>Color Name </span>
          <span>: {selectedColor?.name}</span>
        </div>
        <div className='flex justify-between flex-wrap items-end mb-5'>
          <div className='flex align-top'>
            <div className='w-32 flex flex-wrap items-center'>
              <span className='font-bold'>Select Color</span>
            </div>
            <div className='flex flex-wrap gap-1 text-sm text-center'>
              {colors.map((product) => {
                const active =
                  product.attributeOptionId === selectedColor?.attributeOptionId
                    ? ' border-primary'
                    : 'border-grey hover:border-primary';
                return (
                  <div
                    key={product.attributeOptionId}
                    className={`w-8 h-8 border-2 ${active} cursor-pointer overflow-hidden text-center`}
                    onClick={() => setColor(product)}
                  >
                    <Image
                      src={product.imageUrl}
                      alt={product.altTag}
                      className='max-h-full mx-auto'
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className=''>
            <button onClick={() => setShowModal('sizeChart')}>
              <img src='images/size-chart.jpg' alt='' />
            </button>
          </div>
          {showModal && (
            <SizeChart modalHandler={setShowModal} storeCode={storeCode} />
          )}
        </div>
      </>
    );
  }

  if (storeCode === _Store.type4) {
    return (
      <>
        <div className='w-full flex justify-center text-center gap-2 text-md font-bold mb-2'>
          Available Color:
        </div>
        <div className='sub-image w-full flex justify-center text-center gap-2 text-xs'>
          {colors.map((product) => {
            const hightlight =
              product.attributeOptionId === selectedColor?.attributeOptionId
                ? 'border-secondary'
                : 'border-gray-300 hover:border-secondary';
            if (product.imageUrl === null) return <></>;
            return (
              <div
                key={product.attributeOptionId}
                className='overflow-hidden'
                onClick={() => setColor(product)}
              >
                <div className={`w-20 h-20 border-2 ${hightlight} p-1 mb-1`}>
                  <Image
                    src={product.imageUrl}
                    alt={product.altTag}
                    className='max-h-full mx-auto'
                  />
                </div>
                <div className='text-primary'>{product.name}</div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return <></>;
};

export default AvailableColors;
