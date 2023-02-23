import { __Cookie } from '@constants/global.constant';
import config from 'api.config';
import Image from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import { WishlistType } from 'definations/wishlist.type';
import { extractCookies } from 'helpers/common.helper';
import { useActions, useTypedSelector } from 'hooks';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { removeWishlist } from 'services/wishlist.service';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistType>([]);
  const { removeWishListById } = useActions();
  const customerId = useTypedSelector((state) => state.user.id);
  const wishListData = useTypedSelector((state) => state.wishlist.wishListData);
  useEffect(() => {
    const tempCustomerId = extractCookies(
      __Cookie.tempCustomerId,
      'browserCookie',
    ).tempCustomerId;

    if (customerId || tempCustomerId) {
      setWishlist(wishListData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerId, wishListData]);

  const removeWishlistHandler = async (id: number) => {
    await removeWishlist(id);
    removeWishListById({ id: id });
  };

  return (
    <section className='container mx-auto mt-5 mb-5'>
      <div className='pb-5 text-center'>
        <div className='text-title mb-2'>Wishlist</div>
      </div>
      <div className='relative'>
        <ul role='list' className='flex flex-wrap -mx-3 gap-y-6'>
          {wishlist.map((list, index) => (
            <li key={index} className='w-full md:w-1/2 lg:w-1/4 px-3 mb-2'>
              <div className='group relative border border-gray-300 p-3 text-center h-full'>
                <Link
                  key={list.productId}
                  href={`${origin}/${list.seName}.html?v=product-detail&altview=1`}
                  className='relative underline min-h-[48px]'
                >
                  <a className='w-full cursor-pointer'>
                    <Image
                      src={
                        config.mediaBaseUrl + list && list?.colorLogoUrl
                          ? list.colorLogoUrl
                          : ''
                      }
                      className=''
                      alt='wishlist'
                    />
                  </a>
                </Link>
                <div className='mt-4'>
                  <h3 className=''>
                    <Link
                      key={list.productId}
                      href={`${origin}/${list.seName}.html?v=product-detail&altview=1`}
                      className='relative underline min-h-[48px]'
                    >
                      <a>{list.productName}</a>
                    </Link>
                  </h3>
                  <div className='text-default-text mt-2'>
                    {/* ${list.price} */}
                    <Price
                      value={undefined}
                      prices={{
                        msrp: list.price,
                        salePrice: list.price,
                      }}
                    />
                  </div>
                  <div className='flex justify-center items-center gap-2 mt-2'>
                    <div className='btn btn-secondary !py-1 text-center'>
                      <Link
                        key={list.productId}
                        href={`${origin}/${list.seName}.html?v=product-detail&altview=1`}
                        className='relative underline min-h-[48px]'
                      >
                        <a>View</a>
                      </Link>
                    </div>
                    <div className=''>
                      <button
                        title='Remove'
                        className='btn btn-primary !py-1 text-center'
                        onClick={() => removeWishlistHandler(list.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Wishlist;
