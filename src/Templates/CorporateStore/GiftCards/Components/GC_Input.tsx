import React from 'react';

interface _props {
  type: 'text';
  id: string;
  name: string;
  value: string;
  onChange: (val: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const GC_Input: React.FC<_props> = ({
  type,
  id,
  value,
  name,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type={type}
      className="form-input"
      id={id}
      name={name}
      autoComplete={'off'}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default GC_Input;
