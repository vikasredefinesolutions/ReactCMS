import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

const ManageLogo = () => {
  // eslint-disable-next-line no-unused-vars
  const [showAction, setShowAction] = useState(NaN);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    setAnchorEl(e.currentTarget);
    setShowAction(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowAction(NaN);
  };

  return (
    <section className="container mx-auto bg-gray-100 px-6 py-6 mt-5 mb-5">
      <div className="bg-white mt-4 mb-4">
        <div className="overflow-auto max-h-screen border-t border-neutral-200">
          <table className="table-auto w-full text-sm text-[#191919] font-semibold">
            <thead className="text-sm font-bold uppercase text-[#b3b3b3] border-b border-neutral-200">
              <tr>
                <th className="px-2 first:pl-5 py-4">
                  <div className="font-semibold text-left w-32 max-w-sm flex items-center">
                    <span>Logo</span>
                    {/* <div className="flex flex-col pl-2">
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_up
                      </span>
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_down
                      </span>
                    </div> */}
                  </div>
                </th>
                <th className="px-2 first:pl-5 py-4">
                  <div className="font-semibold text-left w-48 flex items-center">
                    <span>Logo Name</span>
                    {/* <div className="flex flex-col pl-2">
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_up
                      </span>
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_down
                      </span>
                    </div> */}
                  </div>
                </th>
                <th className="px-2 first:pl-5 py-4">
                  <div className="font-semibold text-left w-32 max-w-sm flex items-center">
                    <span>Logo Number</span>
                    {/* <div className="flex flex-col pl-2">
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_up
                      </span>
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_down
                      </span>
                    </div> */}
                  </div>
                </th>
                <th className="px-2 first:pl-5 py-4">
                  <div className="font-semibold text-left w-32 max-w-sm flex items-center">
                    <span>Logo Size</span>
                    {/* <div className="flex flex-col pl-2">
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_up
                      </span>
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_down
                      </span>
                    </div> */}
                  </div>
                </th>
                <th className="px-2 first:pl-5 py-4">
                  <div className="font-semibold text-left w-36 max-w-sm flex items-center">
                    <span>Product Type</span>
                    {/* <div className="flex flex-col pl-2">
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_up
                      </span>
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_down
                      </span>
                    </div> */}
                  </div>
                </th>
                <th className="px-2 first:pl-5 py-4">
                  <div className="font-semibold text-left w-36 max-w-sm flex items-center">
                    <span>Logo Location</span>
                    {/* <div className="flex flex-col pl-2">
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_up
                      </span>
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_down
                      </span>
                    </div> */}
                  </div>
                </th>
                <th className="px-2 first:pl-5 py-4">
                  <div className="font-semibold text-left w-32 max-w-sm flex items-center">
                    <span>Upload Date</span>
                    {/* <div className="flex flex-col pl-2">
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_up
                      </span>
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_down
                      </span>
                    </div> */}
                  </div>
                </th>
                <th className="px-2 first:pl-5 py-4">
                  <div className="font-semibold text-left w-36 max-w-sm flex items-center">
                    <span>Approved Date</span>
                    {/* <div className="flex flex-col pl-2">
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_up
                      </span>
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_down
                      </span>
                    </div> */}
                  </div>
                </th>
                <th className="px-2 first:pl-5 py-4">
                  <div className="font-semibold text-left w-32 max-w-sm flex items-center">
                    <span>Status</span>
                    {/* <div className="flex flex-col pl-2">
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_up
                      </span>
                      <span className="material-icons-outlined text-sm h-2 leading-[10px]">
                        keyboard_arrow_down
                      </span>
                    </div> */}
                  </div>
                </th>
                <th className="px-2 first:pl-5 py-4">
                  <div className="font-semibold text-left w-10 flex items-center"></div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-200">
              <tr className="">
                <td className="px-2 first:pl-5 py-3 relative">
                  <div className="w-24 h-24">
                    <img src="images/cg-logo-1.jpg" title="" alt="" />
                  </div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="">BL Logo - 1</div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="">67890</div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="">2 X 2"</div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="w-32 h-32">
                    <img src="images/p-t-1.jpg" title="" alt="" />
                  </div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="w-32 h-32">
                    <img src="images/Right-Chest-70-191.jpg" title="" alt="" />
                  </div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="">April 24, 2022</div>
                  <div className="text-[#707070] text-xs font-normal">
                    10:17 AM
                  </div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="">April 24, 2022</div>
                  <div className="text-[#707070] text-xs font-normal">
                    11:10 AM
                  </div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="text-xs inline-block font-medium border border-green-300 bg-green-100 text-green-600 rounded-md text-center px-2.5 py-1 w-28">
                    Approved
                  </div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="relative" x-data="{ open: false }">
                    <div className="text-right">
                      <button
                        onClick={(e) => openMenu(e, 0)}
                        className="w-6 h-6"
                      >
                        <MoreVertIcon />
                      </button>
                    </div>
                    <Menu
                      anchorEl={anchorEl}
                      open={showAction === 0}
                      className={'pb-3 text-sm'}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                      onClose={handleClose}
                    >
                      <MenuItem
                        onClick={handleClose}
                        className="text-indigo-500 hover:text-indigo-600"
                      >
                        Edit
                      </MenuItem>
                      <MenuItem onClick={handleClose}>Delete</MenuItem>
                      <MenuItem onClick={handleClose}>Approve</MenuItem>
                      <MenuItem onClick={handleClose}>Disapprove</MenuItem>
                    </Menu>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td className="px-2 first:pl-5 py-3 relative">
                  <div className="w-24 h-24">
                    <img src="images/cg-logo-2.jpg" title="" alt="" />
                  </div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="">BL Logo - 2</div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="">67891</div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="">2 X 2"</div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="w-32 h-32">
                    <img src="images/p-t-1.jpg" title="" alt="" />
                  </div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="w-32 h-32">
                    <img src="images/Right-Chest-70-191.jpg" title="" alt="" />
                  </div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="">April 27, 2022</div>
                  <div className="text-[#707070] text-xs font-normal">
                    10:17 AM
                  </div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="">April 27, 2022</div>
                  <div className="text-[#707070] text-xs font-normal">
                    11:10 AM
                  </div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="text-xs inline-block font-medium border border-green-300 bg-green-100 text-green-600 rounded-md text-center px-2.5 py-1 w-28">
                    Approved
                  </div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="relative" x-data="{ open: false }">
                    <div className="text-right">
                      <button className="w-6 h-6">
                        <MoreVertIcon />
                      </button>
                    </div>
                    <div
                      className="dropdown-more z-10 absolute -left-56 top-0 w-60 bg-white border border-neutral-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1 max-h-screen overflow-y-auto"
                      style={{ display: 'none' }}
                    >
                      <ul className="pb-3 text-sm">
                        <li className="pt-3 px-4">
                          <Link
                            href="customer-details.html"
                            className="text-indigo-500 hover:text-indigo-600"
                          >
                            Edit
                          </Link>
                        </li>
                        <li className="pt-3 px-4">
                          <Link
                            href="/"
                            className="text-indigo-500 hover:text-indigo-600"
                          >
                            Delete
                          </Link>
                        </li>
                        <li className="pt-3 px-4">
                          <Link
                            href="/"
                            className="text-indigo-500 hover:text-indigo-600"
                          >
                            Approve
                          </Link>
                        </li>
                        <li className="pt-3 px-4">
                          <Link
                            href="/"
                            className="text-indigo-500 hover:text-indigo-600"
                          >
                            Disapprove
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td className="px-2 first:pl-5 py-3 relative">
                  <div className="w-24 h-24">
                    <img src="images/cg-logo-3.jpg" title="" alt="" />
                  </div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="">BL Logo - 2</div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="">67891</div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="">2 X 2"</div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="w-32 h-32">
                    <img src="images/p-t-1.jpg" title="" alt="" />
                  </div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="w-32 h-32">
                    <img src="images/Right-Chest-70-191.jpg" title="" alt="" />
                  </div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="">April 27, 2022</div>
                  <div className="text-[#707070] text-xs font-normal">
                    10:17 AM
                  </div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className=""></div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="">
                    <Link
                      href="customer-custom-logo-1.html"
                      title=""
                      className="text-indigo-500"
                    >
                      Waiting for Approval
                    </Link>
                  </div>
                </td>
                <td className="px-2 first:pl-5 py-3">
                  <div className="relative" x-data="{ open: false }">
                    <div className="text-right">
                      <button>
                        <MoreVertIcon />
                      </button>
                    </div>
                    <div
                      className="dropdown-more z-10 absolute -left-56 -top-20 w-60 bg-white border border-neutral-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1 max-h-screen overflow-y-auto"
                      style={{ display: 'none' }}
                    >
                      <ul className="pb-3 text-sm">
                        <li className="pt-3 px-4">
                          <Link
                            href="customer-details.html"
                            className="text-indigo-500 hover:text-indigo-600"
                          >
                            Edit
                          </Link>
                        </li>
                        <li className="pt-3 px-4">
                          <Link
                            href="/"
                            className="text-indigo-500 hover:text-indigo-600"
                          >
                            Delete
                          </Link>
                        </li>
                        <li className="pt-3 px-4">
                          <Link
                            href="/"
                            className="text-indigo-500 hover:text-indigo-600"
                          >
                            Approve
                          </Link>
                        </li>
                        <li className="pt-3 px-4">
                          <Link
                            href="/"
                            className="text-indigo-500 hover:text-indigo-600"
                          >
                            Disapprove
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageLogo;
