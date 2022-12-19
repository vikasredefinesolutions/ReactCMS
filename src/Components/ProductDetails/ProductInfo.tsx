import ForgotModal from 'appComponents/modals/ForgotModal';
import LoginModal from 'appComponents/modals/LoginModal';
import MsgContainer from 'appComponents/modals/MsgContainer';
import StartOrderModal from 'appComponents/modals/StartOrderModal';
import Price from 'appComponents/reusables/Price';
import AddToCart from 'appComponents/ui/AddToCartButton';
import { paths } from 'constants/paths.constant';
import { _ProductDetails } from 'definations/APIs/productDetail.res';
import { _modals } from 'definations/product.type';
import { useActions, useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React, { useState } from 'react';
import AskToLogin from './AskToLogin';
import AvailableColors from './AvailableColors';
import AvailableInventoryModal from './AvailableInventoryModal';
import ColorName from './ColorName';
import DiscountPrice from './DiscountPrice';
import DiscountPricing from './DiscountPricing';
import PersonalizationFontModal from './PersonalizationFontModal';
import QtyPriceTable from './PriceTable';
import ProducAvailableSizes from './ProductAvailableSizes';
import ProductColors from './ProductColors';
import ProductCompanion from './ProductCompanion';
import ProductDescription from './ProductDescription';
import ProductFeatures from './ProductFeatures';
import Inventory from './ProductInventory';
import MinimumQuantity from './ProductMinimumQuantity';
import ProductNote from './ProductNote';
import ProductPrice from './ProductPrice';
import ProductQuoteRequest from './ProductQuoteRequest';
import ProductRequestConsultation from './ProductRequestConsultation';
import ProductSKU from './ProductSKU';
import ProductStarReviews from './ProductStarReviews';
import SizeChartModal from './SizeChartModal';
import TopRatedProducts from './TopRatedProducts';

interface _Props {
  product: _ProductDetails;
}

const ProductInfo: React.FC<_Props> = ({ product }) => {
  const { setShowLoader } = useActions();
  const [openModal, setOpenModal] = useState<null | _modals>(null);
  const { layout: storeLayout } = useTypedSelector((state) => state.store);
  const { id: userId } = useTypedSelector((state) => state.user);

  const {
    price: pricePerItem,
    totalPrice,
    totalQty,
    minQtyCheck,
  } = useTypedSelector((state) => state.product.toCheckout);

  // const show = useTypedSelector((state) => state.store.display.footer);
  const router = useRouter();

  const modalHandler = (param: null | _modals) => {
    if (param) {
      setOpenModal(param);
      return;
    }
    setOpenModal(null);
  };

  const buyNowHandler = (isLoggedIn: boolean) => {
    if (isLoggedIn === false) {
      modalHandler('login');
      return;
    }

    if (isLoggedIn === true) {
      if (minQtyCheck === false) {
        modalHandler('requiredQty');
        return;
      }

      router.push(`${paths.CUSTOMIZE_LOGO}/${product.id}`);
      return;
    }
  };

  if (storeLayout === _Store.type1) {
    return (
      <div className="col-span-1 mt-4 md:mt-10 px-2 md:px-4 sm:px-0 sm:mt-16 lg:mt-0">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-semibold text-gray-900">
              {product.name}
            </h1>
            <ProductSKU skuID={product.sku} />
            <ProductPrice
              ourCost={product.ourCost}
              msrp={product.msrp}
              imap={product.imap}
              salePrice={product.salePrice}
            />
          </div>
          <ProductRequestConsultation />
        </div>

        <AvailableColors />

        {/* PRICING INFORMATION */}
        <>
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
          </div>
          <div>
            <DiscountPricing
              showPriceTable={true}
              price={{
                ourCost: product.ourCost,
                msrp: product.msrp,
                imap: product.imap,
                salePrice: product.salePrice,
              }}
            />
            {!product.isDiscontinue && (
              <AskToLogin modalHandler={modalHandler} />
            )}
          </div>
        </>

        {/* AVAILABLE INVENTORY */}
        <div className="m-3">
          <button
            type="button"
            className="text-indigo-500 text-sm font-semibold underline"
            onClick={() => modalHandler('availableInventory')}
          >
            Check Available Inventory
          </button>
        </div>

        {/* AVAILABLE SIZES */}
        <div className="m-3 flex flex-wrap text-gray-900 justify-between items-center">
          <ProducAvailableSizes />
          <div>
            <button
              type="button"
              className="text-indigo-500 text-sm font-semibold underline"
              onClick={() => modalHandler('sizeChart')}
            >
              Size Chart
            </button>
          </div>
        </div>

        <ProductCompanion
          link={product.companionProductLink}
          name={product.companionProductName}
          id={product.companionProductId}
          imageUrl={product.companionProductImage}
        />

        <ProductStarReviews />

        <ProductDescription
          text={product.description}
          heading={'Description'}
        />

        <form className="mt-6">
          <div className="mt-10 bg-gray-700">
            <button
              type="button"
              disabled={product.isDiscontinue}
              onClick={() => {
                setOpenModal('startOrder');
                setShowLoader(true);
              }}
              className="btn btn-xl btn-secondary !flex items-center justify-center w-full uppercase"
            >
              {product.isDiscontinue ? 'Discontinued' : 'START ORDER'}
            </button>
          </div>
          {product.isDiscontinue && (
            <TopRatedProducts
              title={'Top Rated Alternatives'}
              suggestedProducts={product.suggestedProducts}
            />
          )}
          <div className="mt-5 text-center">
            <button
              onClick={() => router.push(paths.REQUEST_CONSULTATION)}
              className="text-indigo-500 text-lg font-semibold underline"
            >
              Or request a free consultation with one of our experts
            </button>
          </div>
        </form>
        <ProductFeatures />
        <section aria-labelledby="details-heading" className="mt-12">
          <h2 id="details-heading" className="sr-only">
            Additional details
          </h2>
        </section>
        {openModal === 'sizeChart' && (
          <SizeChartModal modalHandler={modalHandler} />
        )}
        {openModal === 'availableInventory' && (
          <AvailableInventoryModal modalHandler={modalHandler} />
        )}
        {openModal === 'startOrder' && (
          <StartOrderModal modalHandler={modalHandler} product={product} />
        )}
        {openModal === 'login' && <LoginModal modalHandler={modalHandler} />}
        {openModal === 'forgot' && <ForgotModal modalHandler={modalHandler} />}
      </div>
    );
  }

  if (storeLayout === _Store.type3) {
    return (
      <div className="col-span-1">
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <ProductFeatures />
          <ProductPrice
            ourCost={product.ourCost}
            msrp={product.msrp}
            imap={product.imap}
            salePrice={product.salePrice}
          />
          <ProductSKU skuID={product.sku} />
        </div>
        <MinimumQuantity pricingLabel={'Discount Pricing'} />
        <QtyPriceTable />
        <ProductColors />
        <ColorName />
        <div className="mb-4 flex items-center justify-end gap-2">
          <button
            className="inline-block"
            onClick={() => modalHandler('sizeChart')}
          >
            <img src="images/size-chart.jpg" alt="" />
          </button>
          <button
            className="inline-block btn btn-sm !py-0.5 btn-outline-secondary"
            onClick={() => modalHandler('personalizationFonts')}
          >
            Personalizations Fonts
          </button>
        </div>
        <Inventory productId={product.id} />
        <div className="mb-4 text-rose-500 text-sm">
          PLEASE SIGN INTO YOUR ACCOUNT TO VIEW LIVE INVENTORY AND VOLUME
          DISCOUNTS
        </div>
        <div className="mb-4 bg-[#ececec] py-4 px-2">
          <DiscountPrice
            ourCost={product.ourCost}
            msrp={product.msrp}
            imap={product.imap}
            salePrice={product.salePrice}
          />
          <button
            type="button"
            disabled={product.isDiscontinue}
            className="btn btn-lg btn-secondary w-full"
            onClick={() => {
              buyNowHandler(!!userId);
            }}
          >
            {product.isDiscontinue
              ? 'Discontinued'
              : 'LOGIN TO SHOP NOW WITH LIVE INVENTORY'}
          </button>
        </div>

        <ProductNote
          note={`<strong>PLEASE NOTE:</strong> If you are ordering product that is
        backordered, your entire order will not ship until all items are
        available. Click the number in the Availability column above to see
        future inventory dates. Please reference the ship date shown in your
        cart.`}
        />

        {openModal === 'sizeChart' && (
          <SizeChartModal modalHandler={modalHandler} />
        )}
        {openModal === 'personalizationFonts' && (
          <PersonalizationFontModal onCancel={modalHandler} />
        )}
        {openModal === 'login' && <LoginModal modalHandler={modalHandler} />}
        {openModal === 'forgot' && <ForgotModal modalHandler={modalHandler} />}
        {openModal === 'requiredQty' && (
          <MsgContainer
            title="Required Size"
            message="Please select one size"
            modalHandler={modalHandler}
          />
        )}
      </div>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <div className="w-full lg:w-6/12 px-3">
        <div className="mb-1">
          <h1 className="text-[22px] font-black text-black">{product.name}</h1>
        </div>
        <div className="mb-2">
          <span
            className="font-bold text-sm tracking-widest bg-no-repeat"
            style={{
              backgroundImage: 'url(images/personalize-icon.png)',
              paddingLeft: '35px',
              paddingTop: '3px',
              paddingBottom: '8px',
              backgroundSize: '25px',
            }}
          >
            PERSONALIZE WITH YOUR LOGO
          </span>
        </div>
        <ProductFeatures />
        <div className="text-black mb-5 text-[16px] flex items-center">
          <span className="font-bold w-32">SKU </span>{' '}
          <span>{`: ${product.sku}`}</span>
        </div>
        <ProductPrice
          ourCost={product.ourCost}
          msrp={product.msrp}
          imap={product.imap}
          salePrice={product.salePrice}
        />
        <MinimumQuantity pricingLabel={''} />
        <AvailableColors />
        <Inventory productId={product.id} />
        <div className="mb-3">
          <button
            disabled={product.isDiscontinue}
            type="button"
            className="btn btn-lg btn-secondary w-full"
            onClick={() => setOpenModal('qouteRequest')}
          >
            {product.isDiscontinue
              ? 'Discontinued'
              : 'CLICK HERE TO SUBMIT A QUOTE REQUEST'}
          </button>
        </div>
        {product.isDiscontinue && (
          <TopRatedProducts
            title={'Top Rated Alternatives'}
            suggestedProducts={product.suggestedProducts}
          />
        )}
        {openModal === 'qouteRequest' && (
          <ProductQuoteRequest modalHandler={modalHandler} />
        )}
      </div>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <div className="col-span-1 mt-4 md:mt-10 sm:mt-16 lg:mt-0">
        <div className="mb-4 text-2xl border-b border-b-gray-200 pb-2">
          <h1 className="">{product.name}</h1>
        </div>
        {/* <ProductFeatures /> */}
        <ProductSKU skuID={product.sku} />
        <ProductPrice
          ourCost={product.ourCost}
          msrp={product.msrp}
          imap={product.imap}
          salePrice={product.salePrice}
        />
        <MinimumQuantity pricingLabel={''} />
        <DiscountPricing
          showPriceTable={true}
          price={{
            salePrice: product.salePrice,
            imap: product.imap,
            msrp: product.msrp,
            ourCost: product.ourCost,
          }}
        />
        <Inventory productId={product.id} />
        <ProductCompanion
          name={product.companionProductName}
          id={product.companionProductId}
          imageUrl={product.companionProductImage}
          link={product.companionProductLink}
        />
        <div className="bg-gray-100 p-4 flex flex-wrap items-end justify-between gap-2 text-sm mb-5">
          <div className="">
            <div className="mb-2">
              <span className="inline-block w-40">Quantity Selected:</span>
              <span className="font-semibold text-base">{totalQty} </span>
            </div>
            <div className="">
              <span className="inline-block w-40">Price Per Item:</span>
              <span className="font-semibold text-base">
                <Price value={pricePerItem} />
              </span>
            </div>
          </div>
          <div className="text-base">
            <span className="inline-block">Subtotal:</span>
            <span className="font-semibold text-xl lg:text-3xl">
              <Price value={totalPrice} />
            </span>
          </div>
        </div>
        <div className="">
          {userId ? (
            <AddToCart
              title="ADD TO CART"
              className="btn btn-lg btn-secondary w-full text-center !font-normal"
            />
          ) : (
            <button
              type="button"
              className="btn btn-lg btn-secondary w-full text-center !font-normal"
              disabled={product.isDiscontinue}
              data-modal-toggle="LoginModal"
            >
              {product.isDiscontinue
                ? 'Discontinued'
                : 'CHECK INVENTORY AND YOUR PRICING'}
            </button>
          )}
        </div>
      </div>
    );
  }

  return <></>;
};

export default ProductInfo;
