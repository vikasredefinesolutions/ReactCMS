import { FetchBannerDetails } from '@services/header.service';
import { _BannerRes } from '@type/APIs/banner.res';
import ForgotModal from 'appComponents/modals/ForgotModal';
import LoginModal from 'appComponents/modals/LoginModal';
import Image from 'appComponents/reUsable/Image';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React, { useEffect, useState } from 'react';
// import Image from '../../../../components/reusables/Image';
interface _props {
  slug: string | undefined;
  seType: string | undefined;
}
const ProductDetailsPageBanner: React.FC<_props> = (props) => {
  const { slug, seType } = props;
  const isbrand: boolean = seType === 'brand' ? true : false;
  const { layout: storeLayout, id: storeId } = useTypedSelector(
    (state) => state.store,
  );
  const [banner, setBanner] = useState<_BannerRes[] | null>(null);
  const [showModal, setShowModal] = useState<string | null>(null);
  const userId = useTypedSelector((state) => state.user.id);
  useEffect(() => {
    if (storeId && slug) {
      FetchBannerDetails({
        storeId: storeId,
        isBrand: isbrand,
        sename: slug,
      }).then((res) => setBanner(res));
    }
  }, [storeId, slug]);

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
        {!userId && (
          <section className='mainsection container mx-auto'>
            <div className='bg-green-500 text-gray-900 p-1 text-center'>
              <a
                onClick={() => setShowModal('login')}
                href='javascript:void(0);'
                className='inline-flex items-center gap-1 tracking-wider text-default-text font-default-text text-color-default-text'
              >
                LOGIN OR CREATE AN ACCOUNT TO SEE DISCOUNTED PRICING{' '}
                <span className='material-icons'>account_circle</span>
              </a>
            </div>
          </section>
        )}
        <section className='mainsection'>
          <div className='container mx-auto'>
            <div className='items-center p-4 xl:p-16 xl:px-20 bg-gray-100'>
              <div className='flex flex-wrap items-center gap-y-10 -mx-5'>
                <div className='w-full lg:w-1/2 flex gap-2 h-full justify-around px-5'>
                  <div className='w-5/12'>
                    {banner[0] && (banner[0].brandLogo || banner[0].banner) ? (
                      <Image
                        className='object-cover'
                        src={banner[0].brandLogo || banner[0].banner}
                        alt={''}
                        useNextImage={false}
                      />
                    ) : (
                      <Image
                        isStatic={true}
                        src='/images/your-favorite-brands.png'
                        className='object-cover'
                        alt='category'
                        useNextImage={false}
                      />
                    )}
                  </div>
                  <div className='w-2/12 text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title text-center flex items-center justify-center'>
                    &amp;
                  </div>
                  <div className='w-5/12 bg-white shadow-2xl flex items-center justify-center'>
                    <div className='uppercase border-2 border-black inline-block p-2'>
                      Your Logo
                    </div>
                  </div>
                </div>
                <div className='w-full lg:w-1/2 text-gray-900 px-5'>
                  <div
                    className='text-default-text font-default-text text-color-default-text'
                    dangerouslySetInnerHTML={{
                      __html: banner[0].description,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='mainsection text-center text-sm leading-none'>
          <div className='container mx-auto'>
            <div className='px-2 lg:px-40 py-0 md:py-5  text-center bg-secondary'>
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
        {showModal === 'login' && <LoginModal modalHandler={setShowModal} />}
        {showModal === 'forgot' && <ForgotModal modalHandler={setShowModal} />}
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
