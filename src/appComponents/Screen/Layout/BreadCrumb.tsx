import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React from 'react';

const BreadCrumb: React.FC = () => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  // const show = useTypedSelector((state) => state.store.display.footer);
  const router = useRouter();
  const { pageType: page, pathName } = useTypedSelector((state) => state.store);
  const getBreadCrubs = () => {
    const { slug } = page;
    if (pathName?.includes(slug)) {
      return [
        { name: 'Home', url: '/' },
        { name: slug, url: '#' },
      ];
    }
    return [];
  };

  if (getBreadCrubs().length === 0) {
    return <></>;
  }

  if (storeLayout === _Store.type1) {
    return (
      <section id="" className="px-2 lg:px-0">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between py-1 border-b border-gray-200">
            <nav
              className="flex flex-wrap items-center text-sm"
              aria-label="Breadcrumb"
            >
              <div className="mr-4" onClick={() => router.push('/home')}>
                &lt;&lt; Back
              </div>
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {/* <li className="inline-flex items-center">
                  <a
                    href="index.html"
                    className="inline-flex items-center font-medium text-gray-700 hover:text-gray-900"
                  >
                    <svg
                      className="mr-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => router.push('/')}
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Home
                  </a>
                </li> */}
                {/* <li className="inline-flex items-center">
                  <a
                    href="category.html"
                    className="inline-flex items-center font-medium text-gray-700 hover:text-gray-900"
                  >
                    <svg
                      className="w-2 h-4 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 1.5 14"
                    >
                      <line
                        id="Line_2"
                        data-name="Line 3"
                        y2="14"
                        transform="translate(0.75)"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      ></line>
                    </svg>
                    <span className="ml-1 md:ml-2">Men</span>
                  </a>
                </li> */}
                {/* <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      className="w-2 h-4 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 1.5 14"
                    >
                      <line
                        id="Line_2"
                        data-name="Line 3"
                        y2="14"
                        transform="translate(0.75)"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      ></line>
                    </svg>
                    <span className="ml-1 text-sm text-anchor md:ml-2">
                      Patagonia Men&apos;s Better Sweater Jacket
                    </span>
                  </div>
                </li> */}
                {getBreadCrubs().map((item, index) => (
                  <li key={index} aria-current="page">
                    <Link
                      href={item.url}
                      className="inline-flex items-center font-medium text-gray-700 hover:text-gray-900"
                    >
                      <div className="flex items-center">
                        <svg
                          className="w-2 h-4 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 1.5 14"
                        >
                          <line
                            id="Line_2"
                            data-name="Line 3"
                            y2="14"
                            transform="translate(0.75)"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          ></line>
                        </svg>
                        <span className="ml-1 text-sm text-anchor md:ml-2">
                          {item.name}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="text-center">
              <img
                className="inline-block"
                src="images/peter-millar.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <section id="" className="py-3 bg-[#e6e6e6] tracking-wider">
        <div className="container mx-auto">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 font-semibold">
              <li className="inline-flex items-center">
                <a
                  href="index.html"
                  className="inline-flex items-center text-secondary"
                >
                  Home
                </a>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="material-icons-outlined text-sm mr-1 md:mr-2">
                    east
                  </span>
                  <a href="product-listing.html" className="text-secondary">
                    Men
                  </a>
                </div>
              </li>
              {/* <!-- <li aria-current="page">
                    <div className="flex items-center">
                        <span className="material-icons-outlined text-sm mr-1 md:mr-2">east</span>
                        <a href="product-listing.html" className="text-secondary">Polos</a>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <span className="material-icons-outlined text-sm mr-1 md:mr-2">east</span>
                        <span className="text-secondary">Patagonia Men's Better Sweater Jacket</span>
                    </div>
                </li> --> */}
            </ol>
          </nav>
        </div>
      </section>
    );
  }

  if (storeLayout === _Store.type3) {
    return (
      <section id="" className="">
        <div className="container mx-auto">
          <div className="bg-white py-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 text-sm">
                <li className="">
                  <a href="index.html" className="inline-block">
                    Home
                  </a>
                </li>
                <li className="">
                  <div className="flex items-center">
                    <span className="">/</span>
                    <a
                      href="product-listing.html"
                      className="inline-block ml-1 md:ml-2"
                    >
                      Men
                    </a>
                  </div>
                </li>
                <li className="">
                  <div className="flex items-center">
                    <span className="">/</span>
                    <span className="ml-1 md:ml-2 text-gray-500">
                      Patagonia
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <section id="" className="py-3 bg-white tracking-wider px-2 lg:px-0">
        <div className="container mx-auto">
          <div className="border-b border-[#f0f0f0] pb-2">
            <nav
              className="flex flex-wrap justify-between items-center"
              aria-label="Breadcrumb"
            >
              <ol className="inline-flex items-center text-xs text-secondary">
                <li className="hidden lg:inline-flex items-center mr-4">
                  <a
                    href="product-listing.html"
                    className="inline-flex items-center text-secondary"
                  >
                    <span className="material-icons-outlined text-base mr-1">
                      keyboard_double_arrow_left
                    </span>{' '}
                    Back
                  </a>
                </li>
                <li className="inline-flex items-center mr-1">
                  <a
                    href="index.html"
                    className="inline-flex items-center text-secondary"
                  >
                    Home
                  </a>
                </li>
                <li className="inline-flex items-center mr-1">
                  <span className="mx-1">/</span>{' '}
                  <a
                    href="product-listing.html"
                    className="inline-flex items-center text-secondary"
                  >
                    Men
                  </a>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-1">/</span>
                    <span className=" md:ml-1 text-primary">
                      Adidas Men's Grind Polo
                    </span>{' '}
                  </div>
                </li>
              </ol>
              <div className="hidden md:inline-block">
                <img src="images/adidas.png" alt="" />
              </div>
            </nav>
          </div>
        </div>
      </section>
    );
  }

  return <></>;
};

export default BreadCrumb;
