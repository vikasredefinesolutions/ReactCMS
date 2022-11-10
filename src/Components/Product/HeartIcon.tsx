import React from 'react';
import { useTypedSelector } from '../../../hooks';
import { UpdateWishList } from '../../../services/user.service';

interface _props {
  src: string;
  title: string;
  alt: string;
  className: string;
}

const HeartIcon: React.FC<_props> = (image) => {
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
      className={image.className}
      onClick={() => addToWishList(selectedColor?.productId || null)}
    >
      <img src={image.src} title={image.title} alt={image.alt} />
    </div>
  );
};

export default HeartIcon;
