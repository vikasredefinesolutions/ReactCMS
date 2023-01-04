import { _FeaturedMoreImages } from '@type/APIs/storeDetails.res';
import Image from 'appComponents/reUsable/Image';
import { useActions, useTypedSelector } from 'hooks';
import React from 'react';

interface _props {
  images: _FeaturedMoreImages[];
  bIndex: number;
  pIndex: number;
}

const FeaturedImageOptions: React.FC<_props> = ({ images, bIndex, pIndex }) => {
  const { showFeaturedImage } = useActions();
  const { uImgIndex } = useTypedSelector((state) => state.home.selected);

  return (
    <ul role="list" className="flex items-center mt-2 justify-center space-x-1">
      {images.map((image, imageIndex) => {
        const uIndex = `${bIndex}-${pIndex}-${imageIndex}`;
        return (
          <li
            key={uIndex}
            className={`w-7 h-7 border-2 hover:border-secondary ${
              uIndex === uImgIndex[pIndex] ? 'border-secondary' : ''
            } `}
            onClick={() =>
              showFeaturedImage({
                imageDetails: image,
                uImgIndex: uIndex,
                productIndex: pIndex,
              })
            }
          >
            <Image src={image.imageUrl} alt={image.altTag} className="" />
          </li>
        );
      })}
    </ul>
  );
};

export default FeaturedImageOptions;
