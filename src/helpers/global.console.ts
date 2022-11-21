import { hideAllConsoles, _showConsoles, __fileNames } from 'show.config';
import { _conditionalLog } from 'show.type';
import { highLightError, highLightResponse } from './common.helper';

export const conditionalLog = ({
  data,
  type,
  show,
  name,
  error = false,
}: {
  show: boolean;
  type: 'API' | 'FUNCTION' | 'PAGE' | 'CONTROLLER' | 'NEXTJS PROPS';
  name: string;
  data: any;
  error?: boolean;
}) => {
  if (hideAllConsoles) return;

  if (show) {
    if (type === 'API') {
      const errType = error ? 'API Failed' : 'No Data Found';
      const message = `${errType} : ${name}`;
      highLightError({ error: data, component: message });
      return;
    }

    if (name === __fileNames.productDetails || name === __fileNames._app) {
      const message = `${type} : ${name}`;
      highLightResponse({ dataToShow: data, component: message });
    }
  }
};