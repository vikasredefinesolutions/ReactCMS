import { ErrorMessage } from 'formik';
import React from 'react';
interface _props {
  placeHolder: string;
  name: string;
  value: string | number;
  options: {
    name: string;
    id: string;
  }[];
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  required: boolean;
}
const RequestSelect: React.FC<_props> = ({
  name,
  options,
  onChange,
  required,
  placeHolder,
  value,
}) => {
  return (
    <div className=''>
      <select
        className='form-input'
        id={name}
        onChange={onChange}
        value={value}
      >
        <option value=''>{`${placeHolder} ${required ? '*' : ''}`}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <ErrorMessage name={name} className='text-rose-500' component={'p'} />
    </div>
  );
};

export default RequestSelect;
