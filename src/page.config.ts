//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*                         STORE CONSTANTS                          */
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
export const _Store = {
  type1: 'CG',
  type2: 'GG',
  type3: 'PKHG',
  type4: 'DI',
  type5: 'bacardiGreyGoose',
  type6: 'bacardiToGo',
  type7: 'bbcpord',
  type8: 'bcorp',
  type9: 'betahumana',
  type10: 'cyxtera',
  type11: 'gilbaneco',
  type12: 'healthyPoints',
  type13: 'bacardi',
  type14: 'humanaheroes',
  type15: 'petermillar',
  type16: 'southerntide',
  type17: 'theHardFord',
  type18: 'theHardFordClaimsapparel',
  type19: 'theHardFordJuniorfireMarshal',
  type20: 'theHardFordVolshirt',
  type21: 'theHomeDepot',
  type22: 'ussa',
  type23: 'ussaClaimsApparel',
  type24: 'ussaMilitarysAffairs',
  type25: 'wayFair',
};

export const _StoreDomains = {
  // domain1: 'corporategear',
  domain1: 'vercel.redefinecommerce.net',
  domain2: 'vercel1.redefinecommerce.net',
  domain3: 'pk',
  domain4: 'drivingi',
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*                  DEV ENVIORNMENT SETTINGS                        */
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const __domain = {
  devMode: true, // for development features.
  isSiteLive: false,
  localDomain: _StoreDomains.domain1,
  layoutToDisplay: _Store.type1,
};

export const __MockMenuItem = {
  content: {
    showLayoutsOption: false,
    layouts: [
      {
        layoutType: _Store.type1,
        domain: _StoreDomains.domain1,
        layoutName: 'CorporateGear',
      },
      {
        layoutType: _Store.type2,
        domain: _StoreDomains.domain2,
        layoutName: 'GameDayGear',
      },
      {
        layoutType: _Store.type3,
        domain: _StoreDomains.domain3,
        layoutName: 'PkHealthGear',
      },
      {
        layoutType: _Store.type4,
        domain: _StoreDomains.domain4,
        layoutName: 'Driving Impressions',
      },
    ],
  },
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*                        PAGE VARIABLES                            */
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const __constant = {
  _Home: {
    featuredItems: {
      noOfItemsToFetch: 4,
      brands: [
        {
          id: 21,
          name: 'Adidas',
        },
        {
          id: 11,
          name: 'Nike',
        },
        {
          id: 15,
          name: 'Patagonia',
        },
      ],
      brandsId: [21, 11, 15],
    },
  },
  _productDetails: {
    imagesInRow: 7,
    descriptionLength: 500,
    recentlyViewed: {
      sliderSettings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    similarProducts: {
      sliderSettings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
  },
  _header: {
    mobileBreakPoint: 1024,
    imagesToShowInBrandDropdown: 5,
  },
};
