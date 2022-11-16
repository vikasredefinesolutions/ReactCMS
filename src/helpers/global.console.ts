import { hideAllConsoles, _showConsoles, __fileNames } from 'show.config';
import { _conditionalLog } from 'show.type';
import { highLightResponse } from './common.helper';

export const conditionalLog = ({
  data,
  fileName,
  show,
}: {
  show: boolean;
  fileName: string;
  data: _conditionalLog;
}) => {
  if (hideAllConsoles) return;

  if (show) {
    if (
      fileName === __fileNames.productController ||
      fileName === __fileNames.appController ||
      fileName === __fileNames._app
    ) {
      highLightResponse({ dataToShow: data, component: fileName });
    }
  }
};
