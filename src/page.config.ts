//////////////////////////////////////////////////////////////////////

export const _Store = {
  type1: 'CG',
  type2: 'GG',
  type3: 'PKHG',
  type4: 'DI',
  type5: 'BG-GG',
  type6: 'BCTOGO',
  type7: 'BSTBEER',
  type8: 'bcorp',
  type9: 'betahumana',
  type10: 'cyxtera',
  type11: 'gilbaneco',
  type12: 'healthyPoints',
  type13: 'bacardi',
  type14: 'humanaheroes',
  type15: 'PM-CG',
  type16: 'ST-CG',
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
  // domain1: 'cg.headlessmart.com',
  domain1: 'cg',
  domain2: 'gg.headlessmart.com',
  domain3: 'pkhealth.headlessmart.com',
  domain4: 'di.headlessmart.com',
  domain5: 'https://bacardi.headlessmart.com',
  domain6: 'bacarditogo.headlessmart.com', // CLOSED
  domain7: 'bbcprod.headlessmart.com',
  domain8: 'bcorp',
  domain9: 'betahumana', // CLOSED
  domain10: 'cyxtera',
  domain11: 'gilbaneco', // CLOSED
  domain12: 'healthyPoints', // DUPLICATE
  domain13: 'bacardi',
  domain14: 'humanaheroes', // CLOSED
  domain15: 'petermillar.headlessmart.com',
  domain16: 'southerntide.headlessmart.com',
  domain17: 'theHardFord', // CLOSED
  domain18: 'theHardFordClaimsapparel', // CLOSED
  domain19: 'theHardFordJuniorfireMarshal', // CLOSED
  domain20: 'theHardFordVolshirt', // CLOSED
  domain21: 'theHomeDepot',
  domain22: 'humanadev.parsonskellogg.com',
  domain23: 'ussaClaimsApparel',
  domain24: 'ussaMilitarysAffairs',
  domain25: 'wayFair', // CLOSED
  domain26: 'healthypoints',
  domain27: 'bainCapital',
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*                  DEV ENVIORNMENT SETTINGS                        */
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const __domain = {
  devMode: false, // for development features.
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
        layoutName: 'alphahealthypoints',
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
        arrows: false,
      },
    },
  },
  _header: {
    mobileBreakPoint: 1024,
    imagesToShowInBrandDropdown: 5,
    brandImage: [67, 22, 31, 17], //[198, 11, 187, 27],
  },
  _productAlike: {
    carouselCounter: 5,
  },
  _itemsList: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6WyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciIsIlByYWRpcCJdLCJVc2VySWQiOiIxMzkiLCJTdG9yZUlkIjoiMTM5IiwiRnVsbE5hbWUiOiJQcmFkaXAgS2hlcjc0NyIsImVtYWlsIjoicHJhZGlwQHJlZGVmaW5lY29tbWVyY2UuY29tIiwicm9sZSI6IlN1cGVyQWRtaW4iLCJHdWlkIjoiOTc0YzMyZDYtYjM1OC00OGQzLTg4MjUtNjI1OThkMThhOWNhIiwibmJmIjoxNjc2MDI5NTE2LCJleHAiOjE2NzY0NjE1MTYsImlhdCI6MTY3NjAyOTUxNiwiaXNzIjoiSXNzdWVyIiwiYXVkIjoiQXVkaWVuY2UifQ.X6nqUgajllrrY1m15qahGx1CiW7Vt7bIXkSwPcETAPQ',
  },
};
