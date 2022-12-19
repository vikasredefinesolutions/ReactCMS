export const __Show = {
  all: true,
  services: {
    payload: true,
    response: false,
    error: true,
  },
  component: true,
  controllers: false,
  serverMethods: false,
  page: true,
  functions: false,
  catch: true,
};
// tslint:disable:no-console
import { _HeaderAPIs } from '@services/header.service';
import { _StoreAPIs } from '@services/page.service';
import { _ProducDetailAPIs } from '@services/product.service';
import { _UserAPIs } from '@services/user.service';
import chalk from 'chalk';
import {
  hide_All_Consoles,
  hide_No_Data_Found_Error,
  __fileNames,
} from 'show.config';
import { isItServer } from './common.helper';

const Error = {
  title: chalk.bold.red,
  data: chalk.rgb(247, 173, 173),
  border: chalk.red,
};

const Log = {
  title: chalk.bold.cyan,
  data: chalk.rgb(157, 212, 255),
  border: chalk.cyan,
};

const C_Log = {
  title: chalk.bold.yellow,
  data: chalk.rgb(253, 126, 20),
  border: chalk.yellow,
};

interface __Console {
  allCatch: boolean;
  store: {
    service: Record<_StoreAPIs, boolean>;
  };
  requestConsultation: {
    controller: boolean;
    page: boolean;
    serverMethod: boolean;
  };
  slug: {
    serverMethod: boolean;
    page: boolean;
  };
  user: {
    service: Record<_UserAPIs, boolean>;
  };
  app: {
    controller: boolean;
    serverMethod: boolean;
    page: boolean;
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
  };
}

export const __console: __Console = {
  allCatch: true,
  store: {
    service: {
      FetchThemeConfigs: false,
      getPageType: false,
      getPageComponents: false,
    },
  },
  home: {
    controller: true,
    component: {
      featuredItems: true,
    },
  },
  slug: {
    serverMethod: true,
    page: true,
  },
  user: {
    service: {
      signInUser: true,
      CreateNewAccount: true,
      OrderedBillingDetails: true,
      OrderedProductDetails: true,
      FetchOrderIds: true,
      GetStoreCustomer: false,
      FetchOrderDetails: true,
    },
  },
  header: {
    service: {
      FetchBrands: true,
      FetchStoreMenu: true,
      FetchMenuTopics: true,
      FetchBannerDetails: true,
      FetchMenuCategories: false,
    },
  },
  app: {
    controller: true,
    serverMethod: true,
    page: true,
  },
  requestConsultation: {
    controller: true,
    serverMethod: true,
    page: true,
  },
  productDetails: {
    service: {
      FetchProductsBySKUs: true,
      FetchSizeChartById: true,
      FetchDiscountTablePrices: true,
      FetchSimilartProducts: true,
      FetchProductSEOtags: true,
      FetchColors: true,
      FetchProductById: true,
    },
    controller: true,
    components: {
      similarProducts: true,
    },
    serverMethod: true,
    page: true,
  },
  compare: {
    controller: true,
    serverMethod: true,
    page: true,
  },
};

export const cLog = ({
  dataToShow,
  component,
}: {
  dataToShow: any;
  component: string;
}) => {
  console.log(
    C_Log.border(
      `===============================================================================================================================`,
    ),
  );
  console.log(C_Log.title(`Console.log:        ( ${component} )`));
  console.log(dataToShow);
  console.log(
    C_Log.border(
      `--------------X--------------------------------X--------------------------------X--------------------------------X-------------`,
    ),
  );
};

export const highLightResponse = ({
  dataToShow,
  component,
}: {
  dataToShow: any;
  component: string;
}) => {
  console.log(
    Log.border(
      `===============================================================================================================================`,
    ),
  );
  console.log(Log.title(`Console.log:        ( ${component} )`));
  console.log(
    Log.border(
      `===============================================================================================================================`,
    ),
  );
  const consoleMsg = Log.data(JSON.stringify(dataToShow, null, 3));
  console.log(consoleMsg);
  console.log(
    Log.border(
      `--------------X--------------------------------X--------------------------------X--------------------------------X-------------`,
    ),
  );
};

export const highLightError = ({
  error,
  component,
}: {
  error: any;
  component: string;
}) => {
  const ErrMsg = Error.data(JSON.stringify(error, null, 3));

  console.log(
    Error.border(
      `===============================================================================================================================`,
    ),
  );
  console.log(Error.title(`Console.log: ERROR       ( ${component} )`));
  console.log(
    Error.border(
      `===============================================================================================================================`,
    ),
  );
  console.log(ErrMsg);
  console.log(
    Error.border(
      `------------X--------------------------------X--------------------------------X--------------------------------X---------------`,
    ),
  );
};

