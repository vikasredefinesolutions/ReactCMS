import { paths } from '@constants/paths.constant';
import {
  _t_Brands,
  _t_MenuCategory,
  _t_MenuTopic,
} from '@type/APIs/header.res';
import React from 'react';
import Brand from './Brand';
import Category from './Category';
import Custom from './Custom';
import DomainDropDown from './DomainDropDown';
import LayoutDropDown from './LayoutDropDown';
import Topic from './Topic';

// TODO - Remove Layout dropdown & type

interface _layoutDropdown {
  showLayoutsOption: boolean;
  layouts: {
    layoutType: string;
    domain: string;
    layoutName: string;
  }[];
}

// -----------
interface _props {
  content:
    | _t_MenuTopic
    | _t_Brands
    | _t_MenuCategory
    | string
    | null
    | _layoutDropdown;
  type: 'BRANDS' | 'CATEGORY' | 'TOPIC' | 'CUSTOM' | 'LAYOUT_DROPDOWN';
  title: string;
  url: string | null;
}

const MenuItem: React.FC<_props> = ({ type, url, title, content }) => {
  let _titleURL = '/';

  if (url) {
    _titleURL = url;
  }

  if (content === null) {
    return <></>;
  }

  if (typeof content === 'string') {
    return <Custom title={title} url={_titleURL} content={content} />;
  }

  if ('dataType' in content) {
    if (type === 'BRANDS' && content.dataType === 'BRANDS') {
      return <Brand title={title} url={paths.BRAND} content={content.brands} />;
    }

    if (type === 'CATEGORY' && content.dataType === 'CATEGORIES') {
      return (
        <Category title={title} url={_titleURL} content={content.categories} />
      );
    }
  }

  if ('showLayoutsOption' in content) {
    return (
      <>
        <LayoutDropDown content={content.layouts} />
        <DomainDropDown content={content.layouts} />
      </>
    );
  }

  if (type === 'TOPIC') {
    return <Topic title={title} url={_titleURL} />;
  }

  return <>dum</>;
};

export default MenuItem;
