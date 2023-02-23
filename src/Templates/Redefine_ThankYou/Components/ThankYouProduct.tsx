import { _MyAcc_OrderProductDetails } from '@type/APIs/user.res';
import Image from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import { paths } from 'constants/paths.constant';

import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React from 'react';
import ThankYouProductTable from './ThankYouProductTable';

interface _props {
  product: _MyAcc_OrderProductDetails;
}

const ThankYouProduct: React.FC<_props> = ({ product }) => {
  const router = useRouter();
  const storeLayout = useTypedSelector((state) => state.store.layout);

  const navigateTo = (seName: string | null) => {
    if (seName === null) {
      router.push(paths.HOME);
      return;
    }

    router.push(seName);
  };

  if (storeLayout === _Store.type2) {
    return (
      <li className='flex py-6 flex-wrap px-4'>
        <div className='w-full lg:w-4/12 px-3 mt-3'>
          <Link href={product.seName!}>
            <div>
              <Image
                src={product.colorImage}
                alt={product.productName}
                className='rounded-md object-center object-cover'
              />
            </div>
          </Link>
        </div>

        <div className='w-full lg:w-8/12 px-3 mt-3'>
          <div className='text-lg font-semibold'>
            <Link href={product.seName!}>
              <a className='text-black hover:text-anchor-hover'>
                {product.productName}
              </a>
            </Link>
          </div>
          <div className='w-full flex flex-wrap'>
            <div className='sm:w-2/3 mt-2'>
              <div className='flex justify-between'>
                <div className='text-base'>
                  <span className='font-semibold'>SKU :</span>
                  {product.sku}
                </div>
              </div>
              <div className='mt-1 flex'>
                <div className='text-base'>
                  <span className='font-semibold'>Color :</span>
                  {product.attributeOptionValue}
                </div>
              </div>
            </div>
            <div className='mt-2 sm:w-1/3'>
              <div className='bold text-lg text-right'>
                <span className=''>
                  Item Total: <Price value={product.totalPrice} />
                </span>
              </div>
            </div>

            <ThankYouProductTable product={product} />
            {/* <!-- <div className="flex justify-start items-center mb-3">
                              <div>
                                  <span className="material-icons text-[60px] mr-3">support_agent</span>
                              </div>
                              <div>
                                  <div className="text-lg font-semibold">Customize Later</div>
                                  <div className="text-base">A Gear Expert will contact you to discuss
                                      the
                                      customization of this product.</div>
                              </div>
                          </div> --> */}
          </div>
        </div>
      </li>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <li className='flex py-6 flex-wrap px-4'>
        <div className='w-full lg:w-4/12 px-3 mt-3'>
          <Link href={product.seName!}>
            <div>
              <Image
                src={product.colorImage}
                alt={product.productName}
                className='rounded-md object-center object-cover'
              />
            </div>
          </Link>
        </div>

        <div className='w-full lg:w-8/12 px-3 mt-3'>
          <div className='text-lg font-semibold'>
            <Link href={product.seName!}>
              <a className='text-black hover:text-blue-500'>
                {product.productName}
              </a>
            </Link>
          </div>
          <div className='w-full flex flex-wrap'>
            <div className='sm:w-2/3 mt-2'>
              <div className='flex justify-between'>
                <div className='text-base'>
                  <span className='font-semibold'>SKU :</span>
                  {product.sku}
                </div>
              </div>
              <div className='mt-1 flex'>
                <div className='text-base'>
                  <span className='font-semibold'>Color :</span>
                  {product.attributeOptionValue}
                </div>
              </div>
            </div>
            <div className='mt-2 sm:w-1/3'>
              <div className='bold text-lg text-right'>
                <span className=''>
                  Item Total: <Price value={product.totalPrice} />
                </span>
              </div>
            </div>

            <ThankYouProductTable product={product} />
            {/* <!-- <div className="flex justify-start items-center mb-3">
                                  <div>
                                      <span className="material-icons text-[60px] mr-3">support_agent</span>
                                  </div>
                                  <div>
                                      <div className="text-lg font-semibold">Customize Later</div>
                                      <div className="text-base">A Gear Expert will contact you to discuss
                                          the
                                          customization of this product.</div>
                                  </div>
                              </div> --> */}
          </div>
        </div>
      </li>
    );
  }

  if (_Store.type3 == storeLayout) {
    return (
      <>
        <li className='flex py-6 flex-wrap px-4'>
          <div className='w-full lg:w-4/12 px-3 mt-3'>
            <Link href={product.seName!}>
              <div>
                <Image
                  src={product.colorImage}
                  alt={product.productName}
                  className='rounded-md object-center object-cover'
                />
              </div>
            </Link>
          </div>

          <div className='w-full lg:w-8/12 px-3 mt-3'>
            <div className='text-lg font-semibold'>
              <Link href={product.seName!}>
                <a className='text-black hover:text-anchor-hover'>
                  {product.productName}
                </a>
              </Link>
            </div>
            <div className='w-full flex flex-wrap'>
              <div className='sm:w-2/3 mt-2'>
                <div className='flex justify-between'>
                  <div className='text-base'>
                    <span className='font-semibold'>SKU :</span>
                    {product.sku}
                  </div>
                </div>
                <div className='mt-1 flex'>
                  <div className='text-base'>
                    <span className='font-semibold'>Color :</span>
                    {product.attributeOptionValue}
                  </div>
                </div>
              </div>
              <div className='mt-2 sm:w-1/3'>
                <div className='bold text-lg text-right'>
                  <span className=''>
                    Item Total: <Price value={product.totalPrice} />
                  </span>
                </div>
              </div>

              <ThankYouProductTable product={product} />
              {/* <!-- <div className="flex justify-start items-center mb-3">
                          <div>
                              <span className="material-icons text-[60px] mr-3">support_agent</span>
                          </div>
                          <div>
                              <div className="text-lg font-semibold">Customize Later</div>
                              <div className="text-base">A Gear Expert will contact you to discuss
                                  the
                                  customization of this product.</div>
                          </div>
                      </div> --> */}
            </div>
          </div>
        </li>
      </>
    );
  }

  return (
    <li className='flex py-6 flex-wrap px-4'>
      <div className='w-full lg:w-4/12 px-3 mt-3'>
        <Link href={product?.seName!}>
          <div>
            <Image
              src={product.colorImage}
              alt={product.productName}
              className='rounded-md object-center object-cover'
            />
          </div>
        </Link>
      </div>

      <div className='w-full lg:w-8/12 px-3 mt-3'>
        <div className='text-lg font-semibold'>
          <Link href={product.seName!}>
            <a className='text-black hover:text-anchor-hover'>
              {product.productName}
            </a>
          </Link>
        </div>
        <div className='w-full flex flex-wrap'>
          <div className='sm:w-2/3 mt-2'>
            <div className='flex justify-between'>
              <div className='text-base'>
                <span className='font-semibold'>SKU :</span>
                {product.sku}
              </div>
            </div>
            <div className='mt-1 flex'>
              <div className='text-base'>
                <span className='font-semibold'>Color :</span>
                {product.attributeOptionValue}
              </div>
            </div>
          </div>
          <div className='mt-2 sm:w-1/3'>
            <div className='bold text-lg text-right'>
              <span className=''>
                Item Total: <Price value={product.totalPrice} />
              </span>
            </div>
          </div>

          <ThankYouProductTable product={product} />
          {/* <!-- <div className="flex justify-start items-center mb-3">
                                  <div>
                                      <span className="material-icons text-[60px] mr-3">support_agent</span>
                                  </div>
                                  <div>
                                      <div className="text-lg font-semibold">Customize Later</div>
                                      <div className="text-base">A Gear Expert will contact you to discuss
                                          the
                                          customization of this product.</div>
                                  </div>
                              </div> --> */}
        </div>
      </div>
    </li>
  );
};

export default ThankYouProduct;
