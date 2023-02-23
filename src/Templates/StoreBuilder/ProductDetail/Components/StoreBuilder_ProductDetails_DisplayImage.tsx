import config from 'api.config';
import Image from 'appComponents/reUsable/Image';
import { _OtherImage, _ProductColor } from 'definations/APIs/colors.res';
import { useTypedSelector } from 'hooks';
import React, { useEffect, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import StoreBuilder_ProductDetails_HeartIcon from './StoreBuilder_ProductDetails_HeartIcon';
interface _props {
  colors: _ProductColor[];
}

const StoreBuilder_ProductDetails_DisplayImage: React.FC<_props> = ({
  colors,
}) => {
  //-------------------------------------------------------------
  const newColorToDisplay = useTypedSelector(
    (state) => state.product.selected.color,
  );
  const [selectedColor, setSelectedColor] = useState<_ProductColor>(colors[0]);
  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    imageUrl: string;
    altTag: string;
  }>({
    id: 0,
    imageUrl: colors[0].imageUrl,
    altTag: colors[0].altTag,
  });

  //-------------------------------------------------------------
  const selectImgHandler = (img: _OtherImage) => {
    setSelectedImage(img);
  };

  //-------------------------------------------------------------
  useEffect(() => {
    if (
      newColorToDisplay.attributeOptionId > 0 &&
      selectedColor.attributeOptionId === newColorToDisplay.attributeOptionId
    ) {
      return;
    }

    setSelectedColor(newColorToDisplay);
    setSelectedImage({
      id: 0,
      imageUrl: newColorToDisplay.imageUrl,
      altTag: newColorToDisplay.altTag,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newColorToDisplay?.attributeOptionId]);

  if (colors === null) return <></>;

  return (
    <div className={`lg:col-span-7 grid grid-cols-12 gap-6`}>
      <div className='col-span-12 border border-slate-200 relative'>
        <div className='main-image max-w-lg mx-auto'>
          <InnerImageZoom
            src={config.mediaBaseUrl + selectedImage?.imageUrl}
            zoomType={'hover'}
            // alt={selectedImage.label}
            hideHint={true}
            className='w-full object-center object-cover sm:rounded-lg main_image'
          />
        </div>

        <div className='sub-image absolute left-2 top-4 w-20 block'>
          {selectedColor?.moreImages
            ?.map((img, index) => ({ ...img, id: index }))
            .map((img) => {
              const highlight =
                img.id === selectedImage.id
                  ? 'border-secondary'
                  : 'border-slate-200 hover:border-secondary';
              return (
                <div
                  key={img.id + img.imageUrl}
                  className={`md:border p-1 mb-1 last:mb-0 ${highlight}`}
                  onClick={() => selectImgHandler(img)}
                >
                  <Image
                    src={img.imageUrl}
                    alt={img.altTag}
                    className='w-full object-center object-cover'
                  />
                </div>
              );
            })}
        </div>
        <StoreBuilder_ProductDetails_HeartIcon className='absolute right-2 top-4 w-6 h-6' />
      </div>
    </div>
  );
};

export default StoreBuilder_ProductDetails_DisplayImage;
