import { _ExpectedRequestConsultationProps } from '@type/product.type';
import Image from 'appComponents/reusables/Image';
import RequestConsultationForm from 'Components/RequestConsultation/RequestConsultationForm';
import RequestFeatures from 'Components/RequestConsultation/RequestFeatures';
import { paths } from 'constants/paths.constant';
import * as ConsultationController from 'Controllers/RequestConsultationController';
import * as _AppController from 'Controllers/_AppController';
import { _ProductColor } from 'definations/APIs/colors.res';
import {
  _ProductDetails,
  _ProductDoNotExistTransformed,
} from 'definations/APIs/productDetail.res';
import { highLightError } from 'helpers/common.helper';
import { conditionalLog } from 'helpers/global.console';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { __domain } from 'page.config';
import { useEffect } from 'react';
import { _showConsoles, __fileNames } from 'show.config';

interface _props {
  product: {
    doNotExist: _ProductDoNotExistTransformed | null;
    details: _ProductDetails | null;
  } | null;

  color: _ProductColor | null;
}

const RequestConsultation: NextPage<_props> = ({ product, color }) => {
  const router = useRouter();

  if (product === null) return <>Product Page Loading... </>;

  if (product === null || product.details === null || color === null) {
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
              src={color?.imageUrl || null}
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
  let expectedProps: _ExpectedRequestConsultationProps = {
    store: null,
    product: null,
    color: null,
  };

  try {
    const domain = __domain.domain || context.req.rawHeaders[1]!;
    const query: {
      productId: undefined | string | string[] | number;
      colorName: undefined | string | string[];
    } = {
      productId: context.query?.productid,
      colorName: context.query?.Color,
    };

    if (typeof query.productId === 'string') {
      query.productId = +query.productId; // to number;

      expectedProps.store = await _AppController.FetchStoreDetails(domain, '');

      if (expectedProps.store) {
        expectedProps.product =
          await ConsultationController.FetchProductDetails({
            storeId: expectedProps.store.storeId!,
            productId: query.productId,
            isAttributeSaparateProduct:
              expectedProps.store.isAttributeSaparateProduct,
          });
        expectedProps.color =
          expectedProps.product?.colors?.find((color) => {
            return color.name === query.colorName;
          }) || null;
      }
    }

    // const pathNames = context.req.url?.split('/')!;
    // const seName =  pathNames ? pathNames[pathNames?.length - 1] : null;
  } catch (error) {
    highLightError({ error, component: `Request Consultation page` });
  }

  conditionalLog({
    show: _showConsoles.requestConsultation,
    data: expectedProps,
    type: 'NEXTJS PROPS',
    name: __fileNames.requestConsultation,
  });

  return {
    props: {
      product: expectedProps.product,
      color: expectedProps.color,
    },
  };
};
