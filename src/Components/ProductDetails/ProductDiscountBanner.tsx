import Price from 'appComponents/reUsable/Price';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React, { useEffect, useState } from 'react';

interface _Props {
  storeCode: string;
}

const ProductDiscountBanner: React.FC<_Props> = ({ storeCode }) => {
  const { price, name, discounts } = useTypedSelector(
    (state) => state.product.product,
  );
  const cartItems = useTypedSelector((state) => state.cart.cart);
  const { id } = useTypedSelector((state) => state.user);

  const [discountPrice, setDiscountPrice] = useState<number>(0);
  const [displayQuantity, setDisplayQuantity] = useState<number>(0);
  const calculateDiscount = () => {
    let qty = 0;
    cartItems?.map((item, index) => {
      if (item['productName'] === name && discounts) {
        qty = qty + item['totalQty'];
        for (let i = 0; i < discounts.subRows.length; i++) {
          if (
            qty <
              parseInt(discounts.subRows[i].displayQuantity.split('+')[0]) &&
            price?.msrp
          ) {
            setDiscountPrice(
              price?.msrp - parseFloat(discounts.subRows[i].discountPrice),
            );
            setDisplayQuantity(
              parseInt(discounts.subRows[i].displayQuantity.split('+')[0]) -
                qty,
            );
            break;
          }
        }
      }
    });
  };

  useEffect(() => {
    calculateDiscount();
  }, [cartItems?.length]);

  if (storeCode === _Store.type2) {
    return (
      <>
        {id && (
          <div className='mb-3 font-bold bg-[#051C2C] px-4 py-2.5 text-white tracking-widest text-center'>
            Add{' '}
            {displayQuantity
              ? displayQuantity
              : discounts?.subRows[0].displayQuantity}{' '}
            more of {name} to your cart to save an additional $
            {discountPrice
              ? discountPrice.toFixed(2)
              : price?.msrp && discounts
              ? (
                  price?.msrp - parseFloat(discounts?.subRows[0].discountPrice)
                ).toFixed(2)
              : 0}{' '}
            per Item!
          </div>
        )}

        <div className='bg-[#d8dfe1] text-sm text-gray-900 flex flex-wrap p-5 items-center gap-2 tracking-wider mb-3'>
          <span className=''>Price Per Item</span>
          <span className='text-4xl font-bold'>
            <Price
              value={undefined}
              prices={{
                msrp: price?.msrp || 0,
                salePrice: price?.salePrice || 0,
              }}
            />
          </span>
        </div>
      </>
    );
  }

  return <></>;
};

export default ProductDiscountBanner;
