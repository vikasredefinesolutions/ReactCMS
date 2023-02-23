import { FetchTagsName } from '@services/product.service';
import Image from 'appComponents/reUsable/Image';
import Wishlist from 'appComponents/ui/Wishlist';
import { _OtherImage } from 'definations/APIs/colors.res';
import {
  _FetchTagsName,
  _ProductDetails,
} from 'definations/APIs/productDetail.res';
import { useActions, useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React, { useEffect, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import AvailableColors from './AvailableColors';
import HeartIcon from './HeartIcon';
import ProductColors from './ProductColors';
import ProductCompanion from './ProductCompanion';

interface _Props {
  product: _ProductDetails | null;
}

const ProductImg: React.FC<_Props & { storeCode: string }> = ({
  product,
  storeCode,
}) => {
  const router = useRouter();
  const { setImage } = useActions();
  const brandId = useTypedSelector((state) => state.wishlist.brandId);
  const [TagsDetails, setTagsDetails] = useState<_FetchTagsName[] | null>();
  const [wishlistPresent, setWishlistPresent] = useState<boolean>(false);
  const [wishlistId, setWishlistId] = useState<number>(0);

  // STATES ----------------------------------------
  const selectedColor = useTypedSelector(
    (state) => state.product.selected.color,
  );
  const selectedImage = useTypedSelector(
    (state) => state.product.selected.image,
  );

  const wishlist = useTypedSelector((state) => state.wishlist.wishListData);
  const customerId = useTypedSelector((state) => state.user.id);
  // const show = useTypedSelector((state) => state.store.display.footer);

  // FUNCTIONS  ----------------------------------------
  const selectImgHandler = (img: _OtherImage) => {
    setImage(img);
  };
  // UseEffect's  ----------------------------------------

  useEffect(() => {
    setImage({
      id: 1,
      imageUrl: selectedColor.moreImages[0].imageUrl,
      altTag: selectedColor.moreImages[0].altTag,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColor.attributeOptionId, product?.id]);
  useEffect(() => {
    if (product) {
      FetchTagsName(product.id).then((res) => setTagsDetails(res));
    }
  }, [product?.id]);

  useEffect(() => {
    wishlist.forEach((item) => {
      if (item.productId === product?.id) {
        setWishlistPresent(true);
        setWishlistId(item.id);
      }
    });
  }, [customerId, wishlist]);

  // JSX  ----------------------------------------

  if (product === null) return <></>;

  if (
    storeCode === _Store.type1 ||
    storeCode === _Store.type15 ||
    storeCode === _Store.type16 ||
    storeCode === _Store.type8 ||
    storeCode === _Store.type21
  ) {
    return (
      <div
        className={`${
          storeCode === _Store.type21 ? 'lg:col-span-7' : 'col-span-1'
        } grid grid-cols-12 gap-6`}
      >
        <div className='col-span-12 border border-slate-200 relative'>
          {/* Display Image */}
          <div className='main-image max-w-lg mx-auto'>
            <InnerImageZoom
              src={selectedImage?.imageUrl}
              zoomType={'hover'}
              // alt={selectedImage.label}
              hideHint={true}
              className='w-full object-center object-cover sm:rounded-lg main_image'
            />
          </div>
          {/* Images to select */}
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
          {(storeCode != _Store.type21 || storeCode != _Store.type8) && (
            <div className='absolute top-5 right-5 text-gray-800 p-1 z-25'>
              <button className=''>
                <Wishlist
                  {...{
                    productId: product.id,
                    name: product.name,
                    color: selectedColor.name,
                    price: product.salePrice,
                    wishlistId: wishlistId,
                  }}
                  iswishlist={wishlistPresent}
                  brandId={brandId}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (storeCode === _Store.type2) {
    return (
      <div className='w-full lg:w-6/12 px-3'>
        <div className='' onClick={() => router.back()}>
          &lt;&lt; Back
        </div>
        <div className='relative'>
          {/* Display Image */}
          <div className='main-image border border-[#f0f0f0] mb-3'>
            <InnerImageZoom
              src={selectedImage?.imageUrl}
              zoomType={'hover'}
              // alt={selectedImage.label}
              hideHint={true}
              className='max-h-full mx-auto'
            />
          </div>
          {/* Images to select */}
          <div className='sub-image w-full flex justify-center text-center gap-2'>
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
                      className='max-h-full mx-auto'
                    />
                  </div>
                );
              })}
          </div>
          <div className='max-w-sm mx-auto text-center mt-5'>
            This product is subject to order minimum and maximum quantity
            requirements
          </div>
          <HeartIcon className='absolute right-2 top-5 w-6 h-6' />
        </div>
      </div>
    );
  }

  if (storeCode === _Store.type3) {
    return (
      <div className='relative'>
        <div className='relative'>
          {/* Display Image */}
          <div className='border border-gray-200 mb-3'>
            <div className='main-image max-w-xl mx-auto'>
              <InnerImageZoom
                src={selectedImage?.imageUrl}
                zoomType={'hover'}
                // alt={selectedImage.label}
                hideHint={true}
                className='max-h-full mx-auto'
              />
            </div>
          </div>
          {/* Images to select */}
          <div className='sub-image absolute left-2 top-4 w-20 block'>
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
                      className='w-full object-center object-cover'
                    />
                  </div>
                );
              })}
          </div>
          {/* <HeartIcon className="absolute right-2 top-4 w-6 h-6" /> */}
        </div>
        <ProductColors storeCode={storeCode} />

        <ProductCompanion
          storeCode={storeCode}
          name={product.companionProductName}
          seName={product.companionProductSEName}
          imageUrl={product.companionProductImage}
        />
      </div>
    );
  }

  if (storeCode === _Store.type4) {
    return (
      <div className='col-span-1'>
        {/* <!-- Image selector --> */}
        <div className='relative'>
          <div className='relative'>
            {/* Display Image */}
            <div className='main-image border border-gray-200 mb-3'>
              <InnerImageZoom
                src={selectedImage?.imageUrl}
                zoomType={'hover'}
                // alt={selectedImage.label}
                hideHint={true}
                className='max-h-full mx-auto'
              />
            </div>
            {/* Images to select */}
            <div className='sub-image absolute left-2 top-4 w-20 block'>
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
                        className='w-full object-center object-cover'
                      />
                    </div>
                  );
                })}
            </div>
            {TagsDetails?.map((tags, index) => {
              return (
                <div className={tags.tagPosition} key={index}>
                  <Image
                    src={tags.imagename}
                    alt={tags.productTagName}
                    className='w-full object-center object-cover'
                  />
                </div>
              );
            })}

            {/* <HeartIcon className="absolute right-2 top-4 w-6 h-6" /> */}
          </div>
        </div>
        <AvailableColors storeCode={storeCode} />
      </div>
    );
  }

  if (
    storeCode === _Store.type22 ||
    storeCode === _Store.type5 ||
    storeCode === _Store.type10 ||
    storeCode === _Store.type13 ||
    storeCode === _Store.type6 ||
    storeCode === _Store.type24 ||
    storeCode === _Store.type12 ||
    storeCode === _Store.type26 ||
    storeCode === _Store.type27 ||
    storeCode === _Store.type23
  ) {
    return (
      <div className='lg:col-start-2 lg:col-end-7 grid grid-cols-12 gap-6'>
        <div className='col-span-12 relative'>
          <div className='relative'>
            <div className='main-image border border-[#f0f0f0] mb-3'>
              <InnerImageZoom
                src={selectedImage?.imageUrl}
                zoomType={'hover'}
                hideHint={true}
                className='max-h-full mx-auto'
              />
            </div>
            <div className='sub-image w-full flex justify-center text-center gap-2'>
              {selectedColor?.moreImages
                ?.map((img, index) => ({ ...img, id: index }))
                .map((img) => {
                  const highlight =
                    img.id === selectedImage.id
                      ? 'border-black'
                      : 'hover:border-gray-300';
                  return (
                    <div
                      key={img.id}
                      className={`w-20 h-20 overflow-hidden border border-gray-300 ${highlight} p-1`}
                      onClick={() => selectImgHandler(img)}
                    >
                      <Image
                        src={img.imageUrl}
                        alt={img.altTag}
                        className='max-h-full mx-auto'
                      />
                    </div>
                  );
                })}
            </div>
            {storeCode === _Store.type5 && (
              <HeartIcon className='absolute right-2 top-5 w-6 h-6 cursor-pointer' />
            )}
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};

export default ProductImg;
