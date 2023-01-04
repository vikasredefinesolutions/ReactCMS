import React from 'react';

const OnePercentSection: React.FC = () => {
  return (
    <div className="bg-[#051c2c] text-white pt-5 pb-[70px] white-link">
      <div className="container mx-auto">
        <div className="w-full lg:grid lg:grid-cols-3">
          <div className="col-span-1 py-2.5 flex flex-wrap items-center justify-center lg:justify-start gap-6">
            <img
              src="../images/footer-bb.png"
              className="inline-block"
              alt=""
            />
            <img
              src="../images/footer-norton.png"
              className="inline-block"
              alt=""
            />
          </div>
          <div className="col-span-1 text-center py-2.5">
            <img
              src="../images/for-planet.png"
              className="inline-block"
              alt=""
            />
          </div>
          <div className="col-span-1 text-center py-2.5">
            <div className="flex flex-wrap justify-center lg:justify-end">
              We Accept :{' '}
              <img
                alt="We Accept"
                src="../images/footer-card.png"
                role="presentation"
                className="ml-2"
              />
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="text-center text-[16px]">{'Redefine'}</div>
          <div className="flex flex-wrap justify-center gap-5 py-2">
            {' '}
            <a title="Privacy &amp; Security">Privacy &amp; Security</a>{' '}
            <a rel="" title="Terms and Conditions">
              Terms &amp; Conditions
            </a>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePercentSection;
