// import { FieldArrayRenderProps } from 'formik';
import React from 'react';
import { useActions, useTypedSelector } from 'hooks';

interface _props {
  cIndex: {
    label: string;
    value: number;
    price: 'FREE' | number;
  };
  arrayHelpers: any;
}

const NextLogoButton: React.FC<_props> = ({ cIndex, arrayHelpers }) => {
  const { toggleNextLogoButton } = useActions();
  const { allowNextLogo, currency } = useTypedSelector(
    (state) => state.product.toCheckout,
  );

  const showPrice = (price: 'FREE' | number) => {
    if (price === 'FREE') return `FREE`;
    return `${currency}${price}`;
  };

  return (
    <>
      {allowNextLogo && (
        <div className="">
          <button
            className="text-indigo-600 font-semibold"
            onClick={() => {
              arrayHelpers.push('');
              toggleNextLogoButton(false);
            }}
            type="button"
          >
            {`+ Add ${cIndex.label} Logo`}
          </button>
          {` (Additional ${showPrice(cIndex.price)} per item)`}
        </div>
      )}
    </>
  );
};

export default NextLogoButton;
