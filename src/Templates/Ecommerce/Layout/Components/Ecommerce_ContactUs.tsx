import { useTypedSelector } from 'hooks';
import Image from 'next/image';
import Link from 'next/link';
import { _Store } from 'page.config';
import React from 'react';
const ContactUs: React.FC = () => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  if (storeLayout === _Store.type3) {
    return (
      <>
        <section className='mainsection container mx-auto pt-20 pb-20'>
          <div className='w-full max-w-3xl mx-auto'>
            <div className='text-lg md:text-xl lg:text-small-title font-small-title text-center mb-8'>
              Our approach as an extension of your brand is to help maintain and
              build your brand equity with the right partners in the corporate
              marketplace.
            </div>
            <div className='flex flex-wrap justify-center items-center gap-y-5'>
              <div className='w-1/2 md:w-1/3 text-center order-2 md:order-1'>
                <div className='bg-[#00ce7c] w-20 h-20 mx-auto mb-2 rounded-full flex items-center justify-center'>
                  <span className='material-icons-outlined text-4xl'>chat</span>
                </div>
                <div className='text-base font-semibold uppercase'>Chat</div>
              </div>
              <div className='w-full md:w-1/3 text-center order-1 md:order-2'>
                <div className='text-base lg:text-2xl font-semibold uppercase'>
                  Contact Us
                </div>
              </div>
              <div className='w-1/2 md:w-1/3 text-center order-3 md:order-3'>
                <div className='bg-[#00ce7c] w-20 h-20 mx-auto mb-2 rounded-full flex items-center justify-center'>
                  <span className='material-icons text-4xl'>phone</span>
                </div>
                <div className='text-base font-semibold uppercase'>Call</div>
              </div>
            </div>
          </div>
        </section>
        <div className='bg-[#ececec]'>
          <div className='container mx-auto py-4 lg:py-6'>
            <div className='w-full md:grid md:grid-cols-1 md:gap-6 mb-6'>
              <div className='flex justify-center'>
                <Link href='/' title=''>
                  <Image
                    alt=''
                    src='/images/pk-footer-logo.png'
                    width='214px'
                    height='100px'
                  />
                </Link>
              </div>
            </div>
            <div className='w-full md:grid md:grid-cols-1 md:gap-6'>
              <div className='py-4'>
                <div className='w-full text-center text-2xl uppercase font-normal text-black mb-2'>
                  Connect With us
                </div>
                <div className='w-full text-center text-sm text-black mb-6'>
                  Join our community ! Stay on top of the latest trends, events.
                </div>
                <ul
                  role='list'
                  className='mt-2 flex flex-wrap justify-center gap-8 text-3xl mb-10'
                >
                  <li className=''>
                    <Link
                      href='https://www.facebook.com/pkhealthgear/'
                      title='Facebook'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='fab fa-facebook-f' aria-hidden='true'>
                        <span className='sr-only'>Facebook</span>
                      </i>
                    </Link>
                  </li>
                  <li className=''>
                    <Link
                      href='https://twitter.com/PKHealthGear'
                      title='Twitter'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='fab fa-twitter' aria-hidden='true'>
                        <span className='sr-only'>Twitter</span>
                      </i>
                    </Link>
                  </li>
                  <li className=''>
                    <Link
                      href='https://www.linkedin.com/company/health-pk/'
                      title='LinkedIn'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='fab fa-linkedin-in' aria-hidden='true'>
                        <span className='sr-only'>LinkedIn</span>
                      </i>
                    </Link>
                  </li>
                  <li className=''>
                    <Link
                      href='https://www.pinterest.com/pkhealthgear/'
                      title='Pinterest'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='fab fa-pinterest-p' aria-hidden='true'>
                        <span className='sr-only'>Pinterest</span>
                      </i>
                    </Link>
                  </li>
                  <li className=''>
                    <Link
                      href='https://www.instagram.com/pkhealthgear/'
                      title='Instagram'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='fab fa-instagram' aria-hidden='true'>
                        <span className='sr-only'>Instagram</span>
                      </i>
                    </Link>
                  </li>
                </ul>

                <ul
                  role='list'
                  className='mt-2 flex flex-wrap justify-center gap-6 text-base'
                >
                  <li>
                    <Link
                      title='Track your order'
                      href='/'
                      data-toggle='modal'
                      data-target='#myModalac'
                      className='font-normal text-anchor hover:text-[#72a84b]'
                    >
                      Track your order
                    </Link>
                  </li>
                  <li>
                    <Link
                      title='Order Guidelines'
                      href='/OrderGuidelines.html'
                      className='font-normal text-anchor hover:text-[#72a84b]'
                    >
                      Order Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link
                      title='About Us'
                      href='http://www.parsonskellogg.com/'
                      className='font-normal text-anchor hover:text-[#72a84b]'
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      title='Measuring Guide'
                      href='/MeasuringGuide.html'
                      className='font-normal text-anchor hover:text-[#72a84b]'
                    >
                      Measuring Guide
                    </Link>
                  </li>
                  <li style={{ display: 'none' }}>
                    <Link
                      title='Decoration Guidelines'
                      href='/Decoration-guide.html'
                      className='font-normal text-anchor hover:text-[#72a84b]'
                    >
                      Decoration Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link
                      title='One Percent For the Planet'
                      href='/patagonia-sustainability-initiatives.html'
                      className='font-normal text-anchor hover:text-[#72a84b]'
                    >
                      One Percent For the Planet
                    </Link>
                  </li>
                  <li>
                    <Link
                      title='Blog'
                      href='https://blog.pkhealthgear.com/'
                      target='_blank'
                      className='font-normal text-anchor hover:text-[#72a84b]'
                      rel='noreferrer'
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
    return (
      <section className='mainsection container mx-auto pt-20 pb-20'>
        <div className='w-full max-w-3xl mx-auto'>
          <div className='text-lg md:text-xl lg:text-small-title font-small-title text-center mb-8'>
            Our approach as an extension of your brand is to help maintain and
            build your brand equity with the right partners in the corporate
            marketplace.
          </div>
          <div className='flex flex-wrap justify-center items-center gap-y-5'>
            <div className='w-1/2 md:w-1/3 text-center order-2 md:order-1'>
              <div className='bg-[#00ce7c] w-20 h-20 mx-auto mb-2 rounded-full flex items-center justify-center'>
                <span className='material-icons-outlined text-4xl'>chat</span>
              </div>
              <div className='text-base font-semibold uppercase'>Chat</div>
            </div>
            <div className='w-full md:w-1/3 text-center order-1 md:order-2'>
              <div className='text-base lg:text-2xl font-semibold uppercase'>
                Contact Us
              </div>
            </div>
            <div className='w-1/2 md:w-1/3 text-center order-3 md:order-3'>
              <div className='bg-[#00ce7c] w-20 h-20 mx-auto mb-2 rounded-full flex items-center justify-center'>
                <span className='material-icons text-4xl'>phone</span>
              </div>
              <div className='text-base font-semibold uppercase'>Call</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <></>;
};

export default ContactUs;
