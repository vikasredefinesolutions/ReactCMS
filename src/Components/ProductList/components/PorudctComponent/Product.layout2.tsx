import { GetlAllProductList } from '@type/productList.type';
import config from 'api.config';
import ImageComponent from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { _Store } from 'page.config';
import ProductBoxController from './ProductBox.controller';

const ProductLayout2 = ({
  product,
  skuList,
  productView,
  colorChangeHandler,
  compareCheckBoxHandler,
}: {
  product: GetlAllProductList;
  skuList: string[];
  productView: string;
  colorChangeHandler: (
    productid: number,
    seName: string,
    color: string,
  ) => void;
  compareCheckBoxHandler: (sku: string) => void;
}) => {
  const { currentProduct, origin, setCurrentProduct } = ProductBoxController({
    product,
    colorChangeHandler,
  });

  const storeLayout = useTypedSelector((state) => state.store.layout);
  // let flag:boolean = product.getProductImageOptionList.length > 4 ? true : false;
  // let countImage:Number = product.getProductImageOptionList.length - 4;
  let flag: boolean = false;

  let countImage: Number;

  if (storeLayout === _Store.type22 || storeLayout === _Store.type10 || storeLayout === _Store.type8 || storeLayout === _Store.type24) {
    return productView === 'grid' ? (
      <li className='text-center relative border border-gray-100 hover:border-gray-300 hover:shadow-md pb-10'>
        <Link href={`${origin}/${product.sename}.html`} className='relative'>
          <div className='w-full overflow-hidden aspect-w-1 aspect-h-1 cursor-pointer'>
            <ImageComponent
              src={currentProduct.imageName}
              alt=''
              className='w-auto h-auto m-auto max-h-[400px]'
              height={400}
              width={350}
              key={currentProduct.id}
            />
          </div>
        </Link>
        <div className='mt-6'>
          <div className='hover:text-primary text-lg'>
            <Link
              href={`${origin}/${product.sename}.html`}
              className='relative'
            >
              {product.name}
            </Link>
          </div>
          <div className='mt-4 text-gray-900'>
            {storeLayout === _Store.type8 ? (
              <span className='text-primary'>
                <Price
                  value={undefined}
                  prices={{
                    msrp: product.msrp,
                    salePrice: product.salePrice,
                  }}
                />
              </span>
            ) : (
              <span className='font-bold'>
                <Price
                  value={undefined}
                  prices={{
                    msrp: product.msrp,
                    salePrice: product.salePrice,
                  }}
                />
              </span>
            )}
            <span className='font-bold hidden'>
              <Price
                value={undefined}
                prices={{
                  msrp: product.msrp,
                  salePrice: product.salePrice,
                }}
              />
            </span>
          </div>

          <ul role='list' className='flex items-center justify-center mt-4'>
            {product.getProductImageOptionList.map((option, index) =>
              index < 4 ? (
                <li
                  key={index}
                  className={`w-8 h-8 text-center border-2${
                    option.id === currentProduct.id ? ' border-primary' : ''
                  } hover:border-primary`}
                  onClick={() => {
                    colorChangeHandler(
                      product.id,
                      product.sename || '',
                      option.colorName,
                    );
                    setCurrentProduct(option);
                  }}
                >
                  <img
                    src={`${config.mediaBaseUrl}${option.imageName}`}
                    alt=''
                    title=''
                    className='max-h-full m-auto'
                  />

                </li>
              ) : (
                <>{(flag = true)}</>
              ),
            )}
            {flag ? (
              <li className='extra w-8 h-8 text-center border-2xtra'>
                <span> +</span>
                {product.getProductImageOptionList.length - 4}
              </li>
            ) : null}
          </ul>
          {(storeLayout === _Store.type10 || storeLayout === _Store.type24) && (
            <div className='gird-item-hover mt-3 mb-3'>
              <div className='flex justify-center mx-auto'>
                <Link
                  key={product.id}
                  href={`${origin}/${product.sename}.html`}
                >
                  <a className='btn-secondary flex justify-center p-3'>
                    <span className='material-icons text-sm'>local_mall</span>
                    <span className='ml-1'>ADD TO CART</span>
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </li>
    ) : (
      <li className='border border-gray-100 hover:border-gray-300 hover:shadow-md p-3 lg:p-6 mb-8'>
        <div className='relative flex flex-wrap -mx-3'>
          <Link
            key={product.id}
            href={`${origin}/${product.sename}.html?v=product-detail&altview=1`}
            className='relative'
          >
            <div className='md:w-1/4 px-3 cursor-pointer'>
              <ImageComponent
                src={currentProduct.imageName}
                alt=''
                className='w-auto h-auto max-h-max'
                height={400}
                width={350}
                key={currentProduct.id}
              />
            </div>
          </Link>
          <div className='md:w-3/4 px-3'>
            <div className='hover:text-primary text-lg'>
              <Link
                key={product.id}
                href={`${origin}/${product.sename}.html?v=product-detail&altview=1`}
                className='relative'
              >
                <a>{product.name}</a>
              </Link>
            </div>
            <div className='mt-4 text-gray-900'>
              <span className='font-bold'>
                <Price
                  value={undefined}
                  prices={{
                    msrp: product.msrp,
                    salePrice: product.salePrice,
                  }}
                />
              </span>
            </div>

            <ul role='list' className='flex items-center mt-4'>
              {product.getProductImageOptionList.map((option, index) => (
                <li
                  key={index}
                  className={`w-8 h-8 text-center border-2${
                    option.id === currentProduct.id ? ' border-primary' : ''
                  } hover:border-primary`}
                  onClick={() => {
                    colorChangeHandler(
                      product.id,
                      product.sename || '',
                      option.colorName,
                    );
                    setCurrentProduct(option);
                  }}
                >
                  <img
                    src={`${config.mediaBaseUrl}${option.imageName}`}
                    alt=''
                    title=''
                    className='max-h-full m-auto'
                  />
                </li>
              ))}
            </ul>
            {storeLayout === _Store.type10 && (
              <div className='gird-item-hover mt-3 mb-3'>
                <div className='flex justify-start'>
                  <Link
                    key={product.id}
                    href={`${origin}/${product.sename}.html?v=product-detail&altview=1`}
                  >
                    <a className='btn btn-secondary'>
                      <span className='material-icons text-sm'>local_mall</span>
                      <span className='ml-1'>ADD TO CART</span>
                    </a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </li>
    );
  }

  return productView === 'grid' ? (
    <li className='text-center relative border border-gray-100 hover:border-gray-300 hover:shadow-md pb-10'>
      <Link href={`${origin}/${product.sename}.html`} className='relative'>
        <div className='w-full overflow-hidden aspect-w-1 aspect-h-1 cursor-pointer'>
          <ImageComponent
            src={currentProduct.imageName}
            alt=''
            className='w-auto h-auto m-auto max-h-[400px]'
            height={400}
            width={350}
            key={currentProduct.id}
          />
        </div>
      </Link>
      <div className='mt-6'>
        <div className='hover:text-primary text-lg'>
          <Link href={`${origin}/${product.sename}.html`} className='relative'>
            {product.name}
          </Link>
        </div>
        <div className='mt-4 text-gray-900'>
          <span className='font-bold'>
            <Price
              value={undefined}
              prices={{
                msrp: product.msrp,
                salePrice: product.salePrice,
              }}
            />
          </span>
        </div>
        <div className='form-group mt-4'>
          <label className='checkbox-inline'>
            <input
              checked={skuList.includes(product.sku)}
              onChange={() => compareCheckBoxHandler(product.sku)}
              type='checkbox'
            />{' '}
            {
              <>
                {/* {skuList.length && skuList.includes(product.sku) ? (
                  <Link href={getCompareLink()}>
                    <a>Compare {skuList.length}</a>
                  </Link>
                ) : ( */}
                <>Add to Compare</>
                {/* )}  */}
              </>
            }
          </label>
        </div>
        <ul role='list' className='flex items-center justify-center mt-4'>
          {product.getProductImageOptionList.map((option, index) =>
            index < 4 ? (
              <li
                key={index}
                className={`w-8 h-8 text-center mr-1 border ${
                  option.id === currentProduct.id ? ' border-primary' : ''
                } hover:border-primary`}
                onClick={() => {
                  colorChangeHandler(
                    product.id,
                    product.sename || '',
                    option.colorName,
                  );
                  setCurrentProduct(option);
                }}
              >
                <img
                  src={`${config.mediaBaseUrl}${option.imageName}`}
                  alt=''
                  title=''
                  className='max-h-full m-auto'
                />
              </li>
            ) : (
              <>{(flag = true)}</>
            ),
          )}
          {flag ? (
            <li className='extra w-8 h-8 text-center border-2xtra'>
              <span> +</span>
              {product.getProductImageOptionList.length - 4}
            </li>
          ) : null}
        </ul>
      </div>
    </li>
  ) : (
    <li className='border border-gray-100 hover:border-gray-300 hover:shadow-md p-3 lg:p-6 mb-8'>
      <div className='relative flex flex-wrap -mx-3'>
        <Link
          key={product.id}
          href={`${origin}/${product.sename}.html?v=product-detail&altview=1`}
          className='relative'
        >
          <div className='md:w-1/4 px-3 cursor-pointer'>
            <ImageComponent
              src={currentProduct.imageName}
              alt=''
              className='w-auto h-auto max-h-max'
              height={400}
              width={350}
              key={currentProduct.id}
            />
          </div>
        </Link>
        <div className='md:w-3/4 px-3'>
          <div className='hover:text-primary text-lg'>
            <Link
              key={product.id}
              href={`${origin}/${product.sename}.html?v=product-detail&altview=1`}
              className='relative'
            >
              <a>{product.name}</a>
            </Link>
          </div>
          <div className='mt-4 text-gray-900'>
            <span className='font-bold'>
              <Price
                value={undefined}
                prices={{
                  msrp: product.msrp,
                  salePrice: product.salePrice,
                }}
              />
            </span>
          </div>
          <div className='form-group mt-4'>
            <label className='checkbox-inline'>
              <input
                checked={skuList.includes(product.sku)}
                onChange={() => compareCheckBoxHandler(product.sku)}
                type='checkbox'
              />{' '}
              {
                <>
                  {/* {skuList.length && skuList.includes(product.sku) ? (
                  <Link href={getCompareLink()}>
                    <a>Compare {skuList.length}</a>
                  </Link>
                ) : ( */}
                  <>Add to Compare</>
                  {/* )}  */}
                </>
              }
            </label>
          </div>
          <ul role="list" className="flex items-center mt-4">
            {product.getProductImageOptionList.map((option, index) => (
              <li
                key={index}
                className={`w-8 h-8 text-center border mr-1${
                  option.id === currentProduct.id ? ' border-primary' : ''
                } hover:border-primary`}
                onClick={() => {
                  colorChangeHandler(
                    product.id,
                    product.sename || '',
                    option.colorName,
                  );
                  setCurrentProduct(option);
                }}
              >
                <img
                  src={`${config.mediaBaseUrl}${option.imageName}`}
                  alt=''
                  title=''
                  className='max-h-full m-auto'
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default ProductLayout2;
