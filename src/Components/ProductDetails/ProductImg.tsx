import Image from 'appComponents/reusables/Image';
import { paths } from 'constants/paths.constant';
import { _OtherImage } from 'definations/APIs/colors.res';
import { _ProductDetails } from 'definations/APIs/productDetail.res';
import { useActions, useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React, { useEffect } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import AvailableColors from './AvailableColors';
import HeartIcon from './HeartIcon';
import ProductCompanion from './ProductCompanion';

interface _Props {
  product: _ProductDetails | null;
}

const ProductImg: React.FC<_Props> = ({ product }) => {
  const router = useRouter();
  const { setImage } = useActions();

  // STATES ----------------------------------------
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const selectedColor = useTypedSelector(
    (state) => state.product.selected.color,
  );
  const selectedImage = useTypedSelector(
    (state) => state.product.selected.image,
  );
  // const show = useTypedSelector((state) => state.store.display.footer);

  // FUNCTIONS  ----------------------------------------
  const selectImgHandler = (img: _OtherImage) => {
    setImage(img);
  };

  // UseEffect's  ----------------------------------------

  useEffect(() => {
    setImage({
      id: 0,
      imageUrl: selectedColor.imageUrl,
      altTag: selectedColor.altTag,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColor.attributeOptionId]);

  // JSX  ----------------------------------------

  if (product === null) return <></>;

  if (storeLayout === _Store.type1) {
    return (
      <div className="col-span-1 grid grid-cols-12 gap-6">
        <div className="col-span-12 border border-slate-200 relative">
          {/* Display Image */}
          <div className="main-image max-w-lg mx-auto">
            <InnerImageZoom
              src={selectedImage?.imageUrl}
              zoomType={'hover'}
              // alt={selectedImage.label}
              hideHint={true}
              className="w-full object-center object-cover sm:rounded-lg main_image"
            />
          </div>
          {/* Images to select */}
          <div className="sub-image md:absolute md:left-2 md:top-4 md:w-20 md:block">
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
                      className="w-full object-center object-cover"
                    />
                  </div>
                );
              })}
          </div>
          <HeartIcon className="absolute right-2 top-4 w-6 h-6" />
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <div className="w-full lg:w-6/12 px-3">
        <div className="relative">
          <div className="" onClick={() => router.push(paths.PRODUCT_LISTING)}>
            &lt;&lt; Back
          </div>
          {/* Display Image */}
          <div className="main-image border border-[#f0f0f0] mb-3">
            <InnerImageZoom
              src={selectedImage?.imageUrl}
              zoomType={'hover'}
              // alt={selectedImage.label}
              hideHint={true}
              className="max-h-full mx-auto"
            />
          </div>
          {/* Images to select */}
          <div className="sub-image w-full flex justify-center text-center gap-2">
            {selectedColor?.moreImages
              ?.map((img, index) => ({ ...img, id: index }))
              .map((img) => {
                const highlight =
                  img.id === selectedImage.id
                    ? 'border-[#cdde00]'
                    : 'border-[#415364] hover:border-[#cdde00]';
                return (
                  <div
                    key={img.id}
                    className={`w-20 h-20 overflow-hidden border ${highlight} p-1`}
                    onClick={() => selectImgHandler(img)}
                  >
                    <Image
                      src={img.imageUrl}
                      alt={img.altTag}
                      className="max-h-full mx-auto"
                    />
                  </div>
                );
              })}
          </div>
          <div className="max-w-sm mx-auto text-center mt-5">
            This product is subject to order minimum and maximum quantity
            requirements
          </div>
          <HeartIcon className="absolute right-2 top-4 w-6 h-6" />
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type3) {
    return (
      <div className="relative">
        <div className="relative">
          {/* Display Image */}
          <div className="border border-gray-200 mb-3">
            <div className="main-image max-w-xl mx-auto">
              <InnerImageZoom
                src={selectedImage?.imageUrl}
                zoomType={'hover'}
                // alt={selectedImage.label}
                hideHint={true}
                className="max-h-full mx-auto"
              />
            </div>
          </div>
          {/* Images to select */}
          <div className="sub-image absolute left-2 top-4 w-20 block">
            {selectedColor?.moreImages
              ?.map((img, index) => ({ ...img, id: index }))
              .map((img) => {
                const highlight =
                  img.id === selectedImage.id
                    ? 'border-primary'
                    : 'hover:border-primary';
                return (
                  <div
                    key={img.id}
                    className={`border ${highlight} p-1 mb-1 last:mb-0`}
                    onClick={() => selectImgHandler(img)}
                  >
                    <Image
                      src={img.imageUrl}
                      alt={img.altTag}
                      className="w-full object-center object-cover"
                    />
                  </div>
                );
              })}
          </div>
          <HeartIcon className="absolute right-2 top-4 w-6 h-6" />
        </div>
        <AvailableColors />
        <ProductCompanion
          name={product.companionProductName}
          id={product.companionProductId}
          link={product.companionProductLink}
          imageUrl={product.companionProductImage}
        />
      </div>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <div className="col-span-1">
        {/* <!-- Image selector --> */}
        <div className="relative">
          <div className="relative">
            {/* Display Image */}
            <div className="main-image border border-gray-200 mb-3">
              <InnerImageZoom
                src={selectedImage?.imageUrl}
                zoomType={'hover'}
                // alt={selectedImage.label}
                hideHint={true}
                className="max-h-full mx-auto"
              />
            </div>
            {/* Images to select */}
            <div className="sub-image absolute left-2 top-4 w-20 block">
              {selectedColor?.moreImages
                ?.map((img, index) => ({ ...img, id: index }))
                .map((img) => {
                  const hightlight =
                    img.id === selectedImage.id
                      ? 'border-secondary'
                      : 'border-gray-300 hover:border-secondary';
                  return (
                    <div
                      key={img.id}
                      className={`border ${hightlight} p-1 mb-1 last:mb-0`}
                      onClick={() => selectImgHandler(img)}
                    >
                      <Image
                        src={img.imageUrl}
                        alt={img.altTag}
                        className="w-full object-center object-cover"
                      />
                    </div>
                  );
                })}
            </div>
            <HeartIcon className="absolute right-2 top-4 w-6 h-6" />
          </div>
          <AvailableColors />
        </div>
      </div>
    );
  }

  return <></>;
};

export default ProductImg;
