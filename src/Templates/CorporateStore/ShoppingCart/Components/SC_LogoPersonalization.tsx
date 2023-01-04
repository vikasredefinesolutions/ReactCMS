import React from 'react';

const SC_LogoPersonalization: React.FC = () => {
  return (
    <>
      {' '}
      <div className="my-5 text-center w-full px-3">
        <a
          href="javascript:void(0);"
          className="btn btn-outline-secondary hover:bg-secondary-hover hover:text-secondarytext-hover"
          //   @click="open = true"
        >
          Personalize Your Item
        </a>
      </div>
      <div
        className="w-full px-3"
        x-show="open"
        // style="display: none"
      >
        <div className="pt-5" x-data="{ fontname : 'Easy Script' }">
          <div className="mb-1 flex items-center gap-2">
            <div className="">Name Personalization Font Examples :</div>
            <div className="" x-text="fontname">
              Easy Script
            </div>
            <span
              data-modal-toggle="NamePersonalizeModal"
              className="material-icons-outlined text-xl leading-none cursor-pointer"
            >
              search
            </span>
          </div>
          <div className="flex flex-wrap -mx-3 gap-y-6 max-w-xl">
            <div className="w-full lg:w-1/3 px-3">
              <div
                className="border-2"
                // :className=" fontname == 'Easy Script' ? 'border-primary' : 'border-transparent'"
                // @click=" fontname = 'Easy Script'"
              >
                <img src="images/script-l.jpg" alt="" />
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-3">
              <div
                className="border-2"
                // :className=" fontname == 'Bookman' ? 'border-primary' : 'border-transparent'"
                // @click=" fontname = 'Bookman'"
              >
                <img src="images/block-serif-l.jpg" alt="" />
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-3">
              <div
                className="border-2"
                // :className=" fontname == 'Micro Sans Serif' ? 'border-primary' : 'border-transparent'"
                // @click=" fontname = 'Micro Sans Serif'"
              >
                <img src="images/block-l.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 flex flex-wrap gap-2 gap-x-8">
          <div className="w-20 h-20">
            <img src="images/logolater.png" alt="" />
          </div>
          <div className="">
            <div className="mb-1">PMS thread colors :</div>
            <div className="flex flex-wrap gap-2">
              <div className="w-8 h-8 border-2 p-1">
                <div className="bg-white w-full h-full"></div>
              </div>
              <div className="w-8 h-8 border-2 p-1">
                <div className="bg-black w-full h-full"></div>
              </div>
              <div className="h-8 border-2 p-1">Custom</div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="font-semibold mb-1">Personalization Location</div>
          <div className="flex flex-wrap gap-4">
            <label>
              <input type="radio" name="personalize_location" checked />
              Chest - Under Logo
            </label>
            <label>
              <input type="radio" name="personalize_location" />
              Right Sleeve
            </label>
          </div>
          <div className="">
            Limit 26 characters (including spaces) for Chest personalization.
          </div>
          <div className="">
            Limit 20 characters (including spaces) for Sleeve personalization.
          </div>
        </div>
        <div className="pt-5">
          <div className="font-semibold mb-1">Personalization Text</div>
          <div className="overflow-auto">
            <table className="w-full border border-gray-300">
              <tbody className="divide-x divide-y divide-gray-300">
                <tr className="divide-x divide-gray-300">
                  <th className="p-2">Item #</th>
                  <th className="p-2">Description</th>
                  <th className="p-2">Color</th>
                  <th className="p-2">Size</th>
                  <th className="p-2">Line 1</th>
                  <th className="p-2">Line 2</th>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
                <tr className="divide-x divide-gray-300">
                  <td className="p-2">25543-PLCN-SM</td>
                  <td className="p-2">
                    Patagonia Women’s Better Sweater Jacket
                  </td>
                  <td className="p-2">Pelican</td>
                  <td className="p-2">SM</td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line one text"
                      type="text"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      maxLength={26}
                      className="form-input inline-block w-40"
                      placeholder="Line Two text"
                      type="text"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4">
          <a
            href="javascript:void(0);"
            className="btn btn-secondary"
            // @click="open = false"
          >
            Save
          </a>
        </div>
      </div>
    </>
  );
};

export default SC_LogoPersonalization;
