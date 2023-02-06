import React from 'react';

interface _props {}

const StoreBuilder_NotificationBar: React.FC<_props> = () => {
  return (
    <div className='text-center text-red-500 py-4'>
      This site can only take orders via Purchase Order. Please make sure you
      are accessing this store from Ariba.
    </div>
  );
};

export default React.memo(StoreBuilder_NotificationBar);
