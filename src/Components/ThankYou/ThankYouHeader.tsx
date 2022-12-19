import { _ThankYouOrder } from 'definations/thankYou.type';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';

interface _props {
  order: _ThankYouOrder;
  contactNo: string;
}

const ThankYouHeader: React.FC<_props> = ({ order, contactNo }) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);

  if (storeLayout === _Store.type4) {
    return (
      <section id="">
        <div className="bg-white">
          <div className="container mx-auto">
            <div className="bg-light-gray text-sm w-full mt-5 mb-5">
              <div className="px-4 py-4 w-full">
                <div className="text-center">
                  <img
                    src="images/thank-you-icon.png"
                    alt="Thank you"
                    className="mx-auto border-2 border-gray-500 rounded-full p-3"
                  />
                  <span className="block text-3xl pt-2 pb-2">
                    Thank You, {order.customer.firstName}
                  </span>
                  <span className="block text-base pt-2 pb-2">
                    FOR YOUR ORDER
                  </span>
                </div>
                <div className="md:flex md:justify-between md:items-center text-center md:text-left">
                  <div className="pt-2">
                    <div className="text-2xl pb-2">
                      YOUR ORDER NUMBER IS:{order.order.id}
                    </div>
                    <div className="pb-2 pr-5">
                      You will receive a confirmation shortly at
                      {order.customer.email}, You can access your account at
                      your account
                    </div>
                    <div className="pb-2">
                      <a
                        title="Print Reciept"
                        className="underline hover:no-underline"
                      >
                        Print Reciept
                      </a>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="text-2xl pb-2">Questions?</div>
                    <div className="pb-2">Call Us:&nbsp; {contactNo}</div>
                    <div className="pb-2">
                      <a title="Email" className="underline hover:no-underline">
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <>
      {' '}
      <section id="">
        <div className="bg-white">
          <div className="container mx-auto">
            <div className="bg-primary w-full mt-5 mb-5">
              <div className="px-4 py-4 w-full">
                <div className="text-center">
                  <img
                    src="images/thank-you-icon.png"
                    alt="Thank you"
                    className="mx-auto border-2 rounded-full p-3"
                  />
                  <span className="block text-white text-3xl pt-2 pb-2">
                    Thank You, {order.customer.firstName}
                  </span>
                  <span className="block text-white text-base pt-2 pb-2">
                    FOR YOUR ORDER
                  </span>
                </div>
                <div className="md:flex md:justify-between md:items-center text-center md:text-left">
                  <div className="pt-2">
                    <span className="text-2xl pb-2 block text-white">
                      YOUR ORDER NUMBER IS:{order.order.id}
                    </span>
                    <span className="pb-2 text-sm text-white block pr-5">
                      You will receive a confirmation shortly at
                      {order.customer.email}, You can access your account at
                      your account
                    </span>
                    <span className="text-white block text-sm pb-2">
                      <a
                        title="Print Reciept"
                        className="text-white underline hover:no-underline"
                      >
                        Print Reciept
                      </a>
                    </span>
                  </div>
                  <div className="pt-2">
                    <span className="text-2xl pb-2 block text-white">
                      Questions?
                    </span>
                    <span className="pb-2 text-sm text-white block">
                      Call Us:&nbsp; {contactNo}
                    </span>
                    <span className="text-white block text-sm pb-2">
                      <a
                        title="Email"
                        className="text-white underline hover:no-underline"
                      >
                        Email
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYouHeader;
