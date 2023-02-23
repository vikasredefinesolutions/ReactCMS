import { capitalizeFirstLetter } from 'helpers/common.helper';
import Link from 'next/link';
import BrandController from '../BrandController';

const Stroe1LayouBrand = ({
  brands,
  alphabets,
}: {
  brands: {
    id: number;
    brandName: string;
    seName: string;
    brandColorImageUrl: string;
  }[];
  alphabets: string[];
}) => {
  const {
    alphabets: alphabts,
    currentTab,
    setCurrentTab,
    getTabColor,
    setShowLoader,
  } = BrandController();

  return (
    <>
      <section className='relative pt-20 overflow-hidden bg-primary white-all pb-20'>
        <div className='flex justify-center items-center flex-wrap'>
          <div className='container'>
            <div className='flex justify-center flex-wrap items-center sm:max-w-[700px] mx-auto'>
              <div className='sm:mb-2 lg:mb-1 sm:border-r lg:pr-1 pl-1 lg:max-w-[340px] w-full grow text-sub-title'>
                <h1>
                  Better Brand Inventory, Easier Customization, and Superior
                  Branded Results
                </h1>
              </div>
              <div className='lg:ml-5 lg:max-w-[340px] ml-2 w-full text-default-text'>
                Your top-name, brand-favorites, customized with your brand logo
                and text. Customization for every occasion: corporate apparel,
                promotional products, company clothing, and corporate gifts.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='relative pt-20'>
        <div className='overflow-x-hidden'>
          <div className='w-full'>
            <div className='mb-3 text-center'>
              <span className='material-icons text-[40px] text-primary'>
                local_offer
              </span>
            </div>
            <div className='my-3 text-title text-center'>
              <h2>Shop Your Favorite Brands by Category</h2>
            </div>
            <div className=''>
              <div
                x-data="{activeTab:01, activeClass: 'tab py-2 mr-1 px-2 block hover:text-[#006CD1] focus:outline-none text-[#006CD1] border-b-2 font-medium border-[#006CD1]', inactiveClass : 'tab text-gray-600 py-2 px-2 block hover:text-[#006CD1] focus:outline-none mr-1 rounded-sm font-medium border-slate-300 hover:border-[#006CD1]' }"
                className='w-full'
              >
                <ul className='w-full flex justify-center max-w-4xl mx-auto flex-wrap'>
                  <li className=''>
                    <a
                      className={`bg-[${getTabColor()}] h-2 w-24 my-2 inline-block`}
                    ></a>
                  </li>
                </ul>
                <ul className='w-full flex justify-center max-w-4xl mx-auto flex-wrap'>
                  <li className='mr-0.5 md:mr-0 font-semibold'>
                    <a
                      className={`tab py-2 mr-1 px-2 block font-medium${
                        currentTab === 0
                          ? ' border-b-2 font-medium border-[#006CD1]'
                          : ''
                      }`}
                      onClick={() => setCurrentTab(0)}
                    >
                      Featured
                    </a>
                  </li>
                  <li className='mr-0.5 md:mr-0 font-semibold'>
                    <a
                      className={`tab py-2 mr-1 px-2 block font-medium${
                        currentTab === 1
                          ? ' border-b-2 font-medium border-[#006CD1]'
                          : ''
                      }`}
                      onClick={() => setCurrentTab(1)}
                    >
                      Outerwear
                    </a>
                  </li>
                  <li className='mr-0.5 md:mr-0 font-semibold'>
                    <a
                      className={`tab py-2 mr-1 px-2 block font-medium${
                        currentTab === 2
                          ? ' border-b-2 font-medium border-[#006CD1]'
                          : ''
                      }`}
                      onClick={() => setCurrentTab(2)}
                    >
                      Golf
                    </a>
                  </li>
                  <li className='mr-0.5 md:mr-0 font-semibold'>
                    <a
                      className={`tab py-2 mr-1 px-2 block font-medium${
                        currentTab === 3
                          ? ' border-b-2 font-medium border-[#006CD1]'
                          : ''
                      }`}
                      onClick={() => setCurrentTab(3)}
                    >
                      Sporting Goods
                    </a>
                  </li>
                  <li className='mr-0.5 md:mr-0 font-semibold'>
                    <a
                      className={`tab py-2 mr-1 px-2 block font-medium${
                        currentTab === 4
                          ? ' border-b-2 font-medium border-[#006CD1]'
                          : ''
                      }`}
                      onClick={() => setCurrentTab(4)}
                    >
                      Accessories
                    </a>
                  </li>
                </ul>
                <div className='container mx-auto'>
                  <div className='w-full text-center mx-auto max-w-6xl py-10'>
                    {currentTab === 0 && (
                      <div
                        x-show='activeTab === 01'
                        className='panel-01 tab-content'
                      >
                        <div className=' w-full'>
                          <div className='flex flex-wrap -mx-3 gap-y-6'>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#ffa400] hover:bg-[#f18a00] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/patagonia.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/patagonia.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#ffa400] hover:bg-[#f18a00] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/nike.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/nike.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#ffa400] hover:bg-[#f18a00] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/peter-millar.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/peter-millar.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#ffa400] hover:bg-[#f18a00] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/yeti.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/yeti.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#ffa400] hover:bg-[#f18a00] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/the-north-face.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/the-north-face.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#ffa400] hover:bg-[#f18a00] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/helly-hansen.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/HH.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#ffa400] hover:bg-[#f18a00] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/southern-tide.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/sourthen-tide.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#ffa400] hover:bg-[#f18a00] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/johnnie-o.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/johnnie-o.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentTab === 1 && (
                      <div
                        x-show='activeTab === 02'
                        className='panel-01 tab-content'
                      >
                        <div className=' w-full'>
                          <div className='flex flex-wrap -mx-3 gap-y-6'>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#00ce7c] hover:bg-[#00a98f] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/stio.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/stio.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#00ce7c] hover:bg-[#00a98f] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/carhartt.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/carhartt.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#00ce7c] hover:bg-[#00a98f] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/marine-layer.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/marine-layer.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#00ce7c] hover:bg-[#00a98f] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/columbia.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/columbia.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#00ce7c] hover:bg-[#00a98f] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/marmot.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/marmot.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#00ce7c] hover:bg-[#00a98f] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/charles-river-apparel.html?sort='
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/charles-river.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#00ce7c] hover:bg-[#00a98f] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/berne-apparel.html?sort=high&v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/berne.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#00ce7c] hover:bg-[#00a98f] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/eddie-bauer.html?v=brand-product-list '
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/eddie-bauer.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {currentTab === 2 && (
                      <div
                        x-show='activeTab === 03'
                        className='panel-01 tab-content'
                      >
                        <div className=' w-full'>
                          <div className='flex flex-wrap -mx-3 gap-y-6'>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#00b2e3] hover:bg-[#4197cb] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/footjoy.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/fj.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#00b2e3] hover:bg-[#4197cb] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/titleist.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/titleist.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#00b2e3] hover:bg-[#4197cb] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/galvin-green.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/galvin-green.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#00b2e3] hover:bg-[#4197cb] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/callaway-golf.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/callaway.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#00b2e3] hover:bg-[#4197cb] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/fairway-greene.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/fairway-greene.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#00b2e3] hover:bg-[#4197cb] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/taylormade.html?sort=high&v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/taylor-made.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#00b2e3] hover:bg-[#4197cb] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/zero-restriction.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/zero-restriction.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#00b2e3] hover:bg-[#4197cb] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/travis-mathew.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/travis-mathes.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {currentTab === 3 && (
                      <div
                        x-show='activeTab === 04'
                        className='panel-01 tab-content'
                      >
                        <div className=' w-full'>
                          <div className='flex flex-wrap -mx-3 gap-y-6'>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#003a70] hover:bg-[#19355e] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/adidas.html?sort=&v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/adidas.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#003a70] hover:bg-[#19355e] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/lacoste.html?sort='
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/lacoste.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#003a70] hover:bg-[#19355e] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/under-armour.html?sort=&v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/under-armour.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#003a70] hover:bg-[#19355e] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/bauer.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/bauer.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#003a70] hover:bg-[#19355e] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/next-level.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/next-level.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#003a70] hover:bg-[#19355e] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/sport-tek.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/sport-tek.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#003a70] hover:bg-[#19355e] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/new-era.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/new-era.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#003a70] hover:bg-[#19355e] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/puma.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/puma.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {currentTab === 4 && (
                      <div
                        x-show='activeTab === 05'
                        className='panel-01 tab-content'
                      >
                        <div className=' w-full'>
                          <div className='flex flex-wrap -mx-3 gap-y-6'>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#0a2240] hover:bg-[#09172d] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/tile.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/tile.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#0a2240] hover:bg-[#09172d] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/knack.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/knack.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#0a2240] hover:bg-[#09172d] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/bose.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/bose.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#0a2240] hover:bg-[#09172d] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/ember.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/ember.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#0a2240] hover:bg-[#09172d] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/moleskine.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/moleskine.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#0a2240] hover:bg-[#09172d] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/swell.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/swell.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#0a2240] hover:bg-[#09172d] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/cross.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/cross.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='w-full lg:w-1/4 px-3'>
                              <div className='border border-gray-50 bg-[#0a2240] hover:bg-[#09172d] relative'>
                                <div className='flex justify-center items-center'>
                                  <a
                                    title=''
                                    target=''
                                    href='https://www.corporategear.com/spyder.html?v=brand-product-list'
                                  >
                                    <img
                                      className='w-full mx-auto'
                                      src='images/brands-img/spyder.png'
                                      alt=''
                                      title=''
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className='text-default-text text-center max-w-3xl mx-auto'>
                    Jumpstart your creativity and shop by brand category. Browse
                    your favorite brands for corporate apparel and gear. From
                    company jackets, polos, custom longsleeve shirts to brand
                    logo t-shirts, you'll find it here. Or, customize tumblers,
                    hats, backpacks, coolers, and electronics on premium,
                    popular brands.
                  </div>
                </div>
                <ul className='w-full flex justify-center flex-wrap mt-10'>
                  <li className='lg:w-1/5 w-full'>
                    <a
                      data-bg='#ffa400'
                      className='bg-[#ffa400] hover:bg-[#f18a00] block py-4 px-10 text-center font-semibold hover:text-[#000000]'
                    >
                      Featured
                    </a>
                  </li>
                  <li className='lg:w-1/5 w-full'>
                    <a
                      data-bg='#00ce7c'
                      className='bg-[#00ce7c] hover:bg-[#00a98f] block py-4 px-10 text-center font-semibold hover:text-[#000000]'
                    >
                      Outerwear
                    </a>
                  </li>
                  <li className='lg:w-1/5 w-full'>
                    <a
                      data-bg='#00b2e3'
                      className='bg-[#00b2e3] hover:bg-[#4197cb] block py-4 px-10 text-center font-semibold hover:text-[#000000]'
                    >
                      Golf
                    </a>
                  </li>
                  <li className='lg:w-1/5 w-full'>
                    <a
                      data-bg='#003a70'
                      className='bg-[#003a70] hover:bg-[#19355e] block py-4 px-10 text-center text-white font-semibold hover:text-[#ffffff]'
                    >
                      Sporting Goods
                    </a>
                  </li>
                  <li className='lg:w-1/5 w-full'>
                    <a
                      data-bg='#0a2240'
                      className='bg-[#0a2240] hover:bg-[#09172d] block py-4 px-10 text-center text-white font-semibold hover:text-[#ffffff]'
                    >
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='relative pt-20'>
        <div className='px-4 mx-auto container'>
          <div className='w-full flex flex-wrap gap-y-8'>
            <div className='lg:w-2/12 W-full'>
              <div className='sm:sticky sm:top-32' id='list-id'>
                <div className='text-title pb-8'>
                  <span className="relative pb-4 after:contents[' '] after:bottom-0 after:left-0 after:absolute after:w-[60px] after:h-[6px] after:bg-black">
                    Brands
                  </span>
                </div>
                <div className='flex flex-wrap gap-2 gap-x-5'>
                  <a
                    title='##'
                    className='text-sub-title border-b border-white hover:text-primary hover:border-primary opacity-50 cursor-not-allowed'
                  >
                    #
                  </a>
                  {alphabts.map((str, index) => {
                    return (
                      <a
                        key={index}
                        title='#D'
                        className={`text-sub-title border-b border-white hover:text-primary hover:border-primary${
                          alphabets.includes(str)
                            ? ''
                            : ' opacity-50 cursor-not-allowed'
                        }`}
                      >
                        {str.toUpperCase()}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className='lg:w-8/12 W-full'>
              <div className='flex flex-wrap lg:mx-10 bg-gray-100 py-10 lg:px-6 gap-y-10'>
                {alphabts.map((str) => {
                  const brandFiltered = brands.filter(
                    (brand) => brand.brandName[0].toLowerCase() === str,
                  );
                  return brandFiltered.length > 0 ? (
                    <div className='w-full px-3'>
                      <div className='text-sub-title mb-2' id='A'>
                        {str.toUpperCase()}
                      </div>
                      <div className='flex flex-wrap gap-x-5 gap-y-2'>
                        {brandFiltered.map((brand, index) => (
                          <div key={index} className=''>
                            <Link
                              title={capitalizeFirstLetter(brand.brandName)}
                              className='text-anchor hover:text-anchor-hover'
                              href={`/${brand.seName}.html`}
                            >
                              <a onClick={() => setShowLoader(true)}>
                                {capitalizeFirstLetter(brand.brandName)}
                              </a>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <></>
                  );
                })}
              </div>
            </div>
            <div className='lg:w-2/12 W-full pt-10'>&nbsp;</div>
          </div>
        </div>
      </section>
      <section className='relative pt-20 overflow-hidden'>
        <img src='images/brands-img/faq-bg.png' alt='' className='w-full' />
        <div className='flex justify-center items-center flex-wrap'>
          <div className='container'>
            <div className='absolute top-[40%] left-0 right-0 text-center'>
              <div className='flex justify-center items-center max-w-4xl mx-auto'>
                <div className='text-title'>Brand FAQ</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stroe1LayouBrand;
