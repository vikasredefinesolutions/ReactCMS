import Price from 'appComponents/reUsable/Price';
import CartSummaryController from 'Controllers/cartSummarryController';

const CartSummary = ({ title }: { title: string }) => {
  const {
    getTotalPrice,
    setCoupon,
    coupon,
    hidePromocode,
    couponCodeSubmit,
    useBalance,
  } = CartSummaryController();

  const {
    discount,
    totalPrice,
    subTotal,
    smallRunFee,
    logoSetupCharges,
    salesTax,
    creditBalance,
  } = getTotalPrice();

  return (
    <>
      <div className='border border-slate-400 bg-white'>
        <div className='bg-gray-200 w-full text-lg font-medium px-4 py-1'>
          {title || 'Order Summary'}
        </div>
        <div className='px-4 py-4'>
          <dl className='space-y-2'>
            <div className='text-lg'>Products Price</div>
            <div className='flex items-center justify-between pt-2'>
              <dt className='text-base'>Subtotal</dt>
              <dd className='text-base font-medium text-gray-900'>
                <Price value={subTotal} />
              </dd>
            </div>
            <div className='flex items-center justify-between pt-2'>
              <dt className='text-base'>Small Run Fee</dt>
              <dd className='text-base font-medium text-gray-900'>
                <Price value={smallRunFee} />
              </dd>
            </div>
            <div className='flex items-center justify-between pt-2'>
              <dt className='text-base'>Logo Setup Charges</dt>
              <dd className='text-base font-medium text-gray-900'>
                <Price value={logoSetupCharges} />
              </dd>
            </div>
            <div className='flex items-center justify-between border-t border-gray-200 pt-2'>
              <dt className='text-base'>Estimated Tax</dt>
              <dd className='text-base font-medium text-gray-900'>
                <Price value={salesTax} />
              </dd>
            </div>
            {!hidePromocode ? (
              <div className='border-t border-gray-200 flex items-center relative'>
                <dt className='text-base z-0 w-full promocode'>
                  <input
                    name='Promo_code'
                    id='Promo_code'
                    placeholder='Promo code'
                    onChange={(e: any) => setCoupon(e.target.value)}
                    value={coupon}
                    className='peer placeholder:opacity-0 block w-full bg-transparent pt-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 pr-10 relative z-10'
                  />
                  <label
                    htmlFor='Promo_code'
                    className='absolute duration-300 -top-3 -z-1 origin-0 text-base bg-white peer-focus:-top-3 peer-placeholder-shown:top-2'
                  >
                    Promo code
                  </label>
                </dt>
                {coupon && (
                  <button
                    onClick={() => couponCodeSubmit()}
                    className='coupon-code-Apply text-sm absolute right-0 top-2'
                  >
                    Apply
                  </button>
                )}
              </div>
            ) : (
              <div className='border-t border-gray-200 pt-2 flex items-center justify-between'>
                <dt className='flex items-center text-base'>
                  <span>Promo code - {coupon}</span>
                </dt>
                <dd className='text-base font-medium text-gray-900'>
                  {' - '}
                  <Price value={discount} />
                </dd>
              </div>
            )}
            <div className='border-t border-gray-200 pt-2 flex items-center justify-between'>
              <dt className='flex items-center text-base'>
                <span>Shipping</span>
              </dt>
              <dd className='text-base font-medium text-gray-900'>
                <Price value={0} />
              </dd>
            </div>
            {useBalance && (
              <div className='border-t border-gray-200 pt-2 flex items-center justify-between'>
                <dt className='flex items-center text-base'>
                  <span>Internal Credit</span>
                </dt>
                <dd className='text-base font-medium text-gray-900'>
                  {' - '}
                  <Price value={creditBalance} />
                </dd>
              </div>
            )}
          </dl>
        </div>
        <div className='flex justify-between items-center bg-gray-200 w-full text-lg font-medium px-4 py-1'>
          <div>Total:</div>
          <div>
            <Price value={totalPrice} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
