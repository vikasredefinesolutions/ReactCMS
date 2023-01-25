import { FetchBannerDetails } from '@services/header.service';
import { _BannerRes } from '@type/APIs/banner.res';
import Image from 'appComponents/reUsable/Image';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import { useEffect, useState } from 'react';
// import Image from '../../../../components/reusables/Image';
const ProductDetailsPageBanner = (slug: any) => {
  const { layout: storeLayout, id: storeId } = useTypedSelector(
    (state) => state.store,
  );
  const [banner, setBanner] = useState<_BannerRes[] | null>(null);
  useEffect(() => {
    if (storeId) {
      FetchBannerDetails({
        storeId: storeId,
        isBrand: true,
        sename: slug.slug,
      }).then((res) => setBanner(res));
    }
  }, [storeId]);
  if (banner === null || banner.length < 1) {
    return <></>;
  }
  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
    return (
      <>
        {/* <AskToLogin /> */}
        <section className='mainsection section'>
          <div className='w-full mx-auto'>
            <div className='relative'>
              <div className='relative w-full mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='container mx-auto'>
                  <div className='flex gap-10 items-center p-16 px-20 bg-gray-100'>
                    <div className='w-full lg:w-1/2 flex items-center gap-2 h-full justify-around'>
                      {banner[1] &&
                        (banner[1].brandLogo || banner[1].banner) && (
                          <>
                            <div className='h-full w-full lg:w-1/2'>
                              <Image
                                className='object-cover'
                                src={banner[1].brandLogo || banner[1].banner}
                                alt={''}
                              />
                            </div>
                            <div className='px-4 text-5xl leading-none text-gray-900'>
                              &
                            </div>
                          </>
                        )}
                      <div className='h-40 w-full lg:w-1/2 bg-white shadow-2xl flex items-center justify-center'>
                        <div
                          className='uppercase border-2 border-black inline-block p-2'
                          role='heading'
                          aria-level={6}
                        >
                          Your Logo
                        </div>
                      </div>
                    </div>
                    {banner[0].description && (
                      <div className='w-full lg:w-1/2 text-gray-900'>
                        {/* <h2 className="text-2xl md:text-3xl lg:text-title font-title mb-1">
                          {banner.}
                        </h2>
                        <div className="text-lg md:text-xl lg:text-small-title font-small-title mb-1">
                          {banner.subTitle}
                        </div> */}
                        <p className='text-default-text font-default-text'>
                          {banner[0].description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='mainsection text-center text-sm leading-none'>
          <div className='container mx-auto'>
            <div className='px-2 lg:px-40 py-0 md:py-5 mb-6 text-center bg-secondary'>
              <div className='block md:inline-block px-6 md:border-r border-slate-800 border-b border-b-black md:border-b-0 last:border-b-0 py-2.5 md:py-0'>
                <div className='w-full md:w-auto flex flex-wrap justify-center items-center'>
                  <span className='material-icons text-4xl'>
                    local_shipping
                  </span>
                  <div className='ml-2 text-left'>
                    <div className=''>FREE SHIPPING ON</div>
                    <div className=''>ORDERS OVER $4K</div>
                  </div>
                </div>
              </div>
              <div className='block md:inline-block px-6 border-b border-b-black md:border-b-0 last:border-b-0 py-2.5 md:py-0'>
                <div className='w-full md:w-auto flex flex-wrap justify-center items-center'>
                  <span className='material-icons text-4xl'>style</span>
                  <div className='ml-2 text-left'>
                    <div className=''>1ST LOGO FREE</div>
                    <div className=''>UP TO 10,000 STITCHES</div>
                  </div>
                </div>
              </div>
              <div className='block md:inline-block px-6 md:border-l border-slate-800 border-b border-b-black md:border-b-0 last:border-b-0 py-2.5 md:py-0'>
                <div className='w-full md:w-auto flex flex-wrap justify-center items-center'>
                  <span className='material-icons text-4xl'>verified</span>
                  <div className='ml-2 text-left'>
                    <div className=''>FREE PROOF</div>
                    <div className=''>ON ALL ORDERS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <Features /> */}
      </>
    );
  }
  if (storeLayout === _Store.type2) {
    return (
      <section className='mainsection'>
        <div className='container mx-auto'>
          <div className='items-center p-4 xl:p-10 xl:px-20 bg-gray-100'>
            <div className='flex flex-wrap items-center gap-y-10 -mx-5'>
              <div className='w-full lg:w-1/2 flex gap-2 h-full justify-around px-5'>
                {(banner[0].banner || banner[0].brandLogo) && (
                  <>
                    <div className='w-5/12'>
                      <Image
                        className='object-cover'
                        src={banner[0].brandLogo || banner[0].banner}
                        alt={''}
                        height={50}
                        width={50}
                      />
                    </div>
                    <div className='w-2/12 text-xl md:text-2xl lg:text-sub-title font-sub-title text-center flex items-center justify-center'>
                      &
                    </div>
                  </>
                )}
                <div className='w-5/12 bg-white shadow-2xl flex items-center justify-center'>
                  <div
                    className='uppercase border-2 border-black inline-block p-2'
                    role='heading'
                    // aria-level="6"
                  >
                    Your Logo
                  </div>
                </div>
              </div>
              {banner[0].description && (
                <div className='w-full lg:w-1/2 text-gray-900 px-5'>
                  <p className='text-default-text font-default-text'>
                    {banner[0].description}
                  </p>
                </div>
              )}
              <div className='w-full lg:w-1/2 text-gray-900 px-5'>
                <div className='text-lg md:text-xl lg:text-small-title font-small-title text-color-small-title mb-1'>
                  CUSTOM POLOS FOR MEN
                </div>
                <div className='text-default-text font-default-text text-color-default-text'>
                  It's easy to personalize Polos for Men with your logo: simply
                  upload your logo and we will take care of rest.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (storeLayout === _Store.type3) {
    return (
      <section className='section'>
        {(banner[0].brandLogo || banner[0].banner) && (
          <div className='container mx-auto'>
            <div className='text-center py-4 relative px-3 bg-[#0c1a1d] mb-4'>
              <div className=''>
                <Image
                  src={banner[0].brandLogo || banner[0].banner}
                  alt={''}
                  className=''
                />
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
  if (storeLayout === _Store.type4) {
    return <></>;
  }
  return <></>;
};
export default ProductDetailsPageBanner;
