import { _RedefineAppAPIs } from '@services/app.service';
import { _CacheAPIs } from '@services/cache.service';
import { _ShoppingCartAPIs } from '@services/cart.service';
import { _FileUploadAPIs } from '@services/file.service';
import { _FooterAPIs } from '@services/footer.service';
import { _GiftCardAPIs } from '@services/gift.service';
import { _HeaderAPIs } from '@services/header.service';
import { _HomeAPIs } from '@services/home.service';
import { _LogoAPIs } from '@services/logo.service';
import { _ProducDetailAPIs } from '@services/product.service';
import { _SlugAPIs } from '@services/slug.service';
import { _UserAPIs } from '@services/user.service';

export interface __Console {
  allCatch: boolean;
  requestConsultation: {
    controller: boolean;
    page: boolean;
    serverMethod: boolean;
    service: {
      SumbitRequestConsultationDetails: boolean;
    };
  };
  slug: {
    serverMethod: boolean;
    page: boolean;
    service: Record<_SlugAPIs, boolean>;
  };
  files: {
    service: Record<_FileUploadAPIs, boolean>;
  };
  user: {
    service: Record<_UserAPIs, boolean>;
  };
  app: {
    controller: boolean;
    serverMethod: boolean;
    page: boolean;
    service: Record<_RedefineAppAPIs, boolean>;
  };
  header: {
    service: Record<_HeaderAPIs, boolean>;
  };
  footer: {
    service: Record<_FooterAPIs, boolean>;
  };
  productDetails: {
    service: Record<_ProducDetailAPIs, boolean>;
    controller: boolean;
    components: {
      similarProducts: boolean;
    };
    serverMethod: boolean;
    page: boolean;
  };
  compare: {
    controller: boolean;
    serverMethod: boolean;
    page: boolean;
  };
  home: {
    controller: boolean;
    component: {
      featuredItems: boolean;
    };
    service: Record<_HomeAPIs, boolean>;
  };
  giftCard: {
    serverMethod: false;
    controller: boolean;
    component: {
      details: boolean;
      list: boolean;
    };
    service: Record<_GiftCardAPIs, boolean>;
  };
  cacheAPIs: {
    service: Record<_CacheAPIs, boolean>;
  };
  ShoppingCart: {
    service: Record<_ShoppingCartAPIs, boolean>;
  };
  Logo: { service: Record<_LogoAPIs, boolean> };
}
