import Image from 'appComponents/reusables/Image';
import { WishlistType } from 'definations/wishlist.type';
import { useTypedSelector } from 'hooks';
import { useEffect, useState } from 'react';
import { getWishlist, removeWishlist } from 'services/wishlist.service';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistType>([]);
  const customerId = useTypedSelector((state) => state.user.id);
  useEffect(() => {
    getWishlist(customerId || 0).then((wishlist) => setWishlist(wishlist));
    // setWishlist(wishlist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeWishlistHandler = (id: number) => {
    removeWishlist(id);
  };

  return (
    <section className="container mx-auto pt-20">
      <div className="pb-10 text-center">
        <div className="text-title mb-2">Wishlist</div>
      </div>
      <div className="relative">
        <ul role="list" className="flex flex-wrap -mx-3 gap-y-6">
          {wishlist.map((list, index) => (
            <li key={index} className="w-full md:w-1/2 lg:w-1/4 px-3">
              <div className="group relative border border-gray-300 p-3 text-center">
                <div className="w-full">
                  <Image src={list.colorLogoUrl} className="" alt="wishlist" />
                </div>
                <div className="mt-4">
                  <h3 className="">
                    <a href="product-page.html" className="text-anchor">
                      {list.productName}
                    </a>
                  </h3>
                  <div className="text-default-text mt-2">${list.price}</div>
                  <div className="flex justify-center items-center gap-2 mt-2">
                    <div className="">
                      <a
                        href="product-page.html"
                        title=""
                        className="btn btn-secondary !py-1 text-center"
                      >
                        View
                      </a>
                    </div>
                    <div className="">
                      <button
                        title="Remove"
                        className="btn btn-primary !py-1 text-center"
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
