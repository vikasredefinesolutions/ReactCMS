import { ErrorMessage } from 'formik';
import React from 'react';

interface _props {
  placeHolder: string;
  name: string;
  value: string | number;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'number' | 'password' | 'date';
  required: boolean;
  className: string;
  dateCondition?: string;
}

const RequestInput: React.FC<_props> = ({
  name,
  placeHolder,
  value,
  onChange,
  type,
  required,
  className,
  dateCondition,
}) => {
  return (
    <>
      {/* <!-- <label htmlFor={name} className="block text-base font-medium text-gray-700">{placeHolder}<span className="text-red-500">{required ? "*" : ""}</span></label> --> */}
      <div className=''>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={`${placeHolder} ${required ? '*' : ''}`}
          value={value}
          onChange={onChange}
          className={className}
          min={dateCondition}
        />
        <ErrorMessage name={name} className='text-rose-500' component={'p'} />
      </div>
    </>
  );
};

export default RequestInput;
