import { _LocalStorage } from '@constants/global.constant';
import { paths } from '@constants/paths.constant';
import { _Store } from '@constants/store.constant';
import { useActions, useTypedSelector } from 'hooks';
import Link from 'next/link';
import { useState } from 'react';

const LoggedInMenu = () => {
  const { logInUser } = useActions();
  const { id: loggedIn } = useTypedSelector((state) => state.user);
  const { layout: storeLayout } = useTypedSelector((state) => state.store);
  const [focus, setFocus] = useState(false);

  const logoutHandler = () => {
    logInUser({ id: null });
    localStorage.removeItem(_LocalStorage.userId);
    return;
  };

  const showMenuOrNot = (): boolean => {
    let show = false;

    if (loggedIn) {
      show = true;
    }

    return show;
  };

  if (storeLayout === _Store.type1) {
    return (
      <a>
        {showMenuOrNot() && (
          <div
            className="flex relative"
            onMouseOver={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
          >
            <Link href={paths.loggedInMenu.title}>
              <a className="text-primary hover:text-anchor-hover flex items-center gap-1">
                <span className="text-sm xl:inline-block">User Name</span>
                <svg
                  className="w-6 h-6"
                  x-description="Heroicon name: outline/user"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </a>
            </Link>
            {focus && (
              <div className="text-sm absolute right-0 top-full bg-white z-40 w-48 pt-2">
                <ul className="border-2 border-black">
                  <li className="border-t border-t-gray-300">
                    <Link href={paths.loggedInMenu.order}>
                      <a className="flex p-2 gap-1">
                        <span className="material-icons-outlined">
                          shopping_cart
                        </span>
                        <span className="">Order</span>
                      </a>
                    </Link>
                  </li>
                  <li className="border-t border-t-gray-300">
                    <Link href={paths.loggedInMenu.settings}>
                      <a className="flex p-2 gap-1">
                        <span className="material-icons-outlined">
                          construction
                        </span>
                        <span className="">Account Settings</span>
                      </a>
                    </Link>
                  </li>
                  <li className="border-t border-t-gray-300">
                    <Link href={paths.loggedInMenu.help}>
                      <a className="flex p-2 gap-1">
                        <span className="material-icons-outlined">
                          help_outline
                        </span>
                        <span className="">Help</span>
                      </a>
                    </Link>
                  </li>
                  <li className="border-t-2 border-t-gray-300">
                    <button
                      onClick={() => logoutHandler()}
                      className="flex p-2 gap-1"
                    >
                      <span className="material-icons-outlined">logout</span>
                      <span className="">Sign Out</span>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </a>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <a>
        {showMenuOrNot() && (
          <div
            className="flex relative"
            onMouseOver={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
          >
            <Link href={paths.loggedInMenu.title}>
              <a className="text-gray-600 hover:text-[#CDDE00] flex items-center gap-1">
                <span className="hidden">User Name</span>
                <svg
                  className="w-6 h-6"
                  x-description="Heroicon name: outline/user"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </a>
            </Link>
            {focus && (
              <div className="absolute right-0 top-full border-2 border-black bg-white z-40 w-40">
                <ul className="">
                  <li className="border-t border-t-gray-300">
                    <Link href={paths.loggedInMenu.order}>
                      <a className="flex p-2 gap-1">
                        <span className="material-icons-outlined">
                          shopping_cart
                        </span>
                        <span className="">Order</span>
                      </a>
                    </Link>
                  </li>
                  <li className="border-t border-t-gray-300">
                    <Link href={paths.loggedInMenu.settings}>
                      <a className="flex p-2 gap-1">
                        <span className="material-icons-outlined">
                          construction
                        </span>
                        <span className="">Account Settings</span>
                      </a>
                    </Link>
                  </li>
                  <li className="border-t border-t-gray-300">
                    <Link href={paths.loggedInMenu.help}>
                      <a className="flex p-2 gap-1">
                        <span className="material-icons-outlined">
                          help_outline
                        </span>
                        <span className="">Help</span>
                      </a>
                    </Link>
                  </li>
                  <li className="border-t-2 border-t-gray-300">
                    <button
                      onClick={() => logoutHandler()}
                      className="flex p-2 gap-1"
                    >
                      <span className="material-icons-outlined">logout</span>
                      <span className="">Sign Out</span>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </a>
    );
  }

  if (storeLayout === _Store.type3) {
    return (
      <a>
        {showMenuOrNot() && (
          <div
            className="flex relative"
            onMouseOver={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
          >
            <Link href={paths.loggedInMenu.title}>
              <a className="text-gray-600 hover:text-primary flex items-center gap-1">
                <span className="hidden">USER NAME</span>
                <svg
                  className="w-6 h-6"
                  x-description="Heroicon name: outline/user"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </a>
            </Link>
            {focus && (
              <div className="absolute right-0 top-full border-2 border-black bg-white z-40 w-52">
                <ul className="">
                  <li className="border-t border-t-gray-300">
                    <Link href={paths.loggedInMenu.order}>
                      <a className="flex p-2 gap-1">
                        <span className="material-icons-outlined">
                          shopping_cart
                        </span>
                        <span className="">Order</span>
                      </a>
                    </Link>
                  </li>
                  <li className="border-t border-t-gray-300">
                    <Link href={paths.loggedInMenu.order}>
                      <a className="flex p-2 gap-1">
                        <span className="material-icons-outlined">
                          design_services
                        </span>
                        <span className="">Manage Logo</span>
                      </a>
                    </Link>
                  </li>
                  <li className="border-t border-t-gray-300">
                    <Link href={paths.loggedInMenu.settings}>
                      <a className="flex p-2 gap-1">
                        <span className="material-icons-outlined">
                          construction
                        </span>
                        <span className="">Account Settings</span>
                      </a>
                    </Link>
                  </li>
                  <li className="border-t-2 border-t-gray-300">
                    <button
                      onClick={() => logoutHandler()}
                      className="flex p-2 gap-1"
                    >
                      <span className="material-icons-outlined">logout</span>
                      <span className="">Sign Out</span>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </a>
    );
  }

  if (storeLayout === _Store.type4) {
    return <a>{showMenuOrNot() && <a> MISSING </a>}</a>;
  }

  return (
    <a>
      {showMenuOrNot() && (
        <div
          className="flex relative"
          onMouseOver={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
        >
          <Link
            href={paths.loggedInMenu.title}
            className="text-primary hover:text-anchor-hover flex items-center gap-1"
          >
            <a>
              <span className="text-sm xl:inline-block">User Name</span>
              <svg
                className="w-6 h-6"
                x-description="Heroicon name: outline/user"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </a>
          </Link>
          {focus && (
            <div className="text-sm absolute right-0 top-full bg-white z-40 w-48 pt-2">
              <ul className="border-2 border-black">
                <li className="border-t border-t-gray-300">
                  <Link
                    href={paths.loggedInMenu.order}
                    className="flex p-2 gap-1"
                  >
                    <a>
                      <span className="material-icons-outlined">
                        shopping_cart
                      </span>
                      <span className="">Order</span>
                    </a>
                  </Link>
                </li>
                <li className="border-t border-t-gray-300">
                  <Link
                    href={paths.loggedInMenu.settings}
                    className="flex p-2 gap-1"
                  >
                    <a>
                      <span className="material-icons-outlined">
                        construction
                      </span>
                      <span className="">Account Settings</span>
                    </a>
                  </Link>
                </li>
                <li className="border-t border-t-gray-300">
                  <Link
                    href={paths.loggedInMenu.help}
                    className="flex p-2 gap-1"
                  >
                    <a>
                      <span className="material-icons-outlined">
                        help_outline
                      </span>
                      <span className="">Help</span>
                    </a>
                  </Link>
                </li>
                <li className="border-t-2 border-t-gray-300">
                  <button
                    onClick={() => logoutHandler()}
                    className="flex p-2 gap-1"
                  >
                    <span className="material-icons-outlined">logout</span>
                    <span className="">Sign Out</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </a>
  );
};

export default LoggedInMenu;
