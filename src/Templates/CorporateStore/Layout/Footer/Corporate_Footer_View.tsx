import { useTypedSelector } from 'hooks';
import React from 'react';
interface _props {}

// If footer will come from api in all stores then this components should move to common folder
const Corporate_Footer: React.FC<_props> = () => {
  const storeLayout = useTypedSelector((state) => state.store.layout);

  const footerDetails = useTypedSelector(
    (state) => state.store.configs.footer?.config_value,
  );

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: footerDetails || '' }}></div>
    </>
  );
};

export default Corporate_Footer;
