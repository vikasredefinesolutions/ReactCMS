import { GetlAllProductList } from '@type/productList.type';
import config from 'api.config';
import ImageComponent from 'appComponents/reusables/Image';
import Price from 'appComponents/reusables/Price';
import ProductBoxController from './ProductBox.controller';

const ProductLayout2 = ({
  product,
  skuList,
  colorChangeHandler,
  compareCheckBoxHandler,
}: {
  product: GetlAllProductList;
  skuList: string[];
  colorChangeHandler: (
    productid: number,
    seName: string,
    color: string,
  ) => void;
  compareCheckBoxHandler: (sku: number) => void;
}) => {
  const { currentProduct, origin, setCurrentProduct } = ProductBoxController({
    product,
    colorChangeHandler,
  });

  return (
    <li className="text-center relative border border-gray-100 hover:border-gray-300 hover:shadow-md pb-10">
      <div className="w-full overflow-hidden aspect-w-1 aspect-h-1">
        <ImageComponent
          src={currentProduct.imageName}
          alt=""
          className="w-auto h-auto m-auto max-h-[400px]"
          height={400}
          width={350}
          key={currentProduct.id}
        />
      </div>
      <div className="mt-6">
        <div className="hover:text-primary text-lg">
          <a href="product-page.html" className="relative">
            {product.name}
          </a>
        </div>
        <div className="mt-4 text-gray-900">
          <span className="font-bold">
            MSRP <Price value={product.salePrice} />
          </span>
        </div>
        <div className="form-group mt-4">
          <label className="checkbox-inline">
            <input type="checkbox" /> Add to Compare
          </label>
        </div>
        <ul role="list" className="flex items-center justify-center mt-4">
          {product.getProductImageOptionList.map((option) => (
            <li
              className={`w-8 h-8 text-center border-2${
                option.id === currentProduct.id ? ' border-secondary' : ''
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
                alt=""
                title=""
                className="max-h-full m-auto"
              />
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ProductLayout2;
