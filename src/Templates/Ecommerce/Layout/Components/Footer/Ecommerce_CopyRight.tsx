import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { _Store } from 'page.config';
import React from 'react';

type _props = Pick<any, 'copyRight'>;

const CopyRight: React.FC<_props> = ({ copyRight }) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  // const show = useTypedSelector((state) => state.store.display.footer);

  if (storeLayout === _Store.type3) {
    return (
      <div className='bg-[#72a84b]'>
        <div className='container mx-auto py-4 text-xs text-center'>
          <div className='w-full'>
            <div className=''>
              <div className='w-full text-white mb-3'>
                2290 Pawtucket Ave, East Providence RI 02914
              </div>
              <div className='w-full text-white mb-4'>© 2022 PKhealthgear</div>
              <ul role='list' className='flex flex-wrap justify-center gap-6'>
                <li>
                  <Link
                    title='Privacy &amp; Security'
                    href='/'
                    className='text-white'
                  >
                    Privacy &amp; Security
                  </Link>
                </li>
                <li>
                  <Link
                    title='Terms and Conditions'
                    href='/'
                    className='text-white'
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link title='Sitemap' href='/' className='text-white'>
                    Sitemap
                  </Link>{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <div className='bg-[#051c2c] text-white pt-5 pb-[70px] white-link'>
        <div className='container mx-auto'>
          <div className='w-full lg:grid lg:grid-cols-3'>
            <div className='col-span-1 py-2.5 flex flex-wrap items-center justify-center lg:justify-start gap-6'>
              <img
                src='../images/footer-bb.png'
                className='inline-block'
                alt=''
              />
              <img
                src='../images/footer-norton.png'
                className='inline-block'
                alt=''
              />
            </div>
            <div className='col-span-1 text-center py-2.5'>
              <img
                src='../images/for-planet.png'
                className='inline-block'
                alt=''
              />
            </div>
            <div className='col-span-1 text-center py-2.5'>
              <div className='flex flex-wrap justify-center lg:justify-end'>
                We Accept :
                <img
                  alt='We Accept'
                  src='../images/footer-card.png'
                  role='presentation'
                  className='ml-2'
                />
              </div>
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-center text-[16px]'>{copyRight.title}</div>
            <div className='flex flex-wrap justify-center gap-5 py-2'>
              <Link title='Privacy &amp; Security' href='/'>
                Privacy &amp; Security
              </Link>
              <Link rel='' title='Terms and Conditions' href='/'>
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <footer className='text-xs tracking-wider pt-20'>
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='bg-secondary text-white py-2.5'>
          <div className='container mx-auto'>
            <div className='w-full'>
              <div className='text-center'>
                <img
                  src='../images/onepercentfortheplanet.png'
                  className='inline-block'
                  alt=''
                />
              </div>
            </div>
            <div className='pt-5'>
              <div className='text-center flex items-center justify-center gap-4 lg:gap-8'>
                <span className=''>Driving Impressions</span>
                <span className=''>ASI 50864</span>
                <span className=''>PPAI 355347</span>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white text-black py-2.5'>
          <div className='container mx-auto'>
            <div className=''>
              <div className='text-center pb-2'>
                <Link title='DI Policies' href='/di-policies.html'>
                  DI Policies
                </Link>{' '}
                |{' '}
                <Link title='Privacy &amp; Security' href='/privacypolicy.html'>
                  Privacy &amp; Security
                </Link>{' '}
                |{' '}
                <Link
                  rel='nofollow'
                  title='Terms and Conditions'
                  href='/TermsandCondition.html'
                >
                  Terms &amp; Conditions
                </Link>
              </div>
              <div className='text-center'>
                {/* &copy; 2022 Driving Impressions ● All Rights Reserved */}
                {copyRight.title}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
    return (
      <div className='container mx-auto'>
        <div className='border-t border-gray-200 py-8'>
          <div className='flex flex-wrap lg:-mx-6 gap-y-4 items-center'>
            <div className='w-full lg:w-1/3 lg:px-6 text-center lg:text-left'>
              <img
                src={copyRight.donation[0].src}
                alt=''
                className='m-auto lg:m-0'
              />
            </div>
            <div className='w-full lg:w-1/3 lg:px-6 text-center'>
              {copyRight.title}
            </div>
            <div className='w-full lg:w-1/3 lg:px-6 text-center lg:text-right'>
              <div className='flex flex-wrap justify-center lg:text-right lg:justify-end'>
                We Accept :
                <img
                  alt='We Accept'
                  src={copyRight.acceptablePayments[0].src}
                  role='presentation'
                  className='ml-2'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default CopyRight;
