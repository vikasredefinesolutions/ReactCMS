import Image from 'appComponents/reUsable/Image';
import { _modals } from 'definations/product.type';
import { useTypedSelector } from 'hooks';
import React from 'react';
interface _props {
  // eslint-disable-next-line no-unused-vars
  modalHandler: (val: null | _modals) => void;
}

const AvailableInventoryModal: React.FC<_props> = ({ modalHandler }) => {
  const {
    colors,
    brand,
    name: productName,
    inventory,
    sizes,
  } = useTypedSelector((state) => state.product.product);

  return (
    <div
      onClick={() => modalHandler(null)}
      id="availableinventoryModal"
      className=" overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
    >
      <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="relative px-4 w-full max-w-3xl h-full md:h-auto">
          <div className="relative bg-gray-200 shadow max-h-screen overflow-y-auto">
            {/* <!-- <div className="flex justify-between items-start p-5 rounded-t border-b sticky top-0 left-0 bg-white">
                    <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl">
                        Patagonia Men's Better Sweater Jacket
                    </h3>
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="availableinventoryModal">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div> --> */}
            <div className="px-4 lg:px-10 bg-blue-900 text-white">
              <div className="flex flex-wrap items-center justify-between py-6">
                <div className="pl-8">
                  <Image src={brand!.url} alt="" className={''} />
                </div>
                <div className="uppercase font-semibold flex flex-wrap items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    className=" w-6 h-6 mr-1"
                    viewBox="0 0 48 48"
                  >
                    <path d="M23.55 9.4Q24.45 9.4 25.1 8.75Q25.75 8.1 25.75 7.2Q25.75 6.3 25.1 5.65Q24.45 5 23.55 5Q22.65 5 22 5.65Q21.35 6.3 21.35 7.2Q21.35 8.1 22 8.75Q22.65 9.4 23.55 9.4ZM21.55 41.3H9Q7.8 41.3 6.9 40.4Q6 39.5 6 38.3V9.2Q6 8 6.9 7.1Q7.8 6.2 9 6.2H18.25Q18.55 4.55 20.05 3.275Q21.55 2 23.55 2Q25.55 2 27.075 3.275Q28.6 4.55 28.85 6.2H38.1Q39.3 6.2 40.2 7.1Q41.1 8 41.1 9.2V19.35H38.1V9.2Q38.1 9.2 38.1 9.2Q38.1 9.2 38.1 9.2H32.8V15.7H14.3V9.2H9Q9 9.2 9 9.2Q9 9.2 9 9.2V38.3Q9 38.3 9 38.3Q9 38.3 9 38.3H21.55ZM31 40.05 23 32.05 25.15 29.9 31 35.75 42.95 23.8 45.1 25.95Z" />
                  </svg>
                  <span className="">Available Inventory</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl bg-white p-4 px-8 border-b border-neutral-200">
                {productName}
              </h3>
            </div>
            <div className="p-4 pb-2 lg:pb-4 lg:p-10 pt-0 lg:pt-0 bg-gray-200">
              <div className="overflow-x-auto max-h-screen bg-white">
                <table
                  cellPadding="0"
                  cellSpacing="0"
                  className="table-auto w-full text-xs text-center text-[#191919]"
                >
                  <thead className="text-xs font-semibold border-b border-neutral-200">
                    <tr className="divide-x divide-slate-200">
                      <th className="px-2 py-4 w-32">
                        <div className="">Color</div>
                      </th>
                      {sizes.split(',').map((size) => (
                        <th className="px-2 py-4" key={size}>
                          <div className="">{size}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {colors?.map((color) => (
                      <tr
                        className="divide-x divide-slate-200"
                        key={color.attributeOptionId}
                      >
                        <>
                          <td className="px-2 py-3">
                            <div className="w-10 mx-auto mb-1 border border-slate-200">
                              <Image
                                src={color.imageUrl}
                                alt={color.altTag}
                                className=""
                              />
                            </div>
                            <div className="">{color.name}</div>
                          </td>
                          {sizes.split(',').map((size, index) => {
                            const foundIt = inventory?.inventory.find(
                              (int) =>
                                int.name === size &&
                                int.colorAttributeOptionId ===
                                  color.attributeOptionId,
                            );
                            if (foundIt) {
                              return (
                                <td key={index} className="px-2 py-3">
                                  <div className="">
                                    {foundIt.inventory === 0
                                      ? foundIt.futureInventory || '-'
                                      : foundIt.inventory}
                                  </div>
                                </td>
                              );
                            }
                            return <></>;
                          })}
                        </>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex items-center justify-end p-4 lg:p-10 pt-0 lg:pt-0">
              <button
                onClick={() => modalHandler(null)}
                type="button"
                className="p-2 px-3 bg-indigo-600 border border-indigo-600 text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableInventoryModal;
