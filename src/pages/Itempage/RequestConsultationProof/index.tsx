import { paths } from '@constants/paths.constant';
import { _CartItem } from '@type/APIs/cart.res';
import { _StoreReturnType } from '@type/store.type';
import Image from 'appComponents/reUsable/Image';
import ProductAlike from 'Components/ProductDetails/ProductAlike';
import RequestConsultationForm from 'Components/RequestConsultation/RequestConsultationForm';
import RequestFeatures from 'Components/RequestConsultation/RequestFeatures';
import * as ConsultationController from 'Controllers/RequestConsultationController.async';
import { _ProductColor } from 'definations/APIs/colors.res';
import {
  _ProductDetails,
  _ProductsAlike,
  _ProductSEO,
} from 'definations/APIs/productDetail.res';
import { __console, conditionalLogV2 } from 'helpers/global.console';
import { useTypedSelector } from 'hooks';
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { _globalStore } from 'store.global';
import Ecom_RequestConsultation_OrderDetails from 'Templates/Ecommerce/RequestConsultation/Ecom_RequestConsultation_OrderDetails';

const RequestConsultation: NextPage<_RequestConsultationProps> = ({
  details,
  color,
  alike,
  seo,
  store,
}) => {
  conditionalLogV2({
    data: {
      details,
      color,
      alike,
      seo,
    },
    show: __console.requestConsultation.page,
    type: 'PAGE',
    name: 'Request Consultation - Props',
  });
  const router = useRouter();
  const [itemInCart, setItemInCart] = useState<null | _CartItem>(null);
  const cartItems = useTypedSelector((state) => state.cart.cart);

  const HeadTag = (
    <Head>
      <title>{seo?.pageTitle || details?.name || ''}</title>
      <meta
        name='description'
        content={seo?.metaDescription || details?.description || ''}
        key='desc'
      />
      <meta
        name='keywords'
        content={seo?.metaKeywords || details?.name || ''}
      />
      <link
        rel='stylesheet'
        type='text/css'
        charSet='UTF-8'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
    </Head>
  );

  useEffect(() => {
    const product = cartItems?.find(
      (item) => details && item.productId === details.id,
    );
    if (product) {
      setItemInCart(product);
    }
  }, [cartItems]);

  if (details === null) {
    router.push('/');
    return <>Page do not exist... </>;
  }

  return (
    <section className='container mx-auto'>
      <div className='text-center font-black text-5xl py-5'>
        Request Consultation & Proof
      </div>
      <div className='border border-gray-400 py-3'>
        <>{HeadTag}</>
        <div className='flex flex-wrap -mx-[15px]'>
          <div className='w-full lg:w-4/12 px-3 text-center'>
            <div className=''>
              <Image
                src={color?.imageUrl || null}
                alt={details.name}
                className={'w-full object-center object-cover sm:rounded-lg'}
              />
            </div>
            <div>
              <button
                className='text-black hover:text-black focus:text-black font-base font-bold'
                onClick={() => router.back()}
              >
                {details.name}
              </button>
            </div>
          </div>
          <RequestConsultationForm
            productId={details.id}
            innerHeading={false}
          />
          <div className='w-full lg:w-4/12 pl-0 pr-[15px]'>
            {itemInCart ? (
              <Ecom_RequestConsultation_OrderDetails item={itemInCart} />
            ) : (
              <RequestFeatures />
            )}
          </div>
        </div>
      </div>
      <ProductAlike
        title={'YOU MAY ALSO LIKE'}
        products={alike}
        storeCode={store.code}
      />
    </section>
  );
};

export default RequestConsultation;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// TYPES: JUST FOR  THIS PAGE ----------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

interface _ExpectedRequestConsultationProps {
  store: _StoreReturnType;
  product: null | {
    details: null | _ProductDetails;
    colors: null | _ProductColor[];
  };
  color: null | _ProductColor;
  alike: null | _ProductsAlike[];
  seo: null | _ProductSEO;
}

interface _RequestConsultationProps {
  details: null | _ProductDetails;
  color: null | _ProductColor;
  alike: null | _ProductsAlike[];
  seo: null | _ProductSEO;
  store: any;
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// SERVER SIDE METHOD ------------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const getServerSideProps: GetServerSideProps = async (
  context,
): Promise<GetServerSidePropsResult<_RequestConsultationProps>> => {
  let expectedProps: _ExpectedRequestConsultationProps = {
    store: {
      storeId: null,
      layout: null,
      storeTypeId: null,
      pageType: '',
      pathName: '',
      code: '',
      storeName: '',
      isAttributeSaparateProduct: false,
      cartCharges: null,
      urls: {
        favicon: '',
        logo: '',
      },
    },
    product: null,
    color: null,
    alike: null,
    seo: null,
  };

  try {
    const query: {
      productId: undefined | string | string[] | number;
      colorName: undefined | string | string[];
    } = {
      productId: context.query?.productid,
      colorName: context.query?.Color,
    };

    if (typeof query.productId === 'string') {
      query.productId = +query.productId; // to number;

      if (_globalStore.storeId) {
        expectedProps.store = {
          ...expectedProps.store,
          storeId: _globalStore.storeId,
          isAttributeSaparateProduct: _globalStore.isAttributeSaparateProduct,
          code: _globalStore.code,
        };
      }

      if (expectedProps.store) {
        const product = await ConsultationController.FetchProductDetails({
          storeId: expectedProps.store.storeId!,
          productId: query.productId,
          isAttributeSaparateProduct:
            expectedProps.store.isAttributeSaparateProduct,
        });
        if (product.details === null || product.details.id === null) {
          return {
            redirect: {
              destination:
                product.details?.productDoNotExist?.retrunUrlOrCategorySename ||
                paths.NOT_FOUND,
              permanent: true,
            },
          };
        }
        expectedProps.product = {
          details: product.details,
          colors: product.colors,
        };
        expectedProps.alike = product.alike;
        expectedProps.seo = product.seo;
        expectedProps.color =
          expectedProps.product?.colors?.find((color) => {
            return color.name === query.colorName;
          }) || null;
      }
    }

    conditionalLogV2({
      data: {
        store: expectedProps.store,
        details: expectedProps.product!.details,
        color: expectedProps.color,
        alike: expectedProps.alike,
      },
      show: __console.requestConsultation.serverMethod,
      type: 'SERVER_METHOD',
      name: 'Request Consultation: getServerSide sending Props',
    });
  } catch (error) {
    conditionalLogV2({
      data: error,
      show: __console.allCatch,
      type: 'CATCH',
      name: 'Request Consultation: getServerSideProps - Something went wrong',
    });
  }

  return {
    props: {
      details: expectedProps.product!.details,
      color: expectedProps.color,
      alike: expectedProps.alike,
      seo: expectedProps.seo,
      store: expectedProps.store,
    },
  };
};
