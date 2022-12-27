import { _StoreReturnType } from '@type/store.type';
import Image from 'appComponents/reusables/Image';
import ProductAlike from 'Components/ProductDetails/ProductAlike';
import RequestConsultationForm from 'Components/RequestConsultation/RequestConsultationForm';
import RequestFeatures from 'Components/RequestConsultation/RequestFeatures';
import * as ConsultationController from 'Controllers/RequestConsultationController';
import { _ProductColor } from 'definations/APIs/colors.res';
import {
  _ProductDetails,
  _ProductsAlike,
  _ProductSEO,
} from 'definations/APIs/productDetail.res';
import { Redirect } from 'Guard/AuthGuard';
import { conditionalLogV2, __console } from 'helpers/global.console';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { _globalStore } from 'store.global';

const RequestConsultation: NextPage<_RequestConsultationProps> = ({
  details,
  color,
  alike,
  seo,
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

  if (details === null) {
    router.push('/');
    return <>Page do not exist... </>;
  }

  const HeadTag = (
    <Head>
      <title>{seo?.pageTitle || details.name}</title>
      <meta
        name="description"
        content={seo?.metaDescription || details.description}
        key="desc"
      />
      <meta name="keywords" content={seo?.metaKeywords || details.name} />
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
  );

  return (
    <section className="container mx-auto border border-gray-300 p-3">
      <>{HeadTag}</>
      <div className="flex flex-wrap items-center -mx-3">
        <div className="w-full lg:w-4/12 px-3 text-center">
          <div className="">
            <Image
              src={color?.imageUrl || null}
              alt={details.name}
              className={''}
            />
          </div>
          <div className="text-lg md:text-xl lg:text-small-title font-small-title">
            <button onClick={() => router.back()}>{details.name}</button>
          </div>
        </div>
        <RequestConsultationForm />
        <RequestFeatures />
      </div>
      <ProductAlike title={'YOU MAY ALSO LIKE'} products={alike} />
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
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// SERVER SIDE METHOD ------------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const getServerSideProps: GetServerSideProps = async (
  context,
): Promise<{ props: _RequestConsultationProps }> => {
  const responseBody = context.res;
  let expectedProps: _ExpectedRequestConsultationProps = {
    store: {
      storeId: null,
      layout: null,
      storeTypeId: null,
      pageType: '',
      pathName: '',
      code: '',
      isAttributeSaparateProduct: false,
      cartCharges: null,
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
          Redirect({
            res: responseBody,
            to: product.details?.productDoNotExist?.retrunUrlOrCategorySename,
          });
          return {
            props: {
              details: null,
              color: null,
              alike: null,
              seo: null,
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
    },
  };
};
