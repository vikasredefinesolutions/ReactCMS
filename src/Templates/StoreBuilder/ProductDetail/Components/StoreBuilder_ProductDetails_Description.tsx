import React from 'react';

interface _props {
  text: string;
}

const StoreBuilder_ProductDetails_Description: React.FC<_props> = ({
  text,
}) => {
  return (
    <section className=''>
      <div className='container mx-auto'>
        <div className='bg-white pt-10 pb-10 px-4'>
          <div className=''>
            <div className='bg-primary py-2 px-4 text-white inline-block rounded-t-md'>
              Description
            </div>
          </div>
          <div
            className='text-sm text-gray-700 tracking-widest p-6 border border-gray-300'
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default StoreBuilder_ProductDetails_Description;
