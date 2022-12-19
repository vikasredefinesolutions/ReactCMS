import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';

interface _props {
  note: string;
}

const ProductNote: React.FC<_props> = ({ note }) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);

  if (storeLayout === _Store.type3) {
    return <div className="" dangerouslySetInnerHTML={{ __html: note }} />;
  }
  return <></>;
};

export default ProductNote;
