import React, { useEffect, useState } from 'react';
import {
  _MenuCategory,
  _MenuTopic,
  _StoreMenu,
} from 'definations/APIs/header.res';
import { useActions, useTypedSelector } from 'hooks';
import { FetchMenuCategories, FetchMenuTopics } from 'services/header.service';
import Category from './Category';
import Custom from './Custom';
import Topic from './Topic';
import Brand from './Brand';
interface _props {
  screen: 'MOBILE' | 'DESKTOP';
  // menu: _StoreMenu;
  type: 'brand' | 'category' | 'topic';
}

const MenuItem: React.FC<_props> = ({ screen, type }) => {
  const { setView } = useActions();
  // const storeId = useTypedSelector((state) => state.store.id);
  // const [menuItems, setMenuItems] = useState<{
  //   topic: _MenuTopic | null;
  //   category: null | _MenuCategory[];
  // } | null>(null);

  // const callAPI = (type: 'TOPIC' | 'CATEGORY') => {
  //   if (type === 'TOPIC') {
  //     FetchMenuTopics({ topicId: menu.topicid })
  //       .then((res) => setMenuItems({ topic: res, category: null }))
  //       .catch(() => setMenuItems({ topic: null, category: null }));
  //   }

  //   if (type === 'CATEGORY') {
  //     if (storeId === null) return;
  //     FetchMenuCategories({ categoryId: menu.topicid, storeId: storeId })
  //       .then((res) => setMenuItems({ topic: null, category: res }))
  //       .catch(() => setMenuItems({ topic: null, category: null }));
  //   }
  // };

  useEffect(() => {
    setView(screen);
  }, []);

  // if (menu?.type === 'custom') {
  //   if (menu?.category === 'topic') {
  //     if (menu.menuinfo === null) return <></>;
  //     return (
  //       <Custom
  //         menuTitle={'Dummy Custom topic'}
  //         menuItems={menu.menuinfo}
  //         menuUrl={menu.sename}
  //       />
  //     );
  //   }
  //   if (menu?.category === 'category') {
  //     if (menu.menuinfo === null) return <></>;
  //     return (
  //       <Custom
  //         menuTitle={'Dummy Custom category'}
  //         menuItems={menu.menuinfo}
  //         menuUrl={menu.sename}
  //       />
  //     );
  //   }
  // }

  // if (menu?.type === 'dynamic') {
  //   if (menu?.category === 'category') {
  //     if (menuItems === null) {
  //       callAPI('CATEGORY');
  //       return <></>;
  //     }
  //     return (
  //       <Category
  //         menuTitle={'Dummy Custom Category'}
  //         menuUrl={menu.sename}
  //         menuItems={['Dummy 1', 'dummy 2']}
  //       />
  //     );
  //   }
  // }

  // if (menu?.type === 'none') {
  //   if (menuItems === null) {
  //     callAPI('TOPIC');
  //     return <></>;
  //   }

  //   if (menuItems.topic === null) return <></>;

  //   return <Topic menuTitle={menuItems.topic.title} menuUrl={menu.sename} />;
  // }

  if (type === 'brand') {
    return (
      <Brand
        brandPageUrl="/brands.html"
        brandUrl={'nike.html'}
        menuTitle={'Brands'}
        brandItems={['Nike']}
        brandImages={[]}
      />
    );
  }
  if (type === 'category') {
    return (
      <Category
        menuTitle={'Men'}
        menuUrl={'nike.html'}
        menuItems={['Jacket']}
      />
    );
  }
  if (type === 'topic') {
    return (
      <Topic menuTitle={'Consultation'} menuUrl={'request-consultation'} />
    );
  }

  return <></>;
};

export default MenuItem;
