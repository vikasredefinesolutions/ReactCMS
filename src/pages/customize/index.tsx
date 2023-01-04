import { getLogoPositionList } from '@services/product.service';
import Image from 'appComponents/reUsable/Image';
import CustomizeLogoSteps from 'Components/CustomizeLogo/CustomizeLogoSteps';
import LogosToPrint from 'Components/CustomizeLogo/LogosToPrint';
import { useActions, useTypedSelector } from 'hooks';
import { NextPage } from 'next';
import { _Store } from 'page.config';
import { useEffect, useState } from 'react';

const CustomizeLogo: NextPage = () => {
  const { clearLogoUploadHistory } = useActions();
  const customerId = useTypedSelector((state) => state.user.id);
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const { sizeQtys } = useTypedSelector((state) => state.product.toCheckout);
  const { name: productName } = useTypedSelector(
    (state) => state.product.product,
  );
  const { color: productColor } = useTypedSelector(
    (state) => state.product.selected,
  );
  const [showOrSelect, setShowOrSelect] = useState<'SHOW' | 'SELECT'>('SELECT');

  useEffect(() => {
    if (customerId) {
      getLogoPositionList(customerId).then((response) => {
        const logos = response.subRow.map((logo) => ({
          label: logo.name,
          value: logo.logoLocationDetailId.toString(),
          logo: {
            url: logo.image,
          },
        }));
        clearLogoUploadHistory(logos);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (storeLayout === _Store.type3) {
    return (
      <section className="mainsection pt-5">
        <div className="container mx-auto">
          <div className="text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title mb-4">
            Apply Logo(s)
          </div>
          <div className="border border-gray-200 p-4 mb-6">
            <div className="flex flex-wrap gap-y-6 -mx-3 mb-6">
              <div className="w-full lg:w-1/5 px-3">
                <div className="relative">
                  <div className="border border-gray-200">
                    <div className="max-w-xl mx-auto">
                      <Image
                        src={productColor.imageUrl}
                        alt={productColor.name}
                        className="max-h-full mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-4/5 px-3">
                <div className="mb-4">
                  <h1 className="text-2xl font-bold mb-4">{productName}</h1>
                  <div className="pb-4 flex items-center">
                    <span className="font-bold inline-block w-24">COLOR</span>
                    <span>{`: ${productColor.name}`}</span>
                  </div>
                  {sizeQtys !== null && (
                    <div className="pb-4 flex items-center">
                      <span className="font-bold inline-block w-24">
                        SIZE / QTY
                      </span>
                      <span>{`: ${sizeQtys[0].size} / ${sizeQtys[0].qty}`}</span>
                    </div>
                  )}
                  {sizeQtys !== null &&
                    sizeQtys.length > 1 &&
                    sizeQtys.map((sizeQty, index) => {
                      if (index === 0) return <></>;
                      return (
                        <div key={index} className="pb-4 flex items-center">
                          <span className="font-bold inline-block w-24"></span>
                          <span>{`: ${sizeQty.size} / ${sizeQty.qty}`}</span>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            {showOrSelect === 'SELECT' && (
              <CustomizeLogoSteps setShowOrSelect={setShowOrSelect} />
            )}
            {showOrSelect === 'SHOW' && (
              <LogosToPrint setShowOrSelect={setShowOrSelect} />
            )}
          </div>
        </div>
      </section>
    );
  }

  return <></>;
};

export default CustomizeLogo;
