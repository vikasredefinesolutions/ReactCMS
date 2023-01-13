import React from 'react';

const PD_GiftCard: React.FC = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="bg-white pt-8">
          <div className="lg:grid lg:grid-cols-12 lg:items-start px-3 gap-4">
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="main-image max-w-xl mx-auto mb-4">
                  <img src="images/" alt="" className="" />
                </div>
              </div>
            </div>
            {/* <!-- <div className="lg:col-end-13 lg:col-span-5 mt-4 md:mt-10 px-2 md:px-4 sm:px-0 sm:mt-16 lg:mt-0"> --> */}
            <div className="lg:col-span-5">
              <div className="mb-4 border-b border-b-gray-300">
                <div className="text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title mb-4">
                  Gift Card
                </div>
              </div>
              <div className="flex flex-wrap items-center mb-4">
                <div className="w-32 text-sm items-center">
                  <span className="text-sm font-semibold">
                    Recipient's Name:
                  </span>
                </div>
                <div className="text-sm grow max-w-xs">
                  <input
                    type="text"
                    className="form-input"
                    id=""
                    value=""
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center mb-4">
                <div className="w-32 text-sm items-center">
                  <span className="text-sm font-semibold">
                    Recipient's Email:
                  </span>
                </div>
                <div className="text-sm grow max-w-xs">
                  <input
                    type="email"
                    className="form-input"
                    id=""
                    value=""
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-4">
                <div className="w-32 text-sm items-center">
                  <span className="text-sm font-semibold">Message:</span>
                </div>
                <div className="text-sm grow max-w-xs">
                  <textarea className="form-input" rows={5}></textarea>
                </div>
              </div>

              <div>
                <div className="mt-3 bg-sky-50 p-4">
                  <div className="text-sm text-gray-900 flex flex-wrap items-end">
                    <div className="w-28">
                      <span className="">You Pay</span>
                    </div>
                    <div className="">
                      <span className="text-2xl tracking-wider">$10.00</span>
                    </div>
                  </div>
                  <div className="w-full text-left flex justify-end mt-4">
                    <a
                      href="cart.html"
                      className="btn btn-primary w-full text-center"
                    >
                      BUY NOW
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
};

export default PD_GiftCard;
