import { _Store } from 'page.config';
import React from 'react';

interface _props {
  note: string;
}

const ProductNote: React.FC<_props & { storeCode: string }> = ({
  note,
  storeCode,
}) => {
  if (storeCode === _Store.type3) {
    return <div className="" dangerouslySetInnerHTML={{ __html: note }} />;
  }
  return <></>;
};

export default ProductNote;
