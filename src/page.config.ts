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
  type26: 'healthypoints',
  type27: 'bainCapital',
};

export const _StoreDomains = {
  // domain1: 'corporategear',
  domain1: 'cg.headlessmart.com',
  domain2: 'gg.headlessmart.com',
  domain3: 'pkhealth.headlessmart.com',
  domain4: 'drivingi',
  domain5: 'bacardiGreyGoose',
  domain6: 'bacardiToGo',
  domain7: 'bbcpord',
  domain8: 'bcorp',
  domain9: 'betahumana',
  domain10: 'cyxtera',
  domain11: 'gilbaneco',
  domain12: 'healthyPoints',
  domain13: 'bacardi',
  domain14: 'humanaheroes',
  domain15: 'petermillar.headlessmart.com',
  domain16: 'southerntide.headlessmart.com',
  domain17: 'theHardFord',
  domain18: 'theHardFordClaimsapparel',
  domain19: 'theHardFordJuniorfireMarshal',
  domain20: 'theHardFordVolshirt',
  domain21: 'theHomeDepot',
  domain22: 'react-cms-three.vercel.app',
  domain23: 'ussaClaimsApparel',
  domain24: 'ussaMilitarysAffairs',
  domain25: 'wayFair',
  domain26: 'healthypoints',
  domain27: 'bainCapital',
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*                  DEV ENVIORNMENT SETTINGS                        */
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const __domain = {
  devMode: true, // for development features.
  isSiteLive: true,
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

      {
        layoutType: _Store.type5,
        domain: _StoreDomains.domain5,
        layoutName: 'bacardiGreyGoose',
      },
      {
        layoutType: _Store.type6,
        domain: _StoreDomains.domain6,
        layoutName: 'bacardiToGo',
      },
      {
        layoutType: _Store.type7,
        domain: _StoreDomains.domain7,
        layoutName: 'bbcpord',
      },
      {
        layoutType: _Store.type8,
        domain: _StoreDomains.domain8,
        layoutName: 'bcorp',
      },
      {
        layoutType: _Store.type9,
        domain: _StoreDomains.domain9,
        layoutName: 'betahumana',
      },
      {
        layoutType: _Store.type10,
        domain: _StoreDomains.domain10,
        layoutName: 'cyxtera',
      },
      {
        layoutType: _Store.type11,
        domain: _StoreDomains.domain11,
        layoutName: 'gilbaneco',
      },

      {
        layoutType: _Store.type12,
        domain: _StoreDomains.domain12,
        layoutName: 'healthyPoints',
      },
      {
        layoutType: _Store.type13,
        domain: _StoreDomains.domain13,
        layoutName: 'bacardi',
      },
      {
        layoutType: _Store.type14,
        domain: _StoreDomains.domain14,
        layoutName: 'humanaheroes',
      },
      {
        layoutType: _Store.type15,
        domain: _StoreDomains.domain15,
        layoutName: 'petermillar',
      },
      {
        layoutType: _Store.type16,
        domain: _StoreDomains.domain16,
        layoutName: 'southerntide',
      },
      {
        layoutType: _Store.type17,
        domain: _StoreDomains.domain17,
        layoutName: 'theHardFord',
      },

      {
        layoutType: _Store.type18,
        domain: _StoreDomains.domain18,
        layoutName: 'theHardFordClaimsapparel',
      },
      {
        layoutType: _Store.type19,
        domain: _StoreDomains.domain19,
        layoutName: 'theHardFordJuniorfireMarshal',
      },
      {
        layoutType: _Store.type20,
        domain: _StoreDomains.domain20,
        layoutName: 'theHardFordVolshirt',
      },

      {
        layoutType: _Store.type21,
        domain: _StoreDomains.domain21,
        layoutName: 'theHomeDepot',
      },
      {
        layoutType: _Store.type22,
        domain: _StoreDomains.domain22,
        layoutName: 'ussa',
      },
      {
        layoutType: _Store.type23,
        domain: _StoreDomains.domain23,
        layoutName: 'ussaClaimsApparel',
      },
      {
        layoutType: _Store.type24,
        domain: _StoreDomains.domain24,
        layoutName: 'ussaMilitarysAffairs',
      },
      {
        layoutType: _Store.type25,
        domain: _StoreDomains.domain25,
        layoutName: 'wayFair',
      },
      {
        layoutType: _Store.type26,
        domain: _StoreDomains.domain26,
        layoutName: 'healthypoints',
      },
      {
        layoutType: _Store.type27,
        domain: _StoreDomains.domain27,
        layoutName: 'bainCapital',
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
        arrows: false,
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
  _productAlike: {
    carouselCounter: 5,
  },
};
