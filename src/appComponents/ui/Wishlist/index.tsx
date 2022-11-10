import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTypedSelector } from 'hooks';
import {
  AddToWishlist,
  removeWishlist,
} from '../../../services/wishlist.service';
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
  const [wishlist, setWishlist] = useState(false);
  const customerId = useTypedSelector((state) => state.user.id);
  const wishlistHandler = async () => {
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

  return wishlist ? (
    <FavoriteIcon sx={{ color: 'orange' }} onClick={removeWishlistHandler} />
  ) : (
    <FavoriteBorderOutlinedIcon onClick={wishlistHandler} />
  );
};

export default Wishlist;
