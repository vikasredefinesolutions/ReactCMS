import { __Cookie } from '@constants/global.constant';
import Image from 'appComponents/reUsable/Image';
import { WishlistType } from 'definations/wishlist.type';
import { extractCookies } from 'helpers/common.helper';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getWishlist, removeWishlist } from 'services/wishlist.service';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistType>([]);
  const customerId = useTypedSelector((state) => state.user.id);
  useEffect(() => {
    const tempCustomerId = extractCookies(
      __Cookie.tempCustomerId,
      'browserCookie',
    ).tempCustomerId;

    if (customerId || tempCustomerId) {
      getWishlist(customerId || ~~(tempCustomerId || 0)).then((res) => setWishlist(res));
    }
    // setWishlist(wishlist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerId, wishlist]);

  const removeWishlistHandler = (id: number) => {
    removeWishlist(id).then(() => getWishlist(customerId || 0).then((res) => setWishlist(res)));

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
              <div className='group relative border border-gray-300 p-3 text-center'>
                <Link
                  key={list.productId}
                  href={`${origin}/${list.seName}.html?v=product-detail&altview=1`}
                  className='relative underline min-h-[48px]'
                >
                  <div className='w-full cursor-pointer'>
                    <Image
                      src={list.colorLogoUrl}
                      className=''
                      alt='wishlist'
                    />
                  </div>
                </Link>
                <div className='mt-4'>
                  <h3 className='h-10'>
                    <Link
                      key={list.productId}
                      href={`${origin}/${list.seName}.html?v=product-detail&altview=1`}
                      className='relative underline min-h-[48px]'
                    >
                      {list.productName}
                    </Link>
                  </h3>
                  <div className='text-default-text mt-2'>${list.price}</div>
                  <div className='flex justify-center items-center gap-2 mt-2'>
                    <div className='btn btn-secondary !py-1 text-center'>
                      <Link
                        key={list.productId}
                        href={`${origin}/${list.seName}.html?v=product-detail&altview=1`}
                        className='relative underline min-h-[48px]'
                      >
                        View
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
