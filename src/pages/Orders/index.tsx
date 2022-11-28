import { NextPage } from 'next';

const Orders: NextPage = () => {
  return (
    <section className="container mx-auto  bg-gray-100  px-6 py-6 mt-5 mb-5">
      <div className="mx-auto space-y-10 sm:px-4 lg:px-0 pb-2">
        <div className="bg-white border-t border-b border-gray-200 sm:border">
          <div className="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6 bg-gray-50">
            <div className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-4 sm:grid-cols-4 lg:col-span-2">
              <div>
                <dt className="text-gray-900 font-semibold uppercase">
                  ORDER NUMBER
                </dt>
                <dd className="mt-1 text-gray-900">WEB-S05654123</dd>
              </div>
              <div className="hidden sm:block">
                <dt className="text-gray-900 font-semibold uppercase">
                  DATE OF ORDER
                </dt>
                <dd className="mt-1 text-gray-900">
                  <time>May 19, 2022</time>
                </dd>
              </div>
              <div>
                <dt className="text-gray-900 font-semibold uppercase">
                  TOTAL PRICE
                </dt>
                <dd className="mt-1 font-semibold text-gray-900">$1290.97</dd>
              </div>
            </div>
            <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
              <a href="my-order-detail.html" className="btn btn-primary">
                <span>View Order Details</span>
              </a>
            </div>
          </div>
          <ul role="list" className="divide-y divide-gray-200 ">
            <li className="p-4 sm:p-6 lg:grid lg:grid-cols-2">
              <div className="sm:flex sm:justify-center">
                <div className="lg:flex-shrink-0 sm:w-52 sm:h-52 w-full h-auto overflow-hidden rounded-lg text-center">
                  <img
                    src="images/1040623_25528_sth.jpg"
                    alt=""
                    className="max-h-full"
                  />
                </div>
                <div className="flex-1 sm:ml-6 sm:mt-0 mt-6 text-sm text-center sm:text-left">
                  <div className="font-bold text-xl">
                    Patagonia Men's Better Sweater Jacket
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold">SIZE : </span> Misc
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold">COLOR : </span> Stonewash
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold">LOGO NAME : </span>{' '}
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold">LOGO NUMBER : </span>{' '}
                  </div>
                </div>
              </div>
            </li>
            <li className="p-4 sm:p-6 lg:grid lg:grid-cols-2">
              <div className="sm:flex sm:justify-center">
                <div className="lg:flex-shrink-0 sm:w-52 sm:h-52 w-full h-auto overflow-hidden rounded-lg text-center">
                  <img
                    src="images/1040623_25528_sth.jpg"
                    alt=""
                    className="max-h-full"
                  />
                </div>
                <div className="flex-1 sm:ml-6 sm:mt-0 mt-6 text-sm text-center sm:text-left">
                  <div className="font-bold text-xl">
                    Patagonia Men's Better Sweater Jacket
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold">SIZE : </span> Misc
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold">COLOR : </span> Stonewash
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold">LOGO NAME : </span>{' '}
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold">LOGO NUMBER : </span>{' '}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white border-t border-b border-gray-200 sm:border">
          <div className="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6 bg-gray-50">
            <div className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-4 sm:grid-cols-4 lg:col-span-2">
              <div>
                <dt className="text-gray-900 font-semibold uppercase">
                  ORDER NUMBER
                </dt>
                <dd className="mt-1 text-gray-900">WEB-S05654123</dd>
              </div>
              <div className="hidden sm:block">
                <dt className="text-gray-900 font-semibold uppercase">
                  DATE OF ORDER
                </dt>
                <dd className="mt-1 text-gray-900">
                  <time>May 19, 2022</time>
                </dd>
              </div>
              <div>
                <dt className="text-gray-900 font-semibold uppercase">
                  TOTAL PRICE
                </dt>
                <dd className="mt-1 font-semibold text-gray-900">$1290.97</dd>
              </div>
            </div>
            <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
              <a href="my-order-detail.html" className="btn btn-primary">
                <span>View Order Details</span>
              </a>
            </div>
          </div>
          <ul role="list" className="divide-y divide-gray-200 ">
            <li className="p-4 sm:p-6 lg:grid lg:grid-cols-2">
              <div className="sm:flex sm:justify-center">
                <div className="lg:flex-shrink-0 sm:w-52 sm:h-52 w-full h-auto overflow-hidden rounded-lg text-center">
                  <img
                    src="images/1040623_25528_sth.jpg"
                    alt=""
                    className="max-h-full"
                  />
                </div>
                <div className="flex-1 sm:ml-6 sm:mt-0 mt-6 text-sm text-center sm:text-left">
                  <div className="font-bold text-xl">
                    Patagonia Men's Better Sweater Jacket
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold">SIZE : </span> Misc
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold">COLOR : </span> Stonewash
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold">LOGO NAME : </span>{' '}
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold">LOGO NUMBER : </span>{' '}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Orders;
