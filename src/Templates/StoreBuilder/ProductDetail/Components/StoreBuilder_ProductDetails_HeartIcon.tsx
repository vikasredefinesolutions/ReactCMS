import React from 'react';

import { useTypedSelector } from 'hooks';
import { UpdateWishList } from 'services/user.service';

interface _props {
  className: string;
}

const StoreBuilder_ProductDetails_HeartIcon: React.FC<_props> = ({
  className,
}) => {
  const selectedColor = useTypedSelector(
    (state) => state.product.selected.color,
  );

  const addToWishList = (id: number | null) => {
    if (id === null) return;
    UpdateWishList(id);
    // .then((res) => console.log(res))
    // .catch((res) => console.log(res));
  };

  return (
    <div
      className={className}
      onClick={() => addToWishList(selectedColor?.productId || null)}
    >
      <span className='material-icons-outlined'> favorite_border </span>
    </div>
  );
};

export default StoreBuilder_ProductDetails_HeartIcon;
