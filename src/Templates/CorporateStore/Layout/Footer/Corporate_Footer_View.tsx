import { _Footer } from '@type/APIs/footer.res';
import React from 'react';
interface _props {
  data: _Footer | null;
}

// If footer will come from api in all stores then this components should move to common folder
const Corporate_Footer: React.FC<_props> = ({ data }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: data?.config_value || '' }}></div>
  );
};

export default Corporate_Footer;
