import { ErrorMessage } from 'formik';
import React from 'react';

interface _props {
  label: string;
  placeHolder: string;
  name: string;
  value: string | number;
  options: {
    name: string;
    id: number | string;
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
  placeHolder,
}) => {
  // console.log('state value from select ', options);
  return (
    <div className='w-full lg:w-1/2 px-3'>
      <label
        htmlFor={name}
        className='block text-base font-medium text-gray-700'
      >
        {label}
        <span className='text-rose-500'>{`${required ? `*` : ''}`}</span>
      </label>
      <div className='mt-1'>
        <select
          className='form-input'
          id={name}
          onChange={onChange}
          value={value}
        >
          <>
            {options.length === 0 ? <option>No State found</option> : ''}
            {/* <option value='' disabled selected>
              {placeHolder}
            </option> */}
            {options?.map((opt) => (
              <option
                key={opt.id}
                value={
                  label == 'State' || label == 'Country' ? opt.id : opt.name
                }
              >
                {opt.name}
              </option>
            ))}
          </>
        </select>
      </div>
      <ErrorMessage name={name} className='text-rose-500' component={'p'} />
    </div>
  );
};

export default RedefineSelect;
