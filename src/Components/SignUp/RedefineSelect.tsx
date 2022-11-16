import { ErrorMessage } from 'formik';
import React from 'react';

interface _props {
  label: string;
  placeHolder: string;
  name: string;
  value: string | number;
  options: {
    name: string;
    id: number;
  }[];
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  required: boolean;
}

const RedefineSelect: React.FC<_props> = ({
  label,
  name,
  options,
  onChange,
  required,
  value,
}) => {
  return (
    <div className="w-full lg:w-1/2 px-3">
      <label
        htmlFor={name}
        className="block text-base font-medium text-gray-700"
      >
        {label}
        <span className="text-rose-500">{`${required ? `*` : ''}`}</span>
      </label>
      <div className="mt-1">
        <select
          className="form-input"
          id={name}
          onChange={onChange}
          value={value}
        >
          {options?.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
      <ErrorMessage name={name} />
    </div>
  );
};

export default RedefineSelect;
