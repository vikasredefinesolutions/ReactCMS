import { GetlAllProductList } from '@type/productList.type';
import ImageComponent from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import { useActions } from 'hooks';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ListView = ({
  product,
  colorChangeHandler,
}: {
  product: GetlAllProductList;
  colorChangeHandler: (
    productid: number | undefined,
    seName: string | undefined,
    color: string | undefined | null,
  ) => void;
}) => {
  const { setShowLoader } = useActions();
  const [origin, setOrigin] = useState('');
  const [currentProduct, setCurrentProduct] = useState(
    product.getProductImageOptionList && product.getProductImageOptionList[0],
  );
  useEffect(() => {
    colorChangeHandler(
      product.id,
      product.sename || '',
      product.getProductImageOptionList &&
        product.getProductImageOptionList[0].colorName,
    );
    if (window !== undefined) {
      setOrigin(window.location.origin);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCurrentProduct(
      product.getProductImageOptionList && product.getProductImageOptionList[0],
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  return (
    <li className=''>
      <div className='w-full'>
        <div className='w-full'>
          <div className='relative border border-gray-200 flex flex-wrap'>
            <div className='bg-white overflow-hidden aspect-square max-w-xs border-r border-r-gray-200 text-center w-[400px]'>
              <Link
                href={`${origin}/${product.sename}.html?v=product-detail`}
                className='relative inline-flex items-center justify-center h-full'
              >
                <ImageComponent
                  height={400}
                  width={400}
                  src={
                    currentProduct?.imageName ? currentProduct.imageName : ''
                  }
                  alt={currentProduct?.alttag ? currentProduct?.alttag : ''}
                  className='max-h-full inline-block'
                />
              </Link>
              <div className='absolute left-2 top-2 h-8 flex gap-1'>
                <div className='h-8'>
                  <img
                    className='max-h-full inline-block'
                    src='images/Sale.png'
                    alt=''
                  />
                </div>
              </div>
              <div className='absolute top-2 right-2 text-gray-800 p-1 z-5'>
                <a className=''>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 44 44'
                    className='w-6 h-6'
                  >
                    <path
                      id='favorite_FILL0_wght400_GRAD0_opsz48'
                      d='M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z'
                      transform='translate(-2 -1.3)'
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className='ml-6 my-3'>
              <div className='text-sm'>
                <span className='w-2.5 h-2.5 bg-lime-500 inline-block rounded-full mr-1'></span>
                Available Online
              </div>
              <div className='mt-1'>
                <img
                  className='inline-block max-h-12'
                  src='images/peter-millar-1.png'
                  alt=''
                />
              </div>
              <div className='mt-1'>
                <a className='inline-flex items-center gap-1'>
                  <span>
                    <img
                      src='images/personalize-icon.png'
                      className='max-h-6'
                      alt=''
                    />
                  </span>
                  <span>Personalize</span>
                </a>
              </div>
              <div className='relative mt-1 text-anchor hover:text-anchor-hover'>
                <Link
                  href={`${product.sename}.html?v=product-detail`}
                  className='relative underline'
                >
                  {product.name}
                </Link>
              </div>
              <div className='mt-2 text-black text-base tracking-wider'>
                <span className='font-semibold'>
                  MSRP{' '}
                  <Price
                    value={undefined}
                    prices={{
                      msrp: product.msrp,
                      salePrice: product.salePrice,
                    }}
                  />
                </span>
              </div>
              <div className='form-group mt-2'>
                <label className='checkbox-inline'>
                  <input type='checkbox' /> Add to Compare
                </label>
              </div>
              <ul
                role='list'
                className='flex flex-wrap items-center mt-2 space-x-1 p-0'
              >
                {product.getProductImageOptionList &&
                  product.getProductImageOptionList.map((subRow, index) =>
                    index < 6 ? (
                      <li
                        className={`w-7 h-7 border-2${
                          subRow.id === currentProduct?.id
                            ? ' border-secondary'
                            : ''
                        }`}
                        onClick={() => {
                          colorChangeHandler(
                            product.id,
                            product.sename || '',
                            subRow.colorName,
                          );
                          setCurrentProduct(subRow);
                        }}
                      >
                        <ImageComponent
                          src={subRow.imageName ? subRow.imageName : ''}
                          className='max-h-full m-auto'
                          alt={subRow?.alttag ? subRow?.alttag : ''}
                        />
                      </li>
                    ) : null,
                  )}
              </ul>
              <div className='mt-3'>
                <a className='btn btn-primary'>CONTACT US</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListView;
