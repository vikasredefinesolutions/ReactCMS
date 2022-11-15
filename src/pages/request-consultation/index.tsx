import { NextPage } from 'next';
import React from 'react';
import RequestConsultationForm from '../../Components/RequestConsultation/RequestConsultationForm';
import RequestFeatures from 'Components/RequestConsultation/RequestFeatures';

const RequestConsultation: NextPage = () => {
  return (
    <section className="container mx-auto border border-gray-300 p-3">
      <div className="flex flex-wrap items-center -mx-3">
        <div className="w-full lg:w-4/12 px-3 text-center">
          <div className="">
            <img
              src="images/1040623_25528_STH.jpg"
              alt=""
              className="w-full object-center object-cover sm:rounded-lg"
            />
          </div>
          <div className="text-lg md:text-xl lg:text-small-title font-small-title">
            <a href="product-page.html">
              Patagonia Men's Better Sweater Jacket
            </a>
          </div>
        </div>
        <RequestConsultationForm />
        <RequestFeatures />
      </div>
    </section>
  );
};

export default RequestConsultation;
