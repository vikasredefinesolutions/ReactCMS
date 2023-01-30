import MsgContainer from 'appComponents/modals/MsgContainer';
import Image from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import Link from 'next/link';
import React, { useState } from 'react';
import { _InCart_GiftCard_model } from 'redux/slices/_slices';

const SC_GiftCartItem: React.FC<_InCart_GiftCard_model> = (gift) => {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const removeItemHandler = ({ giftId }: { giftId: number }) => {
    // API to be called.
  };

  const toggleConfirmationMsg = (action: 'ALERT' | 'HIDE' | 'CONFIRM') => {
    if (action === 'ALERT') {
      setShowAlert(true);
    }

    if (action === 'HIDE') {
      setShowAlert(false);
    }

    if (action === 'CONFIRM') {
      removeItemHandler({
        giftId: 32,
      });
      setShowAlert(false);
    }
  };

  return (
    <li className='flex flex-wrap py-5'>
      <div className='lg:flex-shrink-0 flex max-w-sm'>
        <Link href={gift.seName}>
          <Image src={gift.giftImageURL} alt={gift.name} className='' />
        </Link>
      </div>

      <div className='lg:ml-4 sm:ml-0 flex-1 flex flex-wrap lg:justify-between '>
        <div className='text-lg font-semibold'>
          <Link
            href={gift.seName}
            className='text-black hover:text-anchor-hover'
          >
            {gift.name}
          </Link>
        </div>
        <div className='w-full flex flex-wrap'>
          <div className='lg:w-2/3 w-full mt-2'>
            <div className='flex justify-between'>
              <div className='text-base'>
                <span className='font-semibold'>Name :</span>{' '}
                {gift.recipient.name}
              </div>
            </div>
            <div className='mt-1 flex'>
              <div className='text-base'>
                <span className='font-semibold'>Email :</span>{' '}
                {gift.recipient.email}
              </div>
            </div>
            <div className='mt-1 flex'>
              <div className='text-base'>
                <span className='font-semibold'>Message :</span>{' '}
                {gift.messageForRecipient}
              </div>
            </div>
            <div className='mt-1 flex'>
              <div className='text-base'>
                <span className='font-semibold'>QTY :</span> {gift.itemTotalQty}
              </div>
            </div>
          </div>
          <div className='mt-2 lg:w-1/3 w-full'>
            <div className='bold text-xl text-right'>
              <span className=''>
                Item Total: <Price value={gift.itemTotalPrice} />
              </span>
            </div>
            <div className='mt-3 lg:ml-10'>
              <button
                onClick={() => toggleConfirmationMsg('ALERT')}
                className='btn btn-primary !w-full !py-1 text-center'
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      </div>
      {showAlert ? (
        <MsgContainer
          modalHandler={() => toggleConfirmationMsg('HIDE')}
          message={gift.name}
          confirmButton={() => toggleConfirmationMsg('CONFIRM')}
          title={'Are you sure want to remove?'}
        />
      ) : null}
    </li>
  );
};

export default SC_GiftCartItem;
