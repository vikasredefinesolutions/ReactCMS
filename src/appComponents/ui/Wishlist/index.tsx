import { __Cookie } from '@constants/global.constant';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { ClearBrandCache } from '@services/cache.service';
import { _modals } from '@type/product.type';
import ForgotModal from 'appComponents/modals/ForgotModal';
import LoginModal from 'appComponents/modals/LoginModal';
import { extractCookies } from 'helpers/common.helper';
import getLocation from 'helpers/getLocation';
import { useActions, useTypedSelector } from 'hooks';
import { useEffect, useState } from 'react';
import {
  AddToWishlist,
  getWishlist,
  removeWishlist,
} from 'services/wishlist.service';
const Wishlist = ({
  brandId,
  iswishlist,
  productId,
  price,
  color,
  name,
  wishlistId,
}: {
  brandId: number | null;
  iswishlist: boolean;
  productId: number;
  price: number;
  color: string;
  name: string;
  wishlistId: number;
}) => {
  const { updateWishListData, removeWishListById } = useActions();
  const [showModal, setShowModal] = useState<null | string>(null);
  const [wishlist, setWishlist] = useState(false);
  const customerId = useTypedSelector((state) => state.user.id);
  const storeId = useTypedSelector((state) => state.store.id);

  const wishlistHandler = async () => {
    if (!customerId) {
      setShowModal('login');
      return;
    }
    const tempCustomerId = extractCookies(
      __Cookie.tempCustomerId,
      'browserCookie',
    ).tempCustomerId;

    const data = await getLocation();
    const requestObject = {
      storeproductWishListModel: {
        id: 0,
        rowVersion: '',
        location: `${data?.city}, ${data?.region}, ${data?.country}, ${data?.postal_code}`,
        ipAddress: data.ip_address,
        macAddress: '00-00-00-00-00-00',
        customerId: customerId || 0,
        productId: productId,
        quantity: 1,
        name: name,
        color: color,
        price: price,
        recStatus: 'A',
      },
    };

    await AddToWishlist(requestObject);

    if (storeId) {
      (async () => {
        if (brandId) {
          await ClearBrandCache({ storeid: storeId, brandid: +brandId });
        }
        // if (category_id) {
        //   await ClearCategoryCache({
        //     storeid: storeId,
        //     categoryid: +category_id,
        //   });
        // }
      })();
    }

    if (customerId || tempCustomerId) {
      getWishlist(customerId || ~~(tempCustomerId || 0)).then((res) => {
        updateWishListData(res);
      });
    }
    setWishlist(true);
  };

  const removeWishlistHandler = async () => {
    if (wishlistId > 0) {
      await removeWishlist(wishlistId);
      removeWishListById({ id: wishlistId });
      setWishlist(false);
    }
  };

  useEffect(() => {
    setWishlist(iswishlist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iswishlist]);

  const modalHandler = (arg: _modals | null) => {
    setShowModal(arg);
  };

  const wishlistHtml = wishlist ? (
    <FavoriteIcon sx={{ color: 'orange' }} onClick={removeWishlistHandler} />
  ) : (
    <FavoriteBorderOutlinedIcon onClick={wishlistHandler} />
  );

  return (
    <>
      {showModal === 'login' && <LoginModal modalHandler={modalHandler} />}
      {showModal === 'forgot' && <ForgotModal modalHandler={modalHandler} />}
      {wishlistHtml}
    </>
  );
};

export default Wishlist;
