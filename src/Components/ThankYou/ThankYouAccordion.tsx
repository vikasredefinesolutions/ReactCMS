import React from 'react';
import { _ThankYouOrder } from '../../../definations/thankYou.type';
import ThankYouProduct from './ThankYouProduct';
import ThankYouSubTotal from './ThankYouSubTotal';

interface _props {
  order: _ThankYouOrder;
}

const ThankYouAccordion: React.FC<_props> = ({ order }) => {
  return (
    <div className="accordion w-full mb-7" id="accordionExample">
      <div className="accordion-item !rounded-none bg-white border border-gray-300">
        <h2 className="accordion-header mb-0" id="headingOne">
          <button
            className="accordion-button relative flex items-center w-full py-4 px-5 !text-primary text-left bg-white border-0 rounded-none transition focus:outline-none text-2xl"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Detailed Order Reciept :{order.order.id}
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body py-4 px-4">
            <ul
              role="list"
              className="border-b border-gray-900 divide-y divide-gray-300"
            >
              <ThankYouProduct order={order} />
            </ul>
            <ThankYouSubTotal order={order} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouAccordion;
