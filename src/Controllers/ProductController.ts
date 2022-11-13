import { useEffect, useState } from 'react';
import { _ProductDetailsTransformed } from 'definations/APIs/productDetail.res';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import { paths } from 'constants/paths.constant';
import { _AllColors, _Reviews } from 'definations/product.type';
import { useActions, useTypedSelector } from 'hooks';
import { store } from 'redux/store.redux';
import {
  FetchColors,
  FetchProductById,
  FetchReviewsById,
} from 'services/product.service';
import * as ProductServices from 'services/product.service';
import { _ProductColor } from 'definations/APIs/colors.res';

const ProductController = () => {
  // const [params] = useSearchParams();
  //const router = useRouter();
  const { setColor, storeAllColors, storeDetails } = useActions();
  // States -----------------------------------
  const [product, setProduct] = useState<null | _ProductDetailsTransformed>(
    null,
  );
  const [reviews] = useState<null | _Reviews>(null);
  const show = useTypedSelector((state) => state.store.display.page.product);
  const { layout: storeLayout } = useTypedSelector((state) => state.store);

  // Variables --------------------------------
  const queries = {
    // category: params.get('cat'),
    // seName: params.get('seName'),

    productId: 297,
    // colorId: params.get('_cl'),
  };

  // Functions ----------------------------------

  const fetchProductById = (id: number) => {
    id;
    FetchProductById({
      seName: 'Nike-Men-s-Club-Fleece-Sleeve-Swoosh-Pullover-Hoodie',
      storeId: id,
    })
      .then((res) => {
        setProduct(res);
        storeDetails({
          brand: {
            id: res.brandID,
            name: res.brandName,
            url: res.brandImage,
          },
          product: {
            id: res.id || null,
            name: res.name || null,
            price:
              {
                msrp: res.msrp,
                ourCost: res.ourCost,
                salePrice: res.salePrice,
              } || null,
          },
        });
        return res.id;
      })
      .then((id) => fetchColorsById(id))
      .then((id) => fetchProductReviews(id));
    // .catch((err) => console.log('err', err))
    // .finally(() => console.log('close loader'));
  };

  const fetchColorsById = (id: number): Promise<number> => {
    return FetchColors({ productId: id }).then((res) => {
      setProduct((pro) => {
        if (pro?.id) {
          return {
            ...pro,
            colors: res,
          };
        }
        return null;
      });
      setColor(res[0]);

      const colors = res.map((color) => ({
        id: color.attributeOptionId,
        label: color.name,
        url: color.imageUrl,
        alt: color.altTag,
      }));

      storeAllColors(colors);
      return id;
    });
  };

  const fetchProductReviews = (id: number) => {
    FetchReviewsById(id);
    // .then((res) => setReviews(res))
    // .catch((err) => console.log('err', err))
    // .finally(() => console.log('close loader'));
  };

  // const navigateAccordingly = () => {
  //   if (!queries.productId && queries.category) {
  //     router.push(paths.PRODUCT_LISTING, { replace: true });
  //     return;
  //   }
  //   if (!queries.productId && !queries.category) {
  //     router.push(paths.HOME, { replace: true });
  //     return;
  //   }
  //   if (!queries.category || !queries.colorId)
  //     // Need to call when we have to update category and color
  //     router.push(
  //       `${paths.PRODUCT}?cat=${queries.category || ''}&_pid=${
  //         queries.productId || ''
  //       }&_cl=${queries.colorId || ''}`,
  //     );
  // };

  // UseEffects --------------------------------------

  // useEffect(() => {
  //   navigateAccordingly();
  //   router.push(
  //     `${paths.PRODUCT}?cat=${queries.category || ''}&_pid=${
  //       queries.productId || ''
  //     }&_cl=${queries.colorId || ''}`,
  //   );
  // }, []);

  useEffect(() => {
    // if (!'show for test') {
    //   // if (!queries.productId) {

    //   router.push(paths.HOME, { replace: true });
    //   return;
    // }
    fetchProductById(4);
  }, [queries.productId]);

  return { product, reviews, show, storeLayout };
};

export default ProductController;

// SERVER SIDE FUNCTIONS ---------------------------------------------

export const FetchProductDetails = async (
  storeId: number,
  seName: string,
): Promise<{
  details: null | _ProductDetailsTransformed;
  colors: null | _AllColors[];
}> => {
  console.log('store,sot', storeId, seName);
  let productColors: null | _AllColors[] = null;
  let productDetails: null | _ProductDetailsTransformed = null;

  await FetchProductById({
    seName: seName,
    storeId: storeId,
  })
    .then((res) => {
      productDetails = { ...res };
      // console.log('res', res);
      return res.id;
    })
    .then((productID) => fetchColorsById(productID))
    .then((colors) => {
      productColors = [...colors.allColors];
      return colors.id;
    });
  // .then((id) => fetchProductReviews(id));
  // .catch((err) => console.log('err', err))
  // .finally(() => console.log('close loader'));

  return {
    details: productDetails,
    colors: productColors,
  };
};

const fetchColorsById = async (
  id: number,
): Promise<{
  allColors: _AllColors[];
  id: number;
}> => {
  return await ProductServices.FetchColors({ productId: id }).then((res) => {
    const colors = res.map((color: _ProductColor) => ({
      id: color.attributeOptionId,
      label: color.name,
      url: color.imageUrl,
      alt: color.altTag,
    }));

    return { allColors: colors, id };
  });
};

const fetchProductReviews = (id: number) => {
  FetchReviewsById(id);
  // .then((res) => setReviews(res))
  // .catch((err) => console.log('err', err))
  // .finally(() => console.log('close loader'));
};
