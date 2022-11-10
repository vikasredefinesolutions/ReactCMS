import React from 'react';
const ProductContactUs: React.FC = () => {
  return (
    <section className="mainsection container mx-auto pt-20 pb-20">
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-lg md:text-xl lg:text-small-title font-small-title text-center mb-8">
          Our approach as an extension of your brand is to help maintain and
          build your brand equity with the right partners in the corporate
          marketplace.
        </div>
        <div className="flex flex-wrap justify-center items-center gap-y-5">
          <div className="w-1/2 md:w-1/3 text-center order-2 md:order-1">
            <div className="bg-[#00ce7c] w-20 h-20 mx-auto mb-2 rounded-full flex items-center justify-center">
              <span className="material-icons-outlined text-4xl">chat</span>
            </div>
            <div className="text-base font-semibold uppercase">Chat</div>
          </div>
          <div className="w-full md:w-1/3 text-center order-1 md:order-2">
            <div className="text-base lg:text-2xl font-semibold uppercase">
              Contact Us
            </div>
          </div>
          <div className="w-1/2 md:w-1/3 text-center order-3 md:order-3">
            <div className="bg-[#00ce7c] w-20 h-20 mx-auto mb-2 rounded-full flex items-center justify-center">
              <span className="material-icons text-4xl">phone</span>
            </div>
            <div className="text-base font-semibold uppercase">Call</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductContactUs;
