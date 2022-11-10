import { ErrorMessage } from 'formik';
import React from 'react';

interface _props {
  label: string;
  placeHolder: string;
  name: string;
  value: string | number;
  onChange: (
    // eslint-disable-next-line no-unused-vars
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  type: 'text' | 'number' | 'textArea';
  required: boolean;
  containerClass: string;
}

const ProductQuoteRequestInput: React.FC<_props> = ({
  label,
  name,
  placeHolder,
  value,
  onChange,
  type,
  required,
  containerClass,
}) => {
  if (type === 'number' || type === 'text') {
    return (
      <div className={containerClass}>
        <label htmlFor="" className="block text-base font-medium text-gray-700">
          {label}{' '}
          <span className="text-rose-500">{`${required ? `*` : ''}`}</span>
        </label>
        <div className="mt-1">
          <input
            type={type}
            id={name}
            name={name}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
            className="form-input"
          />
        </div>
        <ErrorMessage name={name} className="text-rose-500" component={'p'} />
      </div>
    );
  }

  if (type === 'textArea') {
    return (
      <div className="pt-4 first:pt-0">
        <label htmlFor="" className="block text-base font-medium text-gray-700">
          {label}
        </label>
        <div className="mt-1">
          <textarea
            className="form-input"
            rows={3}
            id={name}
            name={name}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
          ></textarea>
        </div>
        <ErrorMessage name={name} className="text-rose-500" component={'p'} />
      </div>
    );
  }

  return <></>;
};

export default ProductQuoteRequestInput;
