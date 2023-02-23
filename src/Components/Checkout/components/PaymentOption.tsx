import { cardsArray, paymentMethod as paymentEnum } from '@constants/payment';
import HelpIcon from '@mui/icons-material/Help';
import { PaymentOptions } from '@type/APIs/cart.req';
import Price from 'appComponents/reUsable/Price';
import { ChangeEvent, useState } from 'react';
import { CreditCardDetailsType } from '../CheckoutController';

const CreditCardOption = ({
  setCardDetails,
  creditCardType,
  cardDetails,
  ccInputHandler,
}: any) => {
  const [showCVVHelpCard, setShowCVVHelpCard] = useState(false);
  return (
    <>
      <div className='relative z-0 w-full mb-6'>
        <input
          placeholder='Credit Card Number '
          className='form-input'
          maxLength={16}
          name={'cardNumber'}
          onChange={ccInputHandler}
        />
        <label className='sr-only'>Credit Card Number *</label>
        <div className='absolute top-2 right-2 flex items-center'>
          {cardsArray.map((card) => (
            <div
              key={card.name}
              className={`opacity-${
                card.name === creditCardType(cardDetails.cardNumber)
                  ? '100'
                  : '40'
              } ml-1 w-8`}
            >
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 gap-y-6'>
        <div className='w-3/12 px-3'>
          <div className='relative z-0 w-full'>
            <select
              onChange={ccInputHandler}
              name='cardExpirationMonth'
              className='form-input'
            >
              <option value=''>Month</option>
              {new Array(12).fill(null).map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            <label className='sr-only'>Month *</label>
          </div>
        </div>
        <div className='w-3/12 px-3'>
          <div className='relative z-0 w-full'>
            <select
              onChange={ccInputHandler}
              name='cardExpirationYear'
              className='form-input'
            >
              <option value=''>Year</option>
              <option value='2022'>2022</option>
              <option value='2023'>2023</option>
              <option value='2024'>2024</option>
              <option value='2025'>2025</option>
              <option value='2026'>2026</option>
              <option value='2027'>2027</option>
              <option value='2028'>2028</option>
              <option value='2029'>2029</option>
              <option value='2030'>2030</option>
              <option value='2031'>2031</option>
              <option value='2032'>2032</option>
              <option value='2033'>2033</option>
            </select>
            <label className='sr-only'>Year *</label>
          </div>
        </div>
        <div className='w-6/12 px-3'>
          <div className='relative z-0 w-full'>
            <input
              name='cardVarificationCode'
              placeholder='Security Code (CCV) '
              className='form-input'
              onChange={ccInputHandler}
            />
            <label className='sr-only'>Security Code (CCV) *</label>
            <div className='absolute top-2 right-2'>
              <div
                className='relative'
                onMouseEnter={() => setShowCVVHelpCard(true)}
                onMouseLeave={() => setShowCVVHelpCard(false)}
                x-data='{ open: false }'
              >
                <HelpIcon fontSize={'small'} className={'text-base'} />
                <div className='z-10 absolute bottom-full left-1/2 transform -translate-x-1/2'>
                  <div
                    className={`bg-slate-800 p-2 rounded overflow-hidden mb-2 ${
                      showCVVHelpCard
                        ? 'transition ease-out duration-200 transform'
                        : ''
                    }`}
                    style={{
                      display: showCVVHelpCard ? 'block' : 'none',
                    }}
                  >
                    <div className='text-xs text-gray-200 font-light whitespace-nowrap'>
                      The last three digits
                      <br />
                      displayed on the
                      <br />
                      back of your card
                      <br />
                      or first four
                      <br />
                      digits on the front
                      <br />
                      of your AMEX.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CreditWallet = ({
  checkHandler,
  allowedBalance,
}: {
  checkHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  allowedBalance: number;
}) => {
  return (
    <div className='mb-2'>
      <p>
        <input id={'useWallet'} onChange={checkHandler} type={'checkbox'} />{' '}
        <span>Use Wallet Balance</span> (
        <Price value={allowedBalance} />)
      </p>
    </div>
  );
};

const PaymentOption = ({
  setCardDetails,
  creditCardType,
  cardDetails,
  paymentOptions,
  checkHandler,
  allowedBalance,
  setPaymentMethod,
  paymentMethod,
  purchaseOrder,
  setPurchaseOrder,
  ccInputHandler,
}: {
  setCardDetails: (arg: CreditCardDetailsType) => void;
  checkHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  creditCardType: (cc: string) => string;
  setPurchaseOrder: (arg: string) => void;
  setPaymentMethod: any;
  paymentMethod: paymentEnum;
  cardDetails: CreditCardDetailsType;
  paymentOptions: PaymentOptions | null;
  allowedBalance: number;
  purchaseOrder: string;
  ccInputHandler: any;
}) => {
  return (
    <>
      <div>
        <div className='flex justify-between items-center my-3 pb-3 border-b border-gray-300'>
          <div className='text-xl'>Payment</div>

          <div>
            <button
              className='text-anchor'
              id='btn-use-purchase-order'
              onClick={() =>
                setPaymentMethod(
                  (prev: paymentEnum.creditCard | paymentEnum.purchaseOrder) =>
                    prev === paymentEnum.creditCard
                      ? paymentEnum.purchaseOrder
                      : paymentEnum.creditCard,
                )
              }
            >
              {paymentMethod === paymentEnum.creditCard
                ? 'Use Purchase Order'
                : 'Use Credit Card'}
            </button>
          </div>
        </div>
        {/* Credit Wallet */}
        {paymentOptions &&
          paymentOptions.findIndex(
            (res) => res.paymentOptionName === paymentEnum.creditWallet,
          ) > -1 && (
            <CreditWallet
              checkHandler={checkHandler}
              allowedBalance={allowedBalance}
            />
          )}
        {/* Card */}
        <div
          className={paymentMethod !== paymentEnum.creditCard ? 'hidden' : ''}
        >
          <CreditCardOption
            {...{
              setCardDetails,
              creditCardType,
              cardDetails,
              ccInputHandler,
            }}
          />
        </div>

        {/* Purchase Order */}
        <div
          className={
            paymentMethod !== paymentEnum.purchaseOrder ? 'hidden' : ''
          }
        >
          <div className='relative z-0 w-full mb-6'>
            <input
              name='EnterPONumber'
              placeholder='Enter PO Number '
              className='form-input'
              value={purchaseOrder}
              onChange={(e) => setPurchaseOrder(e.target.value)}
            />
            <label className='sr-only'>Enter PO Number *</label>
          </div>
          <div className='text-base'>
            Please enter your PO Number. We will contact you to confirm details
            of your payment.
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentOption;
