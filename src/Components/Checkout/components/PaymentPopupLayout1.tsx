/* eslint-disable no-unused-vars */
import { CardsArray } from '@constants/payment';
import HelpIcon from '@mui/icons-material/Help';
import { AddressType } from '../CheckoutController';

type propType = {
  setPurchaseOrder: (arg: boolean) => void;
  setCardDetails: (arg: string) => void;
  setShowCVVHelpCard: (arg: boolean) => void;
  setUseShippingAddress: (arg: boolean) => void;
  creditCardType: (arg: string) => string;
  showShippingScreen: boolean;
  purchaseOrder: boolean;
  cardArray: CardsArray;
  showCVVHelpCard: boolean;
  useShippingAddress: boolean;
  billingAdress: AddressType | undefined;
  cardDetails: string;
};

const PaymentPopupLayout = ({
  showShippingScreen,
  purchaseOrder,
  setPurchaseOrder,
  setCardDetails,
  cardArray,
  creditCardType,
  setShowCVVHelpCard,
  showCVVHelpCard,
  useShippingAddress,
  setUseShippingAddress,
  billingAdress,
  cardDetails,
}: propType) => {
  return (
    <>
      <div className='w-full lg:w-1/2 px-3 mt-3'>
        <div
          id='PaymentCard'
          style={{
            display: showShippingScreen && !purchaseOrder ? 'unset' : 'none',
          }}
        >
          <div className='flex justify-between items-center my-3 pb-3 border-b border-gray-300'>
            <div className='text-xl'>Payment</div>
            <div>
              <button
                className='text-anchor'
                id='btn-use-purchase-order'
                onClick={() => setPurchaseOrder(true)}
              >
                Use Purchase Order
              </button>
            </div>
          </div>
          <div className='relative z-0 w-full mb-6'>
            <input
              name='CreditCardNumber'
              placeholder='Credit Card Number '
              className='form-input'
              maxLength={16}
              onChange={(ev) => setCardDetails(ev.target.value)}
            />
            <label className='sr-only'>Credit Card Number *</label>
            <div className='absolute top-2 right-2 flex items-center'>
              {cardArray.map((card) => (
                <div
                  key={card.name}
                  className={`opacity-${
                    card.name === creditCardType(cardDetails) ? '100' : '40'
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
                <select name='Month' className='form-input'>
                  <option value=''>Month</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                  <option value='12'>12</option>
                </select>
                <label className='sr-only'>Month *</label>
              </div>
            </div>
            <div className='w-3/12 px-3'>
              <div className='relative z-0 w-full'>
                <select name='Year' className='form-input'>
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
                  name='SecurityCode'
                  placeholder='Security Code (CCV) '
                  className='form-input'
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
        </div>
        <div
          id='PurchaseOrder'
          style={{
            display: purchaseOrder && showShippingScreen ? 'unset' : 'none',
          }}
        >
          <div className='flex justify-between items-center my-3 pb-3 border-b border-gray-300'>
            <div className='text-xl'>Payment</div>
            <div>
              <button
                onClick={() => setPurchaseOrder(false)}
                className='text-anchor'
                id='btn-use-credit-card'
              >
                Use Credit Card
              </button>
            </div>
          </div>
          <div className='relative z-0 w-full mb-6'>
            <input
              name='EnterPONumber'
              placeholder='Enter PO Number '
              className='form-input'
            />
            <label className='sr-only'>Enter PO Number *</label>
          </div>
          <div className='text-base'>
            Please enter your PO Number. We will contact you to confirm details
            of your payment.
          </div>
        </div>
        <div
          id='BillingAddress'
          style={{ display: showShippingScreen ? 'unset' : 'none' }}
        >
          <div className='flex justify-between items-center my-3 pb-3 border-b border-gray-300 mt-8'>
            <div className='text-xl'>Billing Address</div>
            <div></div>
          </div>
          <div className='mb-3 font-semibold text-lg'>
            <div>
              <input
                type='checkbox'
                id='UseShippingAddress'
                name='UseShippingAddress'
                data-modal-toggle='billingaddressModal'
                checked={useShippingAddress}
                onChange={(e) => {
                  setUseShippingAddress(e.target.checked);
                }}
              />
              <label>Use Shipping Address</label>
            </div>
          </div>
          {showShippingScreen && billingAdress && (
            <div id='SelectedShippingAddress' className='text-base mb-3'>
              {billingAdress.firstname} {billingAdress.lastName}
              <br />
              {/* {billingAdress.companyName} */}
              <br />
              {billingAdress.address1}
              <br />
              {[
                billingAdress.city,
                billingAdress.state,
                billingAdress.postalCode,
              ].join(', ')}
              <br />
              {billingAdress.countryName}
              <br />
              {billingAdress.phone}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentPopupLayout;
