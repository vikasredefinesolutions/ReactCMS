import { ErrorMessage } from 'formik';
import React from 'react';

interface _props {
  placeHolder: string;
  name: string;
  value: string | number;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'number' | 'password';
  required: boolean;
  className: string;
}

const RequestInput: React.FC<_props> = ({
  name,
  placeHolder,
  value,
  onChange,
  type,
  required,
  className,
}) => {
  return (
    <>
      {/* <!-- <label htmlFor={name} className="block text-base font-medium text-gray-700">{placeHolder}<span className="text-red-500">{required ? "*" : ""}</span></label> --> */}
      <div className="">
        <input
          type={type}
          id={name}
          name={name}
          placeholder={`${placeHolder} ${required ? '*' : ''}`}
          value={value}
          onChange={onChange}
          className={className}
        />
        <ErrorMessage name={name} />
      </div>
    </>
  );
};

export default RequestInput;
