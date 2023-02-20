import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { _modals } from '@type/product.type';
import ForgotModal from 'appComponents/modals/ForgotModal';
import LoginModal from 'appComponents/modals/LoginModal';
import axios from 'axios';
import { useTypedSelector } from 'hooks';
import { useEffect, useState } from 'react';
import { AddToWishlist, removeWishlist } from 'services/wishlist.service';
const Wishlist = ({
  iswishlist,
  productId,
  price,
  color,
  name,
  wishlistId,
}: {
  iswishlist: boolean;
  productId: number;
  price: number;
  color: string;
  name: string;
  wishlistId: number;
}) => {
  const [showModal, setShowModal] = useState<null | string>(null);
  const [wishlist, setWishlist] = useState(false);
  const customerId = useTypedSelector((state) => state.user.id);
  const wishlistHandler = async () => {
    if (!customerId) {
      setShowModal('login');
      return;
    }
    const { data } = await axios.get(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.NEXT_PUBLIC_GEOLOCATIONAPIKEY}`,
    );
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

    AddToWishlist(requestObject);
    setWishlist(true);
  };

  const removeWishlistHandler = () => {
    if (wishlistId > 0) {
      removeWishlist(wishlistId);
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
