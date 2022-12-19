import { useRouter } from 'next/router';
import { __domain } from 'page.config';
import React, { useState } from 'react';

interface _props {
  content:
    | {
        layoutType: string;
        domain: string;
        layoutName: string;
      }[]
    | null;
}

const DomainDropDown: React.FC<_props> = ({ content }) => {
  const [focus, setFocus] = useState(false);
  const router = useRouter();

  const handleDomainChange = (domain: string) => {
    setFocus(false);
    if (__domain.isSiteLive === false) {
      router.query._DOMAIN = domain;
      router.push(router);
      return;
    }
    location.host = domain;
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
      <div className="text-white hover:text-white">Domain</div>
      {focus && (
        <div
          className="absolute right-0 top-full bg-white w-screen max-w-[250px] z-50"
          onMouseOver={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
        >
          <ul className="border-2 border-black">
            {content.map((item) => (
              <li
                key={item.layoutName}
                className="border-t text-black border-t-gray-300"
              >
                <button
                  onClick={() => handleDomainChange(item.domain)}
                  className="p-2 block"
                >
                  {item.layoutName}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DomainDropDown;
