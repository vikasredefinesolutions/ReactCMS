import { ErrorMessage } from 'formik';
import React from 'react';

interface _props {
  label: string;
  placeHolder: string;
  name: string;
  value: string | number;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'number' | 'password';
  required: boolean;
}

const RedefineFwInput: React.FC<_props> = ({
  label,
  name,
  placeHolder,
  value,
  onChange,
  type,
}) => {
  return (
    <div className="w-full lg:w-full px-3">
      <label
        htmlFor={name}
        className="block text-base font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          type={type}
          id={name}
          name={name}
          autoComplete={'off'}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          className="form-input"
        />
      </div>
      <ErrorMessage name={name} className="text-rose-500" component={'p'} />
    </div>
  );
};

export default RedefineFwInput;
