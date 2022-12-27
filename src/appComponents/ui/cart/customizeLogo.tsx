import { useTypedSelector } from 'hooks';

const CustomizeLogo = () => {
  const availableOptions = useTypedSelector(
    (state) => state.product.toCheckout.availableOptions,
  );

  return (
    <section className="mainsection pt-5">
      <div className="container mx-auto">
        <div className="text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title mb-4">
          Apply Logo(s)
        </div>
        <div
          className="border border-gray-200 p-4 mb-6"
          x-data="{ addmorelogo : 0 }"
        >
          <div className="flex flex-wrap gap-y-6 -mx-3 mb-6">
            <div className="w-full lg:w-1/5 px-3">
              <div className="relative">
                <div className="border border-gray-200">
                  <div className="max-w-xl mx-auto">
                    <img
                      src="images/1040623_25528_STH.jpg"
                      alt=""
                      className="max-h-full mx-auto "
                    />{' '}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/5 px-3">
              <div className="mb-4">
                <h1 className="text-2xl font-bold mb-4">
                  Patagonia Men's Better Sweater Jacket
                </h1>
                <div className="pb-4 flex items-center">
                  {' '}
                  <span className="font-bold inline-block w-24">
                    COLOR{' '}
                  </span>{' '}
                  <span>: Stonewash</span>
                </div>
                <div className="pb-4 flex items-center">
                  {' '}
                  <span className="font-bold inline-block w-24">
                    SIZE / QTY{' '}
                  </span>{' '}
                  <span>: LG / 20</span>
                </div>
                <div className="pb-4 flex items-center">
                  {' '}
                  <span className="font-bold inline-block w-24"> </span>{' '}
                  <span>: XL / 20</span>
                </div>
              </div>
            </div>
          </div>
          <div className="step-1">
            <div className="text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title">
              Logo
            </div>
            <div
              className="p-4 divide-y divide-gray-200"
              x-data="{logooption : 0}"
            >
              <div className="py-6">
                <div className="text-lg md:text-xl lg:text-small-title font-small-title text-color-small-title mb-2">
                  1. Select a Location
                </div>
                <div className="max-w-5xl">
                  <ul
                    className="flex flex-wrap gap-y-6 -mx-3"
                    x-data="{selected : 0}"
                  >
                    <li className="w-full sm:w-1/2 lg:w-1/4 text-center px-3 flex">
                      <div className="border-2 hover:border-primary p-3 w-full text-ceter">
                        <div className="w-40 h-40 inline-flex items-center justify-center">
                          <img
                            className="inline-block max-h-full"
                            src="images/Right-Chest-70-191.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mt-2">Right Chest</div>
                      </div>
                    </li>
                    <li className="w-full sm:w-1/2 lg:w-1/4 text-center px-3 flex">
                      <div className="border-2 hover:border-primary p-3 w-full text-ceter">
                        <div className="w-40 h-40 inline-flex items-center justify-center">
                          <img
                            className="inline-block max-h-full"
                            src="images/Right-Chest-70-191.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mt-2">Right Sleeve</div>
                      </div>
                    </li>
                    <li className="w-full sm:w-1/2 lg:w-1/4 text-center px-3 flex">
                      <div className="border-2 hover:border-primary p-3 w-full text-ceter">
                        <div className="w-40 h-40 inline-flex items-center justify-center">
                          <img
                            className="inline-block max-h-full"
                            src="images/Right-Chest-70-191.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mt-2">Back Yoke</div>
                      </div>
                    </li>
                    <li className="w-full sm:w-1/2 lg:w-1/4 text-center px-3 flex">
                      <div className="border-2 hover:border-primary p-3 w-full text-ceter">
                        <div className="w-40 h-40 inline-flex items-center justify-center">
                          <img
                            className="inline-block max-h-full"
                            src="images/Right-Chest-70-191.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mt-2">Left Chest</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-3">
                  <a href="javascript:void(0);" className="btn btn-primary">
                    SELECT YOUR LOGO
                  </a>
                  <span>OR</span>
                  <a href="javascript:void(0);" className="btn btn-primary">
                    SHARE LOGO LATER
                  </a>
                </div>
              </div>
              <div className="py-6">
                <div className="text-lg md:text-xl lg:text-small-title font-small-title text-color-small-title mb-2">
                  2. Select a Logo
                </div>
                <div className="max-w-5xl">
                  <ul
                    className="flex flex-wrap gap-y-6 -mx-3"
                    x-data="{selected : 0}"
                  >
                    <li className="w-full sm:w-1/2 lg:w-1/4 text-center px-3 flex">
                      <div className="border-2 hover:border-primary p-3 w-full text-ceter">
                        <div className="w-28 h-28 inline-flex items-center justify-center">
                          <img
                            className="inline-block max-h-full"
                            src="images/cg-logo-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mt-2">Logo #PK1663</div>
                        <div className="mt-2">In Process</div>
                        <div className="mt-2">Estimated Cost: $5.00</div>
                      </div>
                    </li>
                    <li className="w-full sm:w-1/2 lg:w-1/4 text-center px-3 flex">
                      <div className="border-2 hover:border-primary p-3 w-full text-ceter">
                        <div className="w-28 h-28 inline-flex items-center justify-center">
                          <img
                            className="inline-block max-h-full"
                            src="images/cg-logo-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mt-2">Logo #PK5571</div>
                        <div className="mt-2">In Process</div>
                        <div className="mt-2">Estimated Cost: $5.00</div>
                      </div>
                    </li>
                    <li className="w-full sm:w-1/2 lg:w-1/4 text-center px-3 flex">
                      <div
                        className="border-2 hover:border-primary p-3 w-full text-ceter border-gray-200"
                        data-modal-toggle="addnewlogoModal"
                      >
                        <div className="w-28 h-28 inline-flex items-center justify-center">
                          <img
                            className="inline-block max-h-full"
                            src="images/logo-addnewLogo.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-3">
                  <a href="javascript:void(0);" className="btn btn-primary">
                    APPLY LOGO
                  </a>
                  <a href="javascript:void(0);" className="btn btn-primary">
                    CANCEL
                  </a>
                </div>
              </div>
              <div className="p-4">
                <div className="text-lg md:text-xl lg:text-small-title font-small-title text-color-small-title mb-2">
                  2. Share Logo Later
                </div>
                <div className="">
                  <div className="">
                    No Worries! One of our gear guides will be contacting you
                    after your order has been submitted. We can finalize
                    decoration details at that time.
                  </div>
                </div>
                <div className="mt-3">
                  <a href="javascript:void(0);" className="btn btn-primary">
                    CONTINUE
                  </a>
                  <a href="javascript:void(0);" className="btn btn-primary">
                    CANCEL
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="step-2">
            <div className="border border-gray-200 p-4 mt-4">
              <div className="">Location: Right Chest</div>
              <div className="mt-2 w-32">
                <img
                  className="inline-block"
                  src="images/Right-Chest-70-191.jpg"
                  alt=""
                />
              </div>
              <div className="mt-2">Logo #PK1663</div>
              <div className="mt-2 flex gap-2 items-center">
                <div className="font-semibold">Logo 1:</div>
                <div className="w-20 h-20 p-1 inline-flex items-center justify-center border border-gray-200">
                  <img
                    className="inline-block"
                    src="images/cg-logo-1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-2">
                *Please Note: The above logo may not reflect the actual selected
                colors.
              </div>
            </div>
            <div className="border border-gray-200 p-4 mt-4">
              <div className="">Location: Right Chest</div>
              <div className="mt-2 w-32">
                <img
                  className="inline-block"
                  src="images/Right-Chest-70-191.jpg"
                  alt=""
                />
              </div>
              <div className="mt-2">Logo #PK1663</div>
              <div className="mt-2 flex gap-2 items-center">
                <div className="font-semibold">Logo 2:</div>
                <div className="w-20 h-20 p-1 inline-flex items-center justify-center border border-gray-200">
                  <img
                    className="inline-block"
                    src="images/cg-logo-2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-2">
                *Please Note: The above logo may not reflect the actual selected
                colors.
              </div>
            </div>
            <div className="mt-4">
              <a
                href="javascript:void(0);"
                className="btn btn-primary w-full text-center"
              >
                ADD ANOTHER LOGO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeLogo;
