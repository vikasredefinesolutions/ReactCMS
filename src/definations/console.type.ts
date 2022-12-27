import { _RedefineAppAPIs } from '@services/app.service';
import { _HeaderAPIs } from '@services/header.service';
import { _HomeAPIs } from '@services/home.service';
import { _ProducDetailAPIs } from '@services/product.service';
import { _SlugAPIs } from '@services/slug.service';
import { _UserAPIs } from '@services/user.service';

export interface __Console {
  allCatch: boolean;
  requestConsultation: {
    controller: boolean;
    page: boolean;
    serverMethod: boolean;
  };
  slug: {
    serverMethod: boolean;
    page: boolean;
    service: Record<_SlugAPIs, boolean>;
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
}
