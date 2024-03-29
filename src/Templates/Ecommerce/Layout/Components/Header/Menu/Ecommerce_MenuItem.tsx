import { paths } from '@constants/paths.constant';
import {
  _t_Brands,
  _t_MenuCategory,
  _t_MenuTopic,
} from '@type/APIs/header.res';
import React from 'react';
import Brand from './Ecommerce_BrandItem';
import Category from './Ecommerce_CategoryItem';
import Custom from './Ecommerce_CustomItem';
import Topic from './Ecommerce_TopicItem';

// -----------
interface _props {
  storeCode: string;
  content: _t_MenuTopic | _t_Brands | _t_MenuCategory | string | null;
  type: 'BRANDS' | 'CATEGORY' | 'TOPIC' | 'CUSTOM' | 'LAYOUT_DROPDOWN';
  title: string;
  url: string | null;
}

const MenuItem: React.FC<_props> = ({
  type,
  url,
  title,
  content,
  storeCode,
}) => {
  let _titleURL = '/';

  if (url) {
    _titleURL = url;
  }

  // if (content === null) {
  //   return <></>;
  // }

  if (content !== null && typeof content === 'string') {
    return <Custom title={title} url={_titleURL} content={content} />;
  }

  if (content !== null && 'dataType' in content) {
    if (type === 'BRANDS' && content.dataType === 'BRANDS') {
      return (
        <Brand
          storeCode={storeCode}
          title={title}
          url={paths.BRAND}
          content={content.brands}
        />
      );
    }

    if (type === 'CATEGORY' && content.dataType === 'CATEGORIES') {
      return (
        <Category title={title} url={_titleURL} content={content.categories} />
      );
    }
  }

  if (type === 'TOPIC') {
    return <Topic title={title} url={_titleURL} />;
  }

  return <Topic title={title} url={_titleURL} />;
};

export default MenuItem;
