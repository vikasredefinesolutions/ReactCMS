import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { _Store } from 'constants/store.constant';
import { useActions, useTypedSelector } from 'hooks';

interface _props {
  menuTitle: string;
  menuUrl: string;
}

const Topic: React.FC<_props> = ({ menuTitle, menuUrl }) => {
  const { toggleSideMenu } = useActions();
  const router = useRouter();
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const view = useTypedSelector((state) => state.store.view);

  const [focus, setFocus] = useState<boolean>(false);

  // useEffect(() => {
  //   FetchHeaderTopics({ topicId: id }).then((res) => setTopicMenu(res));
  // }, []);

  if (storeLayout === _Store.type1) {
    if (view === 'MOBILE') {
      return (
        <div className="text-sm border-b border-gray-300">
          <div className="flex items-center justify-between py-3 px-2 pl-8">
            <div className="">
              <button
                onClick={() => {
                  toggleSideMenu('CLOSE');
                  router.push(`/${menuUrl}`);
                }}
                className=""
              >
                {menuTitle}
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (view === 'DESKTOP') {
      return (
        <Link
          href={`/${menuUrl}`}
          className="flex"
          onMouseOver={() => setFocus(true)}
          onMouseOut={() => setFocus(false)}
        >
          <div className="">
            <button
              type="button"
              className={`relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover ${
                focus
                  ? `border-b-primary text-primary-hover`
                  : `border-transparent text-white hover:text-primary-hover`
              }`}
            >
              <span className="uppercase text-primary">{menuTitle}</span>
            </button>
          </div>
        </Link>
      );
    }
  }

  if (storeLayout === _Store.type2) {
    if (view === 'MOBILE') {
      return (
        <div className="text-sm border-b border-gray-300">
          <div className="flex items-center justify-between py-3 px-2 pl-8">
            <div className="">
              <button
                onClick={() => {
                  toggleSideMenu('CLOSE');
                  router.push(`/${menuUrl}`);
                }}
                className=""
              >
                FAQ
              </button>
            </div>
          </div>
        </div>
      );
    }
    if (view === 'DESKTOP') {
      return (
        <div
          className="flex"
          onMouseOver={() => setFocus(true)}
          onMouseOut={() => setFocus(false)}
        >
          <div className="">
            <Link
              href={`/${menuUrl}`}
              type={'button'}
              className={`relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold ${
                focus
                  ? `text-anchor-hover`
                  : `text-gray-700 hover:text-gray-800`
              }`}
            >
              <span className="uppercase text-white">{menuTitle}</span>
            </Link>
          </div>
        </div>
      );
    }
  }

  if (storeLayout === _Store.type3) {
    if (view === 'MOBILE') {
      return (
        <div
          className="text-sm border-b border-gray-300"
          onClick={() => {
            toggleSideMenu('CLOSE');
            router.push(`/${menuUrl}`);
          }}
        >
          <div className="flex items-center justify-between py-3 px-2 pl-8">
            <div className="">
              <button className="">Sale</button>
            </div>
          </div>
        </div>
      );
    }
    if (view === 'DESKTOP') {
      return (
        <div
          className="flex"
          onMouseOver={() => setFocus(true)}
          onMouseOut={() => setFocus(false)}
        >
          <div className="">
            <Link
              href={`/${menuUrl}`}
              type={'button'}
              className="flex items-center transition-colors ease-out duration-200 text-anchor py-2.5"
            >
              <span className="">{menuTitle}</span>
            </Link>
          </div>
        </div>
      );
    }
  }

  if (storeLayout === _Store.type4) {
    if (view === 'MOBILE') {
      return (
        <div
          className="text-sm border-b border-gray-300"
          onClick={() => {
            toggleSideMenu('CLOSE');
            router.push(`/${menuUrl}`);
          }}
        >
          <div className="flex items-center justify-between py-3 px-2 pl-8">
            <div className="">
              <button className="">{menuTitle}</button>
            </div>
          </div>
        </div>
      );
    }
    if (view === 'DESKTOP') {
      return (
        <div
          className="flex"
          onMouseOver={() => setFocus(true)}
          onMouseOut={() => setFocus(false)}
        >
          <div className="">
            <Link
              href={`/${menuUrl}`}
              className={`relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary ${
                focus
                  ? 'border-blue-500 text-anchor-hover'
                  : 'border-transparent text-gray-700 hover:text-gray-800'
              }`}
            >
              <span className="text-white">{menuTitle}</span>
            </Link>
          </div>
        </div>
      );
    }
  }

  return <></>;
};

export default Topic;
