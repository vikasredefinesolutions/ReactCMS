import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React from 'react';
interface _props {
  name: string | null;
  seName: string | null;
  imageUrl: string | null;
}

const ProductCompanion: React.FC<_props & { storeCode: string }> = ({
  name,
  imageUrl,
  seName,
  storeCode,
}) => {
  const router = useRouter();
  if (name === null) return <></>;

  const goToProduct = (seName: string | null) => {
    if (seName === null) return;
    router.push(`${seName}`);
  };

  if (storeCode === _Store.type3) {
    return (
      <div className='pt-10 mx-auto max-w-xs text-center'>
        <div className='mb-2 text-2xl'>COMPANION</div>

        <div className='' key={name}>
          <div className='' onClick={() => goToProduct(seName)}>
            <img
              src={imageUrl || '/dummyShirtImage.jpg'}
              alt={name}
              className='max-h-full mx-auto '
            />
          </div>
          <div className='mt-2'>{name}</div>
        </div>
      </div>
    );
  }

  if (storeCode === _Store.type4) {
    return (
      <div className='text-black mb-5 text-sm'>
        <span className='font-bold mr-1'>Companion Product</span> :
        <div className='' key={name} onClick={() => goToProduct(seName)}>
          <button className='text-anchor hover:text-anchor-hover'>
            {name}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='text-lg m-3'>
      <div className='font-semibold'>Companion Product:</div>
      <div key={name}>
        <button
          onClick={() => goToProduct(seName)}
          className='text-anchor hover:text-anchor-hover text-sm font-semibold underline'
        >
          {name}
        </button>
      </div>
    </div>
  );
};

export default ProductCompanion;
