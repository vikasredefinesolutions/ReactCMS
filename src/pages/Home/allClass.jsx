const allClass = () => {
  return (
    <>
      <div className='absolute top-1/2 -translate-y-1/2 left-4 z-10 flex items-center'>
        <button className='bg-light-gray bg-opacity-90 flex justify-center items-center w-10 h-10 rounded-md shadow-md focus:outline-none'>
          <svg
            viewBox='0 0 20 20'
            fill='currentColor'
            className='chevron-left w-10 h-10'
          >
            <path
              fillRule='evenodd'
              d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
      </div>

      <div className='absolute top-1/2 -translate-y-1/2 right-4 z-10 flex items-center'>
        <button className='bg-light-gray bg-opacity-90 flex justify-center items-center w-10 h-10 rounded-md shadow-md focus:outline-none'>
          <svg
            viewBox='0 0 20 20'
            fill='currentColor'
            className='chevron-right w-10 h-10'
          >
            <path
              fillRule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
      </div>

      <iframe
        className='p-0 w-full aspect-[7/3]'
        src={`https://player.vimeo.com/video/?autoplay=1&amp;loop=1&amp;background=1&amp;muted=1`}
        allow='autoplay; encrypted-media'
        frameBorder='0'
      ></iframe>
      <div className='container mx-auto mt-6'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-4 lg:items-start'>
          <div className='col-span-1 grid grid-cols-12 gap-6'>
            <div className='col-span-12 border border-slate-200 relative'>
              <div
                className='main-image max-w-lg mx-auto'
                style='position: relative; overflow: hidden;'
              >
                <img
                  src='http://ystore.us/HTML/RedefineCommerce/Ecom-front/corporategear/images/1040623_25528_STH_large.jpg'
                  alt=''
                  className='w-full object-center object-cover sm:rounded-lg main_image'
                />
                <img
                  role='presentation'
                  alt=''
                  src='http://ystore.us/HTML/RedefineCommerce/Ecom-front/corporategear/images/1040623_25528_STH_large.jpg'
                  className='zoomImg'
                  style='position: absolute; top: -644.341px; left: -91.3086px; opacity: 0; width: 1260px; height: 1726px; border: medium none; max-width: none; max-height: none;'
                />
              </div>
              <div className='sub-image md:absolute md:left-2 md:top-4 md:w-20 md:block'>
                <div className='md:border hover:border-secondary p-1 mb-1 last:mb-0 border-secondary'>
                  <img
                    src='http://ystore.us/HTML/RedefineCommerce/Ecom-front/corporategear/images/1040623_25528_STH.jpg'
                    alt=''
                    className='w-full object-center object-cover'
                  />
                </div>
                <div className='md:border hover:border-secondary p-1 mb-1 last:mb-0 border-slate-200'>
                  <img
                    src='images/1040623_25528_sth_1.jpg'
                    alt=''
                    className='w-full object-center object-cover'
                  />
                </div>
                <div className='md:border hover:border-secondary p-1 mb-1 last:mb-0 border-slate-200'>
                  <img
                    src='http://ystore.us/HTML/RedefineCommerce/Ecom-front/corporategear/images/1040623_25528_sth_2.jpg'
                    alt=''
                    className='w-full object-center object-cover'
                  />
                </div>
                <div className='md:border hover:border-secondary p-1 mb-1 last:mb-0 border-slate-200'>
                  <img
                    src='http://ystore.us/HTML/RedefineCommerce/Ecom-front/corporategear/ images/1040623_25528_sth_3.jpg'
                    alt=''
                    className='w-full object-center object-cover'
                  />
                </div>
              </div>
              <div className='absolute right-2 top-4 w-6 h-6'>
                <img
                  src='images/outline_favorite_border_black_24dp.png'
                  title=''
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='col-span-1 mt-4 md:mt-10 px-2 md:px-4 sm:px-0 sm:mt-16 lg:mt-0'>
            <div className='flex flex-wrap'>
              <div className='w-full md:w-2/3'>
                <h1 className='text-3xl font-semibold text-gray-900'>
                  Patagonia Men's Better Sweater Jacket
                </h1>
                <div className='text-gray-700 pt-1 text-sm'>
                  <span className='font-semibold inline-block w-16'>SKU</span>
                  <span>: 25528</span>
                </div>
                <div className='text-gray-700 pt-1 text-sm'>
                  <span className='font-semibold inline-block w-16'>MSRP</span>
                  <span>: $139.00</span>
                </div>
              </div>
              <div className='w-full md:w-1/3 mt-2 md:text-right text-sm font-semibold text-indigo-500'>
                <a
                  href='request-consultation.html'
                  className='text-indigo-500 underline'
                >
                  Request Consultation and Proof
                </a>{' '}
                &gt;
              </div>
            </div>
            <div>
              <div className='text-sm text-gray-600 bg-primary flex flex-wrap justify-between items-center p-2 md:p-0 md:pl-2 my-2'>
                <span className='text-lg font-bold text-white'>
                  Available Colors:
                </span>
              </div>
              <div className='flex flex-wrap gap-5 text-sm text-center px-2 available-colors'>
                <div className='w-20'>
                  <div className='border-2 border-secondary hover:border-secondary mb-1 last:mb-0'>
                    <img
                      src='images/1040623_25528_STH.jpg'
                      alt=''
                      className='w-full object-center object-cover'
                    />
                  </div>
                  <div className=''>Stonewash</div>
                </div>
                <div className='w-20'>
                  <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                    <img
                      src='images/1040623_25528_STH.jpg'
                      alt=''
                      className='w-full object-center object-cover'
                    />
                  </div>
                  <div className=''>Black</div>
                </div>
                <div className='w-20'>
                  <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                    <img
                      src='images/1040623_25528_STH.jpg'
                      alt=''
                      className='w-full object-center object-cover'
                    />
                  </div>
                  <div className=''>New Navy</div>
                </div>
                <div className='w-20'>
                  <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                    <img
                      src='images/1040623_25528_STH.jpg'
                      alt=''
                      className='w-full object-center object-cover'
                    />
                  </div>
                  <div className=''>Pale Khaki</div>
                </div>
                <div className='w-20'>
                  <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                    <img
                      src='images/1040623_25528_STH.jpg'
                      alt=''
                      className='w-full object-center object-cover'
                    />
                  </div>
                  <div className=''>Nickel w/Forge Grey</div>
                </div>
                <div className='w-20'>
                  <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                    <img
                      src='images/1040623_25528_STH.jpg'
                      alt=''
                      className='w-full object-center object-cover'
                    />
                  </div>
                  <div className=''>Nickel</div>
                </div>
                <div className='w-20 sr-only'>
                  <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                    <img
                      src='images/1040623_25528_STH.jpg'
                      alt=''
                      className='w-full object-center object-cover'
                    />
                  </div>
                  <div className=''>Stonewash</div>
                </div>
                <div className='w-20 sr-only'>
                  <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                    <img
                      src='images/1040623_25528_STH.jpg'
                      alt=''
                      className='w-full object-center object-cover'
                    />
                  </div>
                  <div className=''>Black</div>
                </div>
                <div className='w-20 sr-only'>
                  <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                    <img
                      src='images/1040623_25528_STH.jpg'
                      alt=''
                      className='w-full object-center object-cover'
                    />
                  </div>
                  <div className=''>New Navy</div>
                </div>
                <div className='w-20 sr-only'>
                  <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                    <img
                      src='images/1040623_25528_STH.jpg'
                      alt=''
                      className='w-full object-center object-cover'
                    />
                  </div>
                  <div className=''>Pale Khaki</div>
                </div>
                <div className='w-20 sr-only'>
                  <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                    <img
                      src='images/1040623_25528_STH.jpg'
                      alt=''
                      className='w-full object-center object-cover'
                    />
                  </div>
                  <div className=''>Nickel w/Forge Grey</div>
                </div>
                <div className='w-20 sr-only'>
                  <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                    <img
                      src='images/1040623_25528_STH.jpg'
                      alt=''
                      className='w-full object-center object-cover'
                    />
                  </div>
                  <div className=''>Nickel</div>
                </div>
              </div>
              <div className='text-right'>
                <a
                  href='javascript:void(0);'
                  className=''
                  onclick='seeallcolor(this)'
                >
                  <span className='span1'>See All</span>{' '}
                  <span className='span2'>12</span>{' '}
                  <span className='span3'>Colors</span>
                </a>
              </div>
            </div>
            <div className='mt-3'>
              <h2 className='sr-only'>Product information</h2>
            </div>
            <div>
              <div className='text-sm text-gray-900 bg-primary flex flex-wrap justify-between items-center p-2 md:p-0 md:pl-2 mt-5'>
                <span className='text-lg font-semibold text-white'>
                  Discount Pricing:
                </span>{' '}
                <a
                  href='javascript:void(0);'
                  className='text-white py-1 md:px-2 flex flex-wrap text-sm font-semibold uppercase items-center'
                  data-toggle='collapse'
                  data-target='#minimum-order'
                  id='aMinOrder'
                >
                  <span>MINIMUM ORDER :</span>
                  12 units per color
                </a>
              </div>
              <div className='text-sm text-gray-900 flex flex-wrap justify-between items-center mt-2'>
                <p className=''>
                  <span className='text-lg font-semibold mr-1'>
                    Price: $139.00
                  </span>
                  per item
                </p>
                <a
                  href='javascript:void(0);'
                  className='uppercase items-center'
                  data-toggle='collapse'
                  data-target='#minimum-order'
                  id='aMinOrder'
                >
                  <strong>DISCOUNT PRICING AVAILABLE!</strong>
                </a>
              </div>
              <div className='bg-gray-100 flex flex-wrap text-center border border-gray-300'>
                <div className='hidden md:block text-left'>
                  <div className='p-1 px-2 border-r border-b border-gray-300 font-semibold'>
                    Quantity:
                  </div>
                  <div className='p-1 px-2 border-r border-gray-300 font-semibold'>
                    Price:
                  </div>
                </div>
                <div className='flex flex-wrap text-center grow'>
                  <div className='sm:w-1/5'>
                    <div className='p-1 px-2 border-b border-gray-300'>12+</div>
                    <div className='p-1 px-2'>$139.00</div>
                  </div>
                  <div className='sm:w-1/5'>
                    <div className='p-1 px-2 border-b border-gray-300'>24+</div>
                    <div className='p-1 px-2'>$129.00</div>
                  </div>
                  <div className='sm:w-1/5'>
                    <div className='p-1 px-2 border-b border-gray-300'>48+</div>
                    <div className='p-1 px-2'>$119.00</div>
                  </div>
                  <div className='sm:w-1/5'>
                    <div className='p-1 px-2 border-b border-gray-300'>72+</div>
                    <div className='p-1 px-2'>$109.00</div>
                  </div>
                  <div className='sm:w-1/5'>
                    <div className='p-1 px-2 border-b border-gray-300'>
                      144+
                    </div>
                    <div className='p-1 px-2'>$99.00</div>
                  </div>
                </div>
              </div>
              <div className='mt-3 border border-gray-700 p-2 flex flex-wrap justify-between items-center gap-y-2'>
                <div className='w-full md:w-1/2 text-lg font-bold text-gray-900'>
                  <span className='w-full block'>
                    LOGIN OR CREATE AN ACCOUNT
                  </span>{' '}
                  <span className='w-full block text-base font-normal'>
                    to see discounted pricing on this product.
                  </span>
                </div>
                <div className='w-full md:w-1/2 text-left flex justify-end'>
                  <button
                    data-modal-toggle='LoginModal'
                    type='button'
                    className='btn btn-secondary !flex !py-4 items-center justify-center w-full uppercase'
                  >
                    Login / Create an account
                  </button>
                </div>
              </div>
            </div>
            <div
              className='text-xs p-3 pb-0'
              style='display: none;'
              id='divMinorder'
            >
              We reserve the right to reject orders that do not meet the 12
              piece minimum per style
              <br />
              and color, exceptions may apply for men’s and women’s companion
              styles per color.
            </div>
            <div className='m-3'>
              <button
                type='button'
                className='text-indigo-500 text-sm font-semibold underline'
                data-modal-toggle='availableinventoryModal'
              >
                Check Available Inventory
              </button>
            </div>
            <div className='m-3 flex flex-wrap text-gray-900 justify-between items-center'>
              <div className='text-lg'>
                <span className='font-semibold'>Available Size(s):</span>{' '}
                <span>XS, SM, MD, LG, XL, XXL, 3XL</span>
              </div>
              <div>
                <button
                  type='button'
                  className='text-indigo-500 text-sm font-semibold underline'
                  data-modal-toggle='sizechartModal'
                >
                  Size Chart
                </button>
              </div>
            </div>
            <div className='text-lg m-3'>
              <div className='font-semibold'>Companion Product:</div>
              <div>
                <a
                  href='javascript:void(0);'
                  className='text-indigo-500 text-sm font-semibold underline'
                >
                  Patagonia Women's Better Sweater Jacket
                </a>
              </div>
            </div>
            <div className='mt-3 hidden'>
              <h3 className='sr-only'>Reviews</h3>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  <svg className='h-5 w-5 flex-shrink-0 text-indigo-500'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>{' '}
                  <svg
                    className='h-5 w-5 flex-shrink-0 text-indigo-500'
                    x-state-description='undefined: "text-indigo-500", undefined: "text-gray-300"'
                    x-description='Heroicon name: solid/star'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>{' '}
                  <svg
                    className='h-5 w-5 flex-shrink-0 text-indigo-500'
                    x-state-description='undefined: "text-indigo-500", undefined: "text-gray-300"'
                    x-description='Heroicon name: solid/star'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>{' '}
                  <svg
                    className='h-5 w-5 flex-shrink-0 text-indigo-500'
                    x-state-description='undefined: "text-indigo-500", undefined: "text-gray-300"'
                    x-description='Heroicon name: solid/star'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>{' '}
                  <svg
                    className='h-5 w-5 flex-shrink-0 text-gray-300'
                    x-state-description='undefined: "text-indigo-500", undefined: "text-gray-300"'
                    x-description='Heroicon name: solid/star'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>
                </div>
                <p className='sr-only'>4 out of 5 stars</p>
              </div>
            </div>
            <div className='m-3'>
              <h3 className='font-semibold text-2xl mb-2'>Description</h3>
              <div className='relative text-sm text-gray-700 tracking-widest div_description transition-all pb-8 h-40 overflow-hidden'>
                <div className='pb-3'>
                  <p>
                    Looking for a company gift that your employees will reach
                    for repeatedly? Check out the Patagonia Men's Better Sweater
                    Jacket. This 100% recycled polyester jacket has a
                    sweater-knit aesthetic and is popular with employees of all
                    industries. It's been dyed with a low-impact process that
                    reduces the use of dyestuffs, energy, and water compared to
                    conventional dyeing methods. It's also Fair Trade Certified
                    sewn, so you can feel good about your employee gift. Whether
                    they are wearing it a school or busy hospital, the Patagonia
                    Men's Better Sweater Jacket will be a staple in your
                    employees' attire.
                  </p>
                </div>
                <div className='pb-3'>
                  <p>
                    Looking for a company gift that your employees will reach
                    for repeatedly? Check out the Patagonia Men's Better Sweater
                    Jacket. This 100% recycled polyester jacket has a
                    sweater-knit aesthetic and is popular with employees of all
                    industries. It's been dyed with a low-impact process that
                    reduces the use of dyestuffs, energy, and water compared to
                    conventional dyeing methods. It's also Fair Trade Certified
                    sewn, so you can feel good about your employee gift. Whether
                    they are wearing it a school or busy hospital, the Patagonia
                    Men's Better Sweater Jacket will be a staple in your
                    employees' attire.
                  </p>
                </div>
                <div className='bg-gradient-to-b from-[#fffefe00] to-[#ffffff] absolute bottom-0 left-0 right-0 pt-20 text-center'>
                  <a
                    href='javascript:void(0);'
                    className='text-indigo-500 underline text-sm font-bold'
                    onclick='more_description(this)'
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <form className='mt-6'>
              <div className='mt-10'>
                <button
                  type='button'
                  data-modal-toggle='startorderModal'
                  className='btn btn-xl btn-secondary !flex items-center justify-center w-full uppercase'
                >
                  Start Order
                </button>
              </div>
              <div className='mt-5 text-center'>
                <a
                  href='request-consultation.html'
                  className='text-indigo-500 text-lg font-semibold underline'
                >
                  Or request a free consultation with one of our experts
                </a>
              </div>
            </form>
            <div className='w-full text-center mt-5 py-3 text-sm leading-none'>
              <div className='block xl:inline-block px-3 xl:border-r border-slate-800 border-b border-b-black xl:border-b-0 last:border-b-0 py-2.5 xl:py-0'>
                <div className='w-full xl:w-auto flex flex-wrap justify-center items-center'>
                  <span className='material-icons text-4xl'>
                    local_shipping
                  </span>
                  <div className='ml-2 text-left'>
                    <div className=''>FREE SHIPPING ON</div>
                    <div>ORDERS OVER $4K</div>
                  </div>
                </div>
              </div>
              <div className='block xl:inline-block px-3 border-b border-b-black xl:border-b-0 last:border-b-0 py-2.5 xl:py-0'>
                <div className='w-full xl:w-auto flex flex-wrap justify-center items-center'>
                  <span className='material-icons text-4xl'>style</span>
                  <div className='ml-2 text-left'>
                    <div className=''>1ST LOGO FREE</div>
                    <div>UP TO 10,000 STITCHES</div>
                  </div>
                </div>
              </div>
              <div className='block xl:inline-block px-3 xl:border-l border-slate-800 border-b border-b-black xl:border-b-0 last:border-b-0 py-2.5 xl:py-0'>
                <div className='w-full xl:w-auto flex flex-wrap justify-center items-center'>
                  <span className='material-icons text-4xl'>verified</span>
                  <div className='ml-2 text-left'>
                    <div className=''>FREE PROOF</div>
                    <div>ON ALL ORDERS</div>
                  </div>
                </div>
              </div>
            </div>
            <section aria-labelledby='details-heading' className='mt-12'>
              <h2 id='details-heading' className='sr-only'>
                Additional details
              </h2>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default allClass;
