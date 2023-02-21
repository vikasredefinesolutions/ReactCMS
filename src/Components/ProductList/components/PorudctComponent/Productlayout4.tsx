import config from 'api.config';
import {
  default as Image,
  default as ImageComponent,
} from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import { _modals } from 'definations/product.type';
import { GetlAllProductList } from 'definations/productList.type';
import { getCompareLink } from 'helpers/compare.helper';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ProductBoxController from './ProductBox.controller';

const Productlayout4 = ({
  product,
  skuList,
  colorChangeHandler,
  compareCheckBoxHandler,
}: {
  product: GetlAllProductList;
  skuList: string[];
  colorChangeHandler: (
    productid: number | undefined,
    seName: string | undefined,
    color: string | undefined | null,
  ) => void;
  compareCheckBoxHandler: (sku: string) => void;
}) => {
  const { currentProduct, origin, setCurrentProduct } = ProductBoxController({
    product,
    colorChangeHandler,
  });
  const [openModal, setOpenModal] = useState<null | _modals>(null);
  const storeCode = useTypedSelector((state) => state.store.layout);

  useEffect(() => {
    setCurrentProduct(
      product.getProductImageOptionList && product.getProductImageOptionList[0],
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  if (!currentProduct) {
    return <></>;
  }
  const modalHandler = (param: null | _modals) => {
    if (param) {
      setOpenModal(param);
      return;
    }
    setOpenModal(null);
  };

  return (
    <li className='text-center flex'>
      <div className='h-hull w-full'>
        <div className='flex text-center lg:w-auto h-full'>
          <div className='relative border border-gray-200 pb-4 w-full'>
            <Link
              key={product.id}
              href={`${origin}/${product.sename}.html?v=product-detail&altview=1`}
              className='relative underline min-h-[48px]'
            >
              <div className='w-full bg-white rounded-md overflow-hidden aspect-w-1 aspect-h-1 cursor-pointer'>
                <ImageComponent
                  src={currentProduct.imageName ? currentProduct.imageName : ''}
                  alt=''
                  className='w-auto h-auto m-auto max-h-[400px]'
                  height={400}
                  width={350}
                  cKey={currentProduct.id}
                />
                {product.productTagViewModel &&
                  product.productTagViewModel.map((ViewTag, index) => {
                    return (
                      <div className={`${ViewTag.tagPosition}`} key={index}>
                        <img
                          src={`${config.mediaBaseUrl}${ViewTag.imagename}`}
                          alt=''
                        />
                      </div>
                    );
                  })}
              </div>
            </Link>

            <div className='mt-6 px-3'>
              <div className='pb-2 text-sm'>
                <span className='w-2.5 h-2.5 bg-lime-500 inline-block rounded-full mr-1'></span>{' '}
                Available Online
              </div>
              {/* <div className='mt-4 mb-2 inline-block'>
                  <img
                    className='inline-block max-h-12'
                    src={`${config.mediaBaseUrl}/rdc${product.brandlogo.replace(
                      '/rdc',
                      '',
                    )}`}
                    alt={product.brandlogo}
                  />
                </div> */}
              <div className='relative mt-1 text-anchor cursor-pointer h-14 text-ellipsis overflow-hidden line-clamp-2'>
                <Link
                  key={product.id}
                  href={`${origin}/${product.sename}.html?v=product-detail&altview=1`}
                  className='relative inline-block h-10'
                >
                  <div>
                    <span className='absolute inset-0'></span>
                    {product.name}
                  </div>
                </Link>
              </div>
              <div className='mt-2 text-black text-base tracking-wider'>
                <p className='mt-4 text-[#415364]'>
                  <span className='font-bold'>
                    {' '}
                    MSRP{' '}
                    <Price
                      value={undefined}
                      prices={{
                        msrp: product.msrp,
                        salePrice: product.salePrice,
                      }}
                    />
                  </span>
                </p>
              </div>

              <div className='form-group mt-2'>
                <label className='checkbox-inline'>
                  <input
                    checked={skuList.includes(product?.sku ? product.sku : '')}
                    onChange={() =>
                      compareCheckBoxHandler(product?.sku ? product.sku : '')
                    }
                    type='checkbox'
                  />{' '}
                  {
                    <>
                      {skuList.length &&
                      skuList.includes(product?.sku ? product.sku : '') ? (
                        <Link href={getCompareLink()}>
                          <a>Compare {skuList.length}</a>
                        </Link>
                      ) : (
                        <>Add to Compare</>
                      )}
                    </>
                  }
                </label>
              </div>

              {product.getProductImageOptionList &&
                product.getProductImageOptionList.length && (
                  <ul
                    role='list'
                    className='flex items-center mt-2 justify-center space-x-1'
                  >
                    {product.getProductImageOptionList.map((subRow, index) =>
                      index < 6 ? (
                        <li
                          className={`w-8 h-8 border-2${
                            subRow.id === currentProduct.id
                              ? ' border-secondary'
                              : ' border-gray-300 hover:border-secondary'
                          }`}
                          key={subRow.id}
                          onClick={() => {
                            colorChangeHandler(
                              product.id,
                              product.sename || '',
                              subRow.colorName,
                            );
                            setCurrentProduct(subRow);
                          }}
                        >
                          <Image
                            src={`${config.mediaBaseUrl}${subRow.imageName}`}
                            alt=''
                            className='max-h-full m-auto'
                          />
                        </li>
                      ) : null,
                    )}
                  </ul>
                )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Productlayout4;
