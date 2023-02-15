import React from 'react';

interface _props {
  storeId: number;
}

const DIHomePage: React.FC<_props> = ({ storeId }) => {
 

  return (
    <section className='mainsection container mx-auto mt-20'>
      Dynamic Brands
    </section>
  );
};

export default DIHomePage;
