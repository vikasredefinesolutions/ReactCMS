import { useActions, useTypedSelector } from 'hooks';
import React, { useState } from 'react';

interface _props {
  content:
    | {
        layoutType: string;
        layoutName: string;
      }[]
    | null;
}

const LayoutDropDown: React.FC<_props> = ({ content }) => {
  const [focus, setFocus] = useState(false);
  const { change_Layout } = useActions();
  const store = useTypedSelector((store) => store.store);

  const handleLayoutChange = (type: string) => {
    setFocus(false);
    change_Layout(type);
  };

  if (content === null) {
    return <></>;
  }
  return (
    <div
      className="relative"
      onMouseOver={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <button className="text-white hover:text-white cursor-pointer">
        Layout
      </button>
      {focus && (
        <div
          className="absolute right-0 top-full bg-white z-50 max-w-[250px]"
          onMouseOver={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
        >
          <ul className="border-2 border-black">
            {content.map((item) => (
              <li
                key={item.layoutName}
                className={`border-t  border-t-gray-300 cursor-pointer ${
                  store?.layout === item.layoutType
                    ? 'bg-primary text-white'
                    : 'text-black'
                }`}
                onClick={() => handleLayoutChange(item.layoutType)}
              >
                <span className="p-2 block">{item.layoutName}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LayoutDropDown;