export const conditionalLog = ({
  data,
  type,
  show,
  name,
  additionalMsg = '',
  error = false,
}: {
  show: boolean;
  type: 'API' | 'FUNCTION' | 'PAGE' | 'CONTROLLER' | 'NEXTJS PROPS';
  name: string;
  additionalMsg?: string;
  data: any;
  error?: boolean;
}) => {
  if (hide_All_Consoles) return;

  if (show) {
    if (type === 'API') {
      const errType = error ? 'API Failed' : 'No Data Found';

      if (errType === 'No Data Found' && hide_No_Data_Found_Error) return;

      const message = `${errType} : ${name} ${additionalMsg}`;
      highLightError({ error: data, component: message });
      return;
    }

    if (
      name === __fileNames.productDetails ||
      name === __fileNames._app ||
      name === __fileNames.requestConsultation ||
      name === __fileNames.compareProducts ||
      name === __fileNames.home ||
      name === __fileNames.menuItems
    ) {
      const message = `${type} : ${name} ${additionalMsg}`;
      highLightResponse({ dataToShow: data, component: message });
    }
  }
};

export const conditionalLogV2 = ({
  data,
  type,
  show,
  name,
  additionalMsg = '',
}: {
  show: boolean;
  type:
    | 'API-PAYLOAD'
    | 'API-RESPONSE'
    | 'API-ERROR'
    | 'CONTROLLER'
    | 'SERVER_METHOD'
    | 'PAGE'
    | 'SPECIAL_FUNCTION'
    | 'COMPONENT'
    | 'CATCH';
  name: string;
  additionalMsg?: string;
  data: any;
}) => {
  if (!__Show.all) return;

  if (show) {
    if (__Show.services.payload && type === 'API-PAYLOAD') {
      const message = `API : ${name} - Payload ${
        additionalMsg ? `- ${additionalMsg}` : ''
      }`;
      highLightResponse({ dataToShow: data, component: message });
      return;
    }

    if (__Show.services.response && type === 'API-RESPONSE') {
      let msgType = 'Response';
      let error = false;
      if (data === null) {
        msgType = 'No data found';
        error = true;
      }

      if ('length' in data) {
        if (data.length === 0) {
          msgType = 'No data found';
          error = true;
        }
      }

      const message = `API : ${name} - ${msgType} ${
        additionalMsg ? `- ${additionalMsg}` : ''
      }`;
      if (error) {
        highLightError({ error: data, component: message });
        return;
      }
      highLightResponse({ dataToShow: data, component: message });
      return;
    }

    if (__Show.services.error && type === 'API-ERROR') {
      const message = `API : ${name} - Error ${
        additionalMsg ? `- ${additionalMsg}` : ''
      }`;
      highLightError({ error: data, component: message });
      return;
    }

    if (__Show.controllers && type === 'CONTROLLER') {
      const message = `CONTROLLER : ${name} ${
        additionalMsg ? `- ${additionalMsg}` : ''
      }`;
      highLightResponse({ dataToShow: data, component: message });
      return;
    }

    if (__Show.serverMethods && type === 'SERVER_METHOD') {
      const message = `NEXTJS RESPONSE : ${name} ${
        additionalMsg ? `- ${additionalMsg}` : ''
      }`;
      highLightResponse({ dataToShow: data, component: message });
      return;
    }

    if (__Show.page && type === 'PAGE') {
      const _server = isItServer();
      if (_server) return;
      const message = `PAGE PROPS: ${name} ${
        additionalMsg ? `- ${additionalMsg}` : ''
      }`;
      cLog({ dataToShow: data, component: message });
      return;
    }

    if (__Show.functions && type === 'SPECIAL_FUNCTION') {
      const message = `FUNCTION : ${name} ${
        additionalMsg ? `- ${additionalMsg}` : ''
      }`;
      highLightResponse({ dataToShow: data, component: message });
      return;
    }
    if (__Show.component && type === 'COMPONENT') {
      const message = `COMPONENT : ${name} ${
        additionalMsg ? `- ${additionalMsg}` : ''
      }`;
      cLog({ dataToShow: data, component: message });
      return;
    }
    if (__Show.catch && type === 'CATCH') {
      const message = `tryCatch : ${name} ${
        additionalMsg ? `- ${additionalMsg}` : ''
      }`;
      highLightError({ error: data, component: message });
      return;
    }
  }
};
