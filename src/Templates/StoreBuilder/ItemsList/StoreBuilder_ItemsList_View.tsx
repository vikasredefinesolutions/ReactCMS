import { GetlAllProductList } from '@type/productList.type';
import React from 'react';
import StoreBuilder_ItemList_Item from './Components/StoreBuilder_ItemList_Item';

interface _props {
  categories:
    | {
        id: number;
        name: string;
        items: GetlAllProductList[] | null;
      }[]
    | null;
}

const StoreBuilder_ItemsList: React.FC<_props> = ({ categories }) => {
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <section id=''>
      <div className='container mx-auto'>
        <div className='bg-white px-3 pt-6'>
          <div className='flex flex-wrap -mx-3 gap-y-6'>
            {categories?.map((category) => {
              if (!category.items) return <></>;
              return (
                <div key={category.id} className='w-full px-3'>
                  <div className='flex justify-between items-center space-x-6 bg-slate-200 p-2'>
                    <div className=''>
                      <div className='font-bold'>{category.name}</div>
                    </div>
                    <div className='text-sm' onClick={scrollToTop}>
                      Return to Top
                    </div>
                  </div>
                  <div aria-labelledby='products-heading' className=''>
                    <h2 id='products-heading' className='sr-only'>
                      Products
                    </h2>
                    <div className='my-6 relative gridlistview' id='gridview'>
                      <div className='relative w-full'>
                        <ul
                          role='list'
                          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
                        >
                          {category.items.map((item, index) => (
                            <StoreBuilder_ItemList_Item
                              key={index}
                              item={item}
                            />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreBuilder_ItemsList;
