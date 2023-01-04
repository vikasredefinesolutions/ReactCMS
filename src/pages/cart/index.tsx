import { __seo_tags } from '@constants/seo.constant';
import SeoHead from 'appComponents/reUsable/SeoHead';
import { NextPage } from 'next';
import Redefine_ShoppingCart from 'Templates/Redefine_ShoppingCart';

const CartPage: NextPage = () => {
  return (
    <>
      <SeoHead {...__seo_tags.cartPage} />
      <Redefine_ShoppingCart />
    </>
  );
};

export default CartPage;
