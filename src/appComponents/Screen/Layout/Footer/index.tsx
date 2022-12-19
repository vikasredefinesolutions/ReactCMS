import { paths } from '@constants/paths.constant';
import { useTypedSelector } from 'hooks';
import { footer } from 'mock/footer.mock';
import Link from 'next/link';
import { _Store } from 'page.config';
import React from 'react';
import ContactUs from '../ContactUs';
import NewsLetterBox from '../NewsLetterBox';
import CopyRight from './CopyRight';
import Features from './Features';
import OnePercentSection from './OnePercentSection';
interface _props {}
const Footer: React.FC<_props> = () => {
  // const {} = useTypedSelector(state => state.store.display.footer);
  const storeLayout = useTypedSelector((state) => state.store.layout);

  if (storeLayout === _Store.type1) {
    return (
      <footer className="bg-white pt-10" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <ContactUs />
        <Features features={''} />
        <div className="bg-primary">
          <div className="container mx-auto py-4 lg:py-16">
            <div className="pb-0 md:pb-8 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="w-full text-center md:text-left text-lg font-semibold text-gray-100 tracking-wider uppercase">
                  HELPFUL LINKS
                </h3>
                <ul
                  role="list"
                  className="mt-4 text-center md:text-left mb-6 md:mb-0"
                >
                  <li>
                    <Link
                      href={paths.SPECIAL_REQUEST}
                      className="text-base text-gray-200 hover:text-gray-100"
                    >
                      Special Request
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full text-center flex flex-wrap justify-center items-center mb-6 md:mb-0">
                <img
                  src="https://www.corporategear.com/images/footer-logo.svg"
                  alt=""
                />
              </div>
              <div className="w-full text-center">
                <h3 className="text-lg font-semibold text-gray-100 tracking-wider uppercase">
                  STAY CONNECTED
                </h3>
                <ul
                  role="list"
                  className="my-4 flex text-center gap-2 justify-center"
                >
                  <li>
                    <Link href="" className="bg-white rounded-md block p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 fill-[#003a70]"
                        viewBox="0 0 320 512"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="bg-white rounded-md block p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 fill-[#003a70]"
                        viewBox="0 0 512 512"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="bg-white rounded-md block p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 fill-[#003a70]"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="bg-white rounded-md block p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 fill-[#003a70]"
                        viewBox="0 0 384 512"
                      >
                        <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="bg-white rounded-md block p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 fill-[#003a70]"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="bg-white rounded-md block p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 fill-[#003a70]"
                        viewBox="0 0 576 512"
                      >
                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
                <NewsLetterBox />
              </div>
            </div>
          </div>
        </div>

        <CopyRight copyRight={footer.copyRight} />
      </footer>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <footer className="text-base tracking-wider">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <NewsLetterBox />
        <div className="bg-[#415364] text-white white-link py-12">
          <div className="container mx-auto text-center">
            <div className="">
              <div className="text-base md:text-lg lg:text-small-title font-small-title !text-primary">
                CONNECT WITH US
              </div>
              <div className="py-2.5">
                <div className="">Join our community !</div>
                <div className="">
                  Stay on top of the latest trends in sportswear .
                </div>
              </div>
            </div>
            <div className="pt-10">
              <div className="text-base md:text-lg lg:text-small-title font-small-title !text-white">
                SOCIAL SHARE
              </div>
              <div className="py-2.5">
                <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
                  <Link
                    href="/"
                    className="!text-primary hover:text-white text-3xl"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link
                    href="/"
                    className="!text-primary hover:text-white text-3xl"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link
                    href="/"
                    className="!text-primary hover:text-white text-3xl"
                  >
                    <i className="fa-brands fa-pinterest-p"></i>
                  </Link>
                  <Link
                    href="/"
                    className="!text-primary hover:text-white text-3xl"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                  <Link
                    href="/"
                    className="!text-primary hover:text-white text-3xl"
                  >
                    <i className="fa-brands fa-flickr"></i>
                  </Link>
                  <Link
                    href="/"
                    className="!text-primary hover:text-white text-3xl"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link
                    href="/"
                    className="!text-primary hover:text-white text-3xl"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-y-10 pt-10 -mx-3">
                <div className="w-full lg:w-1/3 px-3">
                  <div className="text-lg text-primary mb-2">SHIPPING</div>
                  <div className="text-lg text-white whitespace-nowrap">
                    Enjoy free shipping on every order.
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-3">
                  <div className="text-lg text-primary mb-2">REQUESTS</div>
                  <div className="text-lg text-white">
                    <div className="">
                      <Link
                        href="/"
                        className="inline-block hover:text-[#cdde00] whitespace-nowrap"
                      >
                        Custom Requests Form Submission
                      </Link>
                    </div>
                    <div className="">
                      <Link
                        href="/"
                        className="inline-block hover:text-[#cdde00] whitespace-nowrap"
                      >
                        Build Store
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-3">
                  <div className="text-lg text-primary mb-2">ORDER</div>
                  <div className="text-lg text-white">
                    <Link
                      href="/"
                      className="inline-block hover:text-[#cdde00] whitespace-nowrap"
                    >
                      Track your order GameDay Gear
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-y-10 pt-10 -mx-3">
                <div className="w-full lg:w-1/3 px-3">
                  <div className="text-lg text-primary mb-2">POLICY</div>
                  <div className="text-lg text-white">
                    <div className="">
                      <Link
                        href="/"
                        className="inline-block hover:text-[#cdde00] whitespace-nowrap"
                      >
                        Return Policy
                      </Link>
                    </div>
                    <div className="">
                      <Link
                        href="/"
                        className="inline-block hover:text-[#cdde00] whitespace-nowrap"
                      >
                        Privacy & Security
                      </Link>
                    </div>
                    <div className="">
                      <Link
                        href="/"
                        className="inline-block hover:text-[#cdde00] whitespace-nowrap"
                      >
                        Terms and Conditions
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-3">
                  <div className="text-lg text-primary mb-2">COMPANY INFO</div>
                  <div className="text-lg text-white">
                    <div className="">
                      <Link
                        href="/"
                        className="inline-block hover:text-[#cdde00] whitespace-nowrap"
                      >
                        About Us
                      </Link>
                    </div>
                    <div className="">
                      <Link
                        href="/"
                        className="inline-block hover:text-[#cdde00] whitespace-nowrap"
                      >
                        Blog
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OnePercentSection />
      </footer>
    );
  }

  if (storeLayout === _Store.type3) {
    return (
      <footer className="">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <ContactUs />
        <NewsLetterBox />
        <CopyRight copyRight={footer.copyRight} />
      </footer>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <footer className="text-xs tracking-wider pt-20">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="bg-secondary text-white py-2.5">
          <div className="container mx-auto">
            <div className="w-full">
              <div className="text-center">
                <img
                  src="../images/onepercentfortheplanet.png"
                  className="inline-block"
                  alt=""
                />
              </div>
            </div>
            <div className="pt-5">
              <div className="text-center flex items-center justify-center gap-4 lg:gap-8">
                <span className="">Driving Impressions</span>
                <span className="">ASI 50864</span>
                <span className="">PPAI 355347</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-black py-2.5">
          <div className="container mx-auto">
            <div className="">
              <div className="text-center pb-2">
                <Link title="DI Policies" href="/di-policies.html">
                  DI Policies
                </Link>{' '}
                |{' '}
                <Link title="Privacy &amp; Security" href="/privacypolicy.html">
                  Privacy &amp; Security
                </Link>{' '}
                |{' '}
                <Link
                  rel="nofollow"
                  title="Terms and Conditions"
                  href="/TermsandCondition.html"
                >
                  Terms &amp; Conditions
                </Link>
              </div>
              <div className="text-center">
                &copy; 2022 Driving Impressions ● All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  return <></>;
};

export default Footer;
