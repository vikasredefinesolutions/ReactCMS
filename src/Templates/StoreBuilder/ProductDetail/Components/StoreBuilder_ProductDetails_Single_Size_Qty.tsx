import React, { useState } from 'react';
import StoreBuilder_ProductDetails_SingleQtyInput from './StoreBuilder_ProductDetails_SignleQtyInput';
import StoreBuilder_ProductDetails_SizeList from './StoreBuilder_ProductDetails_SizeList';

interface _props {
  price: number;
}

const StoreBuilder_ProductDetails_Single_Size_Qty: React.FC<_props> = ({
  price,
}) => {
  const [size, setSize] = useState<string>('');

  return (
    <>
      <StoreBuilder_ProductDetails_SizeList
        selectedSize={size}
        setSelectedSize={setSize}
      />
      <StoreBuilder_ProductDetails_SingleQtyInput price={price} size={size} />
    </>
  );
};

export default StoreBuilder_ProductDetails_Single_Size_Qty;
