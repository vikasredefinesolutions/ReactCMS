import {
  fetchCategoryByCategoryId,
  fetchCategoryByproductId,
} from '@services/product.service';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React, { useEffect, useState } from 'react';

const BreadCrumb: React.FC = () => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const storeId = useTypedSelector((state) => state.store.id);
  const router = useRouter();
  const pageType = useTypedSelector((state) => state.store.pageType);

  const [breadCrumbs, setBreadCrumbs] = useState<
    { name: string; url: string }[]
  >([]);
  const getBreadCrubs = async () => {
    if (pageType.type === 'brand') {
      return [
        { name: 'Home', url: '/' },
        { name: pageType.slug, url: pageType.slug },
      ];
    }

    if (['product', 'category'].includes(pageType.type)) {
      const categories = await (pageType.type === 'category'
        ? fetchCategoryByCategoryId
        : fetchCategoryByproductId)(~~pageType.id, storeId || 0);
      const breadCrumbs = [{ name: 'Home', url: '/' }];
      if (categories.length > 0) {
        const _categories = categories[0];
        const catNames = _categories.name.split(' > ');
        const catSeNames = _categories.sename.split(' > ');

        catNames.forEach((cate, index) => {
          breadCrumbs.push({
            name: cate,
            url: `/${catSeNames[index]}.html`,
          });
        });
      } else {
        breadCrumbs.push({
          name: pageType.slug,
          url: pageType.slug,
        });
      }
      return breadCrumbs;
    }
    return [];
  };

  useEffect(() => {
    getBreadCrubs().then((breadCrumbs) => setBreadCrumbs(breadCrumbs));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeId, pageType.type]);

  const aspath = router.asPath.split('?')[0];
  const pathRoute = aspath.split('/').filter((v) => v.length > 0);

  if (breadCrumbs.length === 0 || router.route === '/') {
    return <></>;
  }

  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
    return (
      <div id='' className='px-2 lg:px-0'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap justify-between py-1 border-b border-gray-200'>
            <nav
              className='flex flex-wrap items-center text-sm'
              aria-label='Breadcrumb'
            >
              {pageType.type === 'product' && (
                <div className='mr-4' onClick={() => router.push('/')}>
                  &lt;&lt; Back
                </div>
              )}
              <ol className='inline-flex items-center space-x-1 md:space-x-3'>
                {breadCrumbs.map((item, index) => (
                  <li key={index} aria-current='page'>
                    <Link
                      href={item.url}
                      className='inline-flex items-center font-medium text-gray-700 hover:text-gray-900'
                    >
                      <a className='inline-flex items-center font-medium text-gray-700 hover:text-gray-900'>
                        <div className='flex items-center'>
                          {index > 0 && (
                            <svg
                              className='w-2 h-4 text-gray-400'
                              fill='currentColor'
                              viewBox='0 0 1.5 14'
                            >
                              <line
                                id='Line_2'
                                data-name='Line 3'
                                y2='14'
                                transform='translate(0.75)'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='1.5'
                              ></line>
                            </svg>
                          )}
                          <span className='ml-1 text-sm md:ml-2 !text-gray-700'>
                            {item.name}
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
            <div className='text-center'>
              <img
                className='inline-block'
                src='images/peter-millar.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <div id='' className='py-3 bg-[#e6e6e6] tracking-wider'>
        <div className='container mx-auto'>
          <nav className='flex' aria-label='Breadcrumb'>
            <ol className='inline-flex items-center space-x-1 md:space-x-2 font-semibold'>
              {breadCrumbs.map((item, index) => (
                <li key={index} aria-current='page'>
                  <Link
                    href={item.url}
                    className='inline-flex items-center text-secondary'
                  >
                    <span className='inline-flex items-center font-medium text-gray-700 hover:text-gray-900'>
                      <div className='flex items-center'>
                        {index > 0 && (
                          <span className='material-icons-outlined text-sm mr-1 md:mr-2'>
                            east
                          </span>
                        )}
                        <a className='text-secondary hover:text'>{item.name}</a>
                      </div>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
            {/* <ol className="inline-flex items-center space-x-1 md:space-x-2 font-semibold">
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
              </li>  */}
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
            {/* </ol> */}
          </nav>
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type3 || storeLayout === _Store.type22) {
    return (
      <div id='' className='px-2 lg:px-0'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap justify-between py-1 border-b border-gray-200'>
            <nav
              className='flex flex-wrap items-center text-sm'
              aria-label='Breadcrumb'
            >
              <ol className='inline-flex items-center space-x-1 md:space-x-2 font-semibold'>
                {breadCrumbs.map((item, index) => (
                  <li key={index} aria-current='page'>
                    <Link
                      href={item.url}
                      className='inline-flex items-center text-secondary'
                    >
                      <span className='inline-flex items-center font-medium text-gray-700 hover:text-gray-900'>
                        <div className='flex items-center'>
                          {index > 0 && (
                            <span className='material-icons-outlined text-sm mr-1 md:mr-2'>
                              east
                            </span>
                          )}
                          <a className='text-secondary hover:text'>
                            {item.name}
                          </a>
                        </div>
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
              {/* <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/">
                    <a
                      className="inline-flex items-center font-medium text-gray-700 hover:text-gray-900"
                      onClick={() => router.push('/')}
                    >
                      <svg
                        className="mr-2 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                      </svg>
                      Home
                    </a>
                  </Link>
                </li>
                <li>/ {pathRoute}</li>
              </ol> */}
            </nav>
            <div className='text-center'>
              <img
                className='inline-block'
                src='images/peter-millar.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type4 || storeLayout === _Store.type5 || storeLayout === _Store.type8) {
    return (
      <div id='' className='py-3 bg-white tracking-wider px-2 lg:px-0'>
        <div className='container mx-auto'>
          <div className='border-b border-[#f0f0f0] pb-2'>
            <nav
              className='flex flex-wrap justify-between items-center'
              aria-label='Breadcrumb'
            >
              <ol className='inline-flex items-center text-xs text-secondary'>
                {breadCrumbs.map((item, index) => (
                  <li key={index} aria-current='page'>
                    <Link
                      href={item.url}
                      className='inline-flex items-center font-medium text-gray-700 hover:text-gray-900'
                    >
                      <a className='inline-flex items-center font-medium text-gray-700 hover:text-gray-900'>
                        <div className='flex items-center'>
                          {index > 0 && <span className='ml-1'>/</span>}
                          <span className='ml-1 md:ml-2 text-gray-500'>
                            {item.name}
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                ))}
              </ol>
              <div className='hidden md:inline-block'>
                <img src='images/adidas.png' alt='' />
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};

export default BreadCrumb;
