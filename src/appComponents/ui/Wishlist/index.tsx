import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTypedSelector } from 'hooks';
import { AddToWishlist, removeWishlist } from 'services/wishlist.service';
import LoginModal from 'appComponents/modals/LoginModal';
import ForgotModal from 'appComponents/modals/ForgotModal';
import { _modals } from '@type/product.type';
const Wishlist = ({
  iswishlist,
  productId,
  price,
  color,
  name,
  wishlistId = 0,
}: {
  iswishlist: boolean;
  productId: number;
  price: number;
  color: string;
  name: string;
  wishlistId?: number;
}) => {
  const [showModal, setShowModal] = useState<null | string>(null)
  const [wishlist, setWishlist] = useState(false);
  const customerId = null;
  const wishlistHandler = async () => {
    if (!customerId) {
      setShowModal('login');
      return;
    }
    const { data } = await axios.get('https://geolocation-db.com/json/');
    const requestObject = {
      storeproductWishListModel: {
        id: 0,
        rowVersion: '',
        location: `${data.city}, ${data.state}, ${data.country_name}, ${data.postal}`,
        ipAddress: data.IPv4,
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
  }, [iswishlist]);

  const modalHandler = (arg: _modals | null) => {
    setShowModal(arg);
  }

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
  )
};

export default Wishlist;
