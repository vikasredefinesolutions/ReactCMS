import React from 'react';

import { paths } from '@constants/paths.constant';
import {
  _t_Brands,
  _t_MenuCategory,
  _t_MenuTopic,
} from '@type/APIs/header.res';
import StoreBuilder_BrandItem from './StoreBuilder_BrandItem';
import StoreBuilder_Category from './StoreBuilder_Category';
import StoreBuilder_CustomItem from './StoreBuilder_CustomItem';
import StoreBuilder_Topic from './StoreBuilder_TopicItem';

interface _props {
  content: _t_MenuTopic | _t_Brands | _t_MenuCategory | string | null;
  type: 'BRANDS' | 'CATEGORY' | 'TOPIC' | 'CUSTOM' | 'LAYOUT_DROPDOWN';
  title: string;
  url: string | null;
  view: 'DESKTOP' | 'MOBILE';
}

const StoreBuilder_MenuItem: React.FC<_props> = ({
  type,
  url,
  title,
  content,
  view,
}) => {
  let _titleURL = '/';

  if (url) {
    _titleURL = url;
  }

  if (content === null) {
    return <></>;
  }

  if (typeof content === 'string') {
    return (
      <StoreBuilder_CustomItem
        view={view}
        title={title}
        url={_titleURL}
        content={content}
      />
    );
  }

  if ('dataType' in content) {
    if (type === 'BRANDS' && content.dataType === 'BRANDS') {
      return (
        <StoreBuilder_BrandItem
          title={title}
          url={paths.BRAND}
          view={view}
          content={content.brands}
        />
      );
    }

    if (type === 'CATEGORY' && content.dataType === 'CATEGORIES') {
      return (
        <StoreBuilder_Category
          view={view}
          title={title}
          url={_titleURL}
          content={content.categories}
        />
      );
    }
  }

  if (type === 'TOPIC') {
    return <StoreBuilder_Topic view={view} title={title} url={_titleURL} />;
  }

  return <></>;
};

export default StoreBuilder_MenuItem;
