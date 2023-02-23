import ForgotModal from 'appComponents/modals/ForgotModal';
import LoginModal from 'appComponents/modals/LoginModal';
import MsgContainer from 'appComponents/modals/MsgContainer';
import StartOrderModal from 'appComponents/modals/StartOrderModal';
import Price from 'appComponents/reUsable/Price';
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
import DiscountPrice from './DiscountPrice';
import DiscountPricing from './DiscountPricing';
import PersonalizationFontModal from './PersonalizationFontModal';
import QtyPriceTable from './PriceTable';
import ProducAvailableSizes from './ProductAvailableSizes';
import ProductCompanion from './ProductCompanion';
import ProductDescription from './ProductDescription';
import ProductDiscountBanner from './ProductDiscountBanner';
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
  storeCode: string;
}

const ProductInfo: React.FC<_Props> = ({ product, storeCode }) => {
  const { showModal, setShowLoader, setOfflineProductSelected } = useActions();
  const [openModal, setOpenModal] = useState<null | _modals>(null);
  const { id: userId } = useTypedSelector((state) => state.user);
  const {
    price: pricePerItem,
    totalPrice,
    totalQty,
    minQty,
    sizeQtys,
  } = useTypedSelector((state) => state.product.toCheckout);
  const color = useTypedSelector((state) => state.product.selected.color);

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
      if (sizeQtys === null || sizeQtys[0]?.qty === 0) {
        modalHandler('requiredQty');
        return;
      }
      if (totalQty < minQty) {
        showModal({
          message: `Please enter quantity greater than or equal to ${minQty}.`,
          title: 'Required Quantity',
        });

        return;
      }

      router.push(`${paths.CUSTOMIZE_LOGO}/${product.id}`);
      return;
    }
  };

  const consultationURL = `${paths.REQUEST_CONSULTATION}?productid=${product.id}&title=Request%20Consultation%20%26%20Proof&Color=${color.name}`;

  if (
    storeCode === _Store.type1 ||
    storeCode === _Store.type15 ||
    storeCode === _Store.type16
  ) {
    return (
      <div className='col-span-1 mt-4 md:mt-10 px-2 md:px-4 sm:px-0 sm:mt-16 lg:mt-0'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-2/3'>
            <h1 className='text-3xl font-semibold text-gray-900'>
              {product.name}
            </h1>
            <ProductSKU skuID={product.sku} storeCode={storeCode} />
            <ProductPrice
              msrp={product.msrp}
              storeCode={storeCode}
              salePrice={product.salePrice}
            />
          </div>
          <ProductRequestConsultation storeCode={storeCode} />
        </div>

        <AvailableColors storeCode={storeCode} />

        {/* PRICING INFORMATION */}
        <>
          <div className='mt-3'>
            <h2 className='sr-only'>Product information</h2>
          </div>
          <div>
            <DiscountPricing
              storeCode={storeCode}
              showMsrpLine={true}
              price={{
                msrp: product.msrp,
                salePrice: product.salePrice,
              }}
            />
            {!product.isDiscontinue && (
              <AskToLogin modalHandler={modalHandler} />
            )}
          </div>
        </>

        {/* AVAILABLE INVENTORY */}
        <div className='m-3'>
          <button
            type='button'
            className='text-anchor hover:text-anchor-hover text-sm font-semibold underline'
            onClick={() => modalHandler('availableInventory')}
          >
            Check Available Inventory
          </button>
        </div>

        {/* AVAILABLE SIZES */}
        <div className='m-3 flex flex-wrap text-gray-900 justify-between items-center'>
          <ProducAvailableSizes />
          <div>
            <button
              type='button'
              className='text-anchor hover:text-anchor-hover text-sm font-semibold underline'
              onClick={() => modalHandler('sizeChart')}
            >
              Size Chart
            </button>
          </div>
        </div>

        <ProductCompanion
          name={product.companionProductName}
          storeCode={storeCode}
          seName={product.companionProductSEName}
          imageUrl={product.companionProductImage}
        />

        <ProductStarReviews />

        <ProductDescription
          storeCode={storeCode}
          text={product.description}
          heading={'Description'}
        />

        <form className='m-3'>
          <div className='bg-gray-700'>
            <button
              type='button'
              disabled={product.isDiscontinue}
              onClick={() => {
                setOpenModal('startOrder');
                setShowLoader(true);
              }}
              className='btn btn-xl btn-secondary !flex items-center justify-center w-full uppercase'
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
        </form>
        <div className='mt-5 text-center'>
          <button
            onClick={() => router.push(consultationURL)}
            className='text-indigo-500 text-lg font-semibold underline'
          >
            Or request a free consultation with one of our experts
          </button>
        </div>
        <ProductFeatures storeCode={storeCode} />
        <section aria-labelledby='details-heading' className='mt-12'>
          <h2 id='details-heading' className='sr-only'>
            Additional details
          </h2>
        </section>
        {openModal === 'sizeChart' && (
          <SizeChartModal storeCode={storeCode} modalHandler={modalHandler} />
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

  if (storeCode === _Store.type3) {
    return (
      <div className='col-span-1'>
        <div className='mb-4'>
          <h1 className='text-2xl font-bold mb-4'>{product.name}</h1>
          <ProductFeatures storeCode={storeCode} />
          <ProductSKU storeCode={storeCode} skuID={product.sku} />
          <ProductPrice
            storeCode={storeCode}
            msrp={product.msrp}
            salePrice={product.salePrice}
          />
        </div>
        <MinimumQuantity
          storeCode={storeCode}
          pricingLabel={'Discount Pricing'}
        />
        <QtyPriceTable storeCode={storeCode} />
        <AvailableColors storeCode={storeCode} />
        {/* <ColorName storeCode={storeCode} /> */}
        <div className='mb-4 flex items-center justify-end gap-2'>
          <button
            className='inline-block'
            onClick={() => modalHandler('sizeChart')}
          >
            <img src='images/size-chart.jpg' alt='' />
          </button>
          <button
            className='inline-block btn btn-sm !py-0.5 btn-outline-secondary'
            onClick={() => modalHandler('personalizationFonts')}
          >
            Personalizations Fonts
          </button>
        </div>
        <Inventory storeCode={storeCode} productId={product.id} />
        {!userId && (
          <div className='mb-4 text-rose-500 text-sm'>
            PLEASE SIGN INTO YOUR ACCOUNT TO VIEW LIVE INVENTORY AND VOLUME
            DISCOUNTS {userId}
          </div>
        )}
        <div className='mb-4 bg-[#ececec] py-4 px-2'>
          <DiscountPrice
            storeCode={storeCode}
            ourCost={product.ourCost}
            msrp={product.msrp}
            imap={product.imap}
            salePrice={pricePerItem}
          />
          <button
            type='button'
            disabled={product.isDiscontinue}
            className='btn btn-lg btn-secondary w-full'
            onClick={() => {
              buyNowHandler(!!userId);
            }}
          >
            {product.isDiscontinue
              ? 'Discontinued'
              : userId
              ? 'CUSTOMIZE NOW AND ADD TO CART'
              : 'LOGIN TO SHOP NOW WITH LIVE INVENTORY'}
          </button>
        </div>

        <ProductNote
          storeCode={storeCode}
          note={`<strong>PLEASE NOTE:</strong> If you are ordering product that is
        backordered, your entire order will not ship until all items are
        available. Click the number in the Availability column above to see
        future inventory dates. Please reference the ship date shown in your
        cart.`}
        />

        {openModal === 'sizeChart' && (
          <SizeChartModal storeCode={storeCode} modalHandler={modalHandler} />
        )}
        {openModal === 'personalizationFonts' && (
          <PersonalizationFontModal onCancel={modalHandler} />
        )}
        {openModal === 'login' && <LoginModal modalHandler={modalHandler} />}
        {openModal === 'forgot' && <ForgotModal modalHandler={modalHandler} />}
        {openModal === 'requiredQty' && (
          <MsgContainer
            title='Required Size'
            message='Please select one size'
            modalHandler={modalHandler}
          />
        )}
        {openModal === 'startOrder' && (
          <StartOrderModal modalHandler={modalHandler} product={product} />
        )}
      </div>
    );
  }

  if (storeCode === _Store.type2) {
    return (
      <div className='w-full lg:w-6/12 px-3'>
        <div className='mb-1'>
          <h1 className='text-[22px] font-black text-black'>{product.name}</h1>
        </div>
        <div className='mb-2'>
          <span
            className='font-bold text-sm tracking-widest bg-no-repeat'
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
        <ProductFeatures storeCode={storeCode} />
        <div className='text-black mb-5 text-[16px] flex items-center'>
          <span className='font-bold w-32'>SKU </span>{' '}
          <span>{`: ${product.sku}`}</span>
        </div>
        <ProductPrice
          storeCode={storeCode}
          msrp={product.msrp}
          salePrice={product.salePrice}
        />
        <MinimumQuantity storeCode={storeCode} pricingLabel={''} />
        <AvailableColors storeCode={storeCode} />
        <QtyPriceTable storeCode={storeCode} />
        {/* <Inventory storeCode={storeCode} productId={product.id} /> */}
        <ProductDiscountBanner storeCode={storeCode} />
        <div className='mb-3'>
          <button
            disabled={product.isDiscontinue}
            type='button'
            className='btn btn-lg btn-secondary w-full'
            onClick={() => {
              setShowLoader(true);
              setOpenModal('startOrder');
            }}
          >
            {product.isEnableLogolocation
              ? 'START PERSONALIZING'
              : 'ADD TO CART'}
          </button>
        </div>
        {/* <div className="mb-3">
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
        </div> */}
        {product.isDiscontinue && (
          <TopRatedProducts
            title={'Top Rated Alternatives'}
            suggestedProducts={product.suggestedProducts}
          />
        )}
        {openModal === 'qouteRequest' && (
          <ProductQuoteRequest
            storeCode={storeCode}
            modalHandler={modalHandler}
          />
        )}
        {openModal === 'startOrder' && (
          <StartOrderModal modalHandler={modalHandler} product={product} />
        )}
        {openModal === 'login' && <LoginModal modalHandler={modalHandler} />}
        {openModal === 'forgot' && <ForgotModal modalHandler={modalHandler} />}
      </div>
    );
  }

  if (storeCode === _Store.type4) {
    return (
      <div className='col-span-1 mt-4 md:mt-10 sm:mt-16 lg:mt-0'>
        <div className='mb-4 text-2xl border-b border-b-gray-200 pb-2'>
          <h1 className=''>{product.name}</h1>
        </div>
        {/* <ProductFeatures /> */}
        <ProductSKU storeCode={storeCode} skuID={product.sku} />
        <ProductPrice
          storeCode={storeCode}
          msrp={product.msrp}
          salePrice={product.salePrice}
        />
        <MinimumQuantity storeCode={storeCode} pricingLabel={''} />
        <DiscountPricing
          storeCode={storeCode}
          showMsrpLine={true}
          price={{
            msrp: product.msrp,
            salePrice: product.salePrice,
          }}
        />
        {product.isBrandOnline && (
          <Inventory storeCode={storeCode} productId={product.id} />
        )}
        <ProductCompanion
          storeCode={storeCode}
          name={product.companionProductName}
          seName={product.companionProductSEName}
          imageUrl={product.companionProductImage}
        />
        <div className='bg-gray-100 p-4 flex flex-wrap items-end justify-between gap-2 text-sm mb-5'>
          <div className=''>
            <div className='mb-2'>
              <span className='inline-block w-40'>Quantity Selected:</span>
              <span className='font-semibold text-base'>{totalQty} </span>
            </div>
            <div className=''>
              <span className='inline-block w-40'>Price Per Item:</span>
              <span className='font-semibold text-base'>
                <Price value={pricePerItem} />
              </span>
            </div>
          </div>
          <div className='text-base'>
            <span className='inline-block'>Subtotal:</span>
            <span className='font-semibold text-xl lg:text-3xl'>
              <Price value={totalPrice} />
            </span>
          </div>
        </div>
        <div className=''>
          {userId ? (
            product.isBrandOnline ? (
              <AddToCart
                title='ADD TO CART'
                className='btn btn-lg btn-secondary w-full text-center !font-normal'
              />
            ) : (
              <button
                className='btn btn-lg btn-secondary w-full'
                onClick={() => {
                  setOfflineProductSelected(product.name);
                  router.push(paths.Contact);
                }}
              >
                CONTACT US FOR AVAILABLE INVENTORY
              </button>
            )
          ) : (
            <button
              type='button'
              className='btn btn-lg btn-secondary w-full text-center !font-normal'
              disabled={product.isDiscontinue}
              data-modal-toggle='LoginModal'
              onClick={() => {
                buyNowHandler(!!userId);
              }}
            >
              {product.isDiscontinue
                ? 'Discontinued'
                : 'CHECK INVENTORY AND YOUR PRICING'}
            </button>
          )}
        </div>
        {openModal === 'login' && <LoginModal modalHandler={modalHandler} />}
      </div>
    );
  }

  return <></>;
};

export default ProductInfo;
