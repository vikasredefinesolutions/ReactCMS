import { useTypedSelector } from 'hooks';
import React from 'react';
import { UpdateWishList } from 'services/user.service';

interface _props {
  className: string;
}

const HeartIcon: React.FC<_props> = ({ className }) => {
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

export default HeartIcon;
