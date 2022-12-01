import React from 'react';

interface _props {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const EyeButton: React.FC<_props> = ({ showPassword, setShowPassword }) => {
  return (
    <button
      className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-indigo-500 transition-colors"
      onClick={() => setShowPassword((state) => !state)}
      type="button"
    >
      <span
        className={`material-icons-outlined text-lg mdi-${
          showPassword ? 'eye-outline' : 'eye-off-outline'
        }`}
      >
        visibility
      </span>
    </button>
  );
};

export default EyeButton;
