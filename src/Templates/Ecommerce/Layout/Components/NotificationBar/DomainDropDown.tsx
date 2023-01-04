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
      <div className="text-white hover:text-white cursor-pointer">Domain</div>
      {focus && (
        <div
          className="absolute right-0 top-full bg-white max-w-[250px] z-50"
          onMouseOver={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
        >
          <ul className="border-2 border-black">
            {content.map((item) => (
              <li
                key={item.layoutName}
                className={`border-t  border-t-gray-300 cursor-pointer ${
                  router?.query?._DOMAIN === item?.domain
                    ? 'bg-primary text-white'
                    : 'text-black'
                }`}
                onClick={() => handleDomainChange(item.domain)}
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

export default DomainDropDown;
