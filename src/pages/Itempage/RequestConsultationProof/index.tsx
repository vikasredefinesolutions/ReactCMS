import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import React, { useEffect } from 'react';
import RequestConsultationForm from 'Components/RequestConsultation/RequestConsultationForm';
import RequestFeatures from 'Components/RequestConsultation/RequestFeatures';
import { __domain } from 'page.config';
import { _SeName } from 'constants/store.constant';
import * as _AppController from 'Controllers/_AppController';
import { _StoreReturnType } from 'definations/store.type';
import Link from 'next/link';
import { paths } from 'constants/paths.constant';
import * as ConsultationController from 'Controllers/RequestConsultationController';
import {
  _ProductDetails,
  _ProductDoNotExist,
  _ProductDoNotExistTransformed,
} from 'definations/APIs/productDetail.res';
import { _ProductColor } from 'definations/APIs/colors.res';
import Image from 'appComponents/reusables/Image';
import { highLightError } from 'helpers/common.helper';
import { useRouter } from 'next/router';

interface _props {
  product: {
    doNotExist: _ProductDoNotExistTransformed | null;
    details: _ProductDetails | null;
    colors: _ProductColor[] | null;
  } | null;
}

const RequestConsultation: NextPage<_props> = ({ product }) => {
  const router = useRouter();

  if (product === null) return <>Product Page Loading... </>;

  if (product?.doNotExist) {
    return <></>;
  }

  if (product === null || product.details === null || product.colors === null) {
    router.push('/');
    return <></>;
  }

  useEffect(() => {
    if (product.doNotExist) {
      router.push(product.doNotExist.retrunUrlOrCategorySename || '/');
    }
  }, []);

  return (
    <section className="container mx-auto border border-gray-300 p-3">
      <div className="flex flex-wrap items-center -mx-3">
        <div className="w-full lg:w-4/12 px-3 text-center">
          <div className="">
            <Image
              src={product.colors[0].imageUrl}
              alt={product.details.name}
              className={''}
            />
          </div>
          <div className="text-lg md:text-xl lg:text-small-title font-small-title">
            <Link href={paths.PRODUCT}>{product.details.name}</Link>
          </div>
        </div>
        <RequestConsultationForm />
        <RequestFeatures />
      </div>
    </section>
  );
};

export default RequestConsultation;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let expectedProps: {
    store: null | _StoreReturnType;
    product: {
      details: _ProductDetails | _ProductDoNotExist | null;
      colors: _ProductColor[] | null;
      doNotExist: null | _ProductDoNotExistTransformed;
    } | null;
  } = {
    store: null,
    product: null,
  };
  try {
    const domain = __domain.layout || context.req.rawHeaders[1]!;
    const seName = _SeName.nike;
    // const pathNames = context.req.url?.split('/')!;
    // const seName =  pathNames ? pathNames[pathNames?.length - 1] : null;

    if (seName) {
      expectedProps.store = await _AppController.FetchStoreDetails(
        domain,
        seName!,
      );

      if (expectedProps.store) {
        expectedProps.product =
          await ConsultationController.FetchProductDetails({
            storeId: expectedProps.store.storeId!,
            seName: seName,
          });
      }
    }
  } catch (error) {
    highLightError({ error, component: `Request Consultation page` });
  }

  return {
    props: {
      product: expectedProps.product,
    },
  };
};
