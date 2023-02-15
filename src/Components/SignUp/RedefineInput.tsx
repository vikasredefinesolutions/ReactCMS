import { ErrorMessage } from 'formik';
import React, { useState } from 'react';
import EyeButton from './EyeButton';
import InfoButton from './InfoButton';

interface _props {
  label: string;
  placeHolder: string;
  name: string;
  value: string | number;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'number' | 'password' | 'date';
  required: boolean;
}

const RedefineInput: React.FC<_props> = ({
  label,
  name,
  placeHolder,
  value,
  onChange,
  type,
  required,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='w-full lg:w-1/2 px-3'>
      <label
        htmlFor={name}
        className='block text-base font-medium text-gray-700'
      >
        {label}{' '}
        <span className='text-rose-500'>{`${required ? `*` : ''}`}</span>
      </label>
      <div className={`${type === 'password' ? 'relative mb-2' : 'mt-2'} `}>
        <input
          type={showPassword ? 'text' : type}
          id={name}
          name={name}
          placeholder={placeHolder}
          value={value}
          autoComplete='off'
          onChange={onChange}
          className='form-input'
        />
        {type === 'password' ? (
          <>
            <InfoButton />
            <EyeButton
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          </>
        ) : null}
      </div>
      <ErrorMessage name={name} className='text-rose-500' component={'p'} />
    </div>
  );
};

export default RedefineInput;
