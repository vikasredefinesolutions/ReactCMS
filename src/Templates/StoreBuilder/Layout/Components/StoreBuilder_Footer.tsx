import { _Footer } from '@type/APIs/footer.res';
import React from 'react';

interface _props {
  data: _Footer | null;
}

const StoreBuilder_Footer: React.FC<_props> = ({ data }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: data?.config_value || '' }}></div>
  );
};

export default StoreBuilder_Footer;
