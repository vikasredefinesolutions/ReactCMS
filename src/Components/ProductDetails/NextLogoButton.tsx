// import { FieldArrayRenderProps } from 'formik';
import { useTypedSelector } from 'hooks';
import React from 'react';

interface _props {
  cIndex: {
    label: string;
    value: number;
    price: 'FREE' | number;
  };
  arrayHelpers: any;
}

const NextLogoButton: React.FC<_props> = ({ cIndex, arrayHelpers }) => {
  const { allowNextLogo } = useTypedSelector(
    (state) => state.product.som_logos,
  );
  const { currency } = useTypedSelector(state => state.store)

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
