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
  type: 'text' | 'number' | 'password' | 'email';
  required: boolean;
  id: string;
}

const Input: React.FC<_props> = ({
  label,
  name,
  placeHolder,
  value,
  id,
  onChange,
  type,
  required,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className="block text-base font-medium text-gray-700"
        >
          {label}{' '}
          <span className="text-rose-500">{`${required ? `*` : ''}`}</span>
        </label>
      )}
      <div className={`${type === 'password' ? 'relative' : ''} mb-2 `}>
        <input
          type={showPassword ? 'text' : type}
          id={id}
          name={name}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          className="form-input"
        />
        {type === 'password' && (
          <>
            <InfoButton />
            <EyeButton
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          </>
        )}
      </div>
      <ErrorMessage name={name} className="text-rose-500" component={'p'} />
    </>
  );
};

export default Input;
