import { hideAllConsoles, _showConsoles, __fileNames } from 'show.config';
import { _conditionalConsoles } from 'show.type';
import { highLightResponse } from './common.helper';

export const conditionalConsoles = ({
  data,
  fileName,
}: {
  fileName: string;
  data: _conditionalConsoles;
}) => {
  if (hideAllConsoles) return;

  //  ============================================
  if (
    _showConsoles.productController &&
    fileName === __fileNames.productController
  ) {
    highLightResponse({ dataToShow: data, component: fileName });
  }

  //  ============================================

  if (_showConsoles.appController && fileName === __fileNames.appController) {
    highLightResponse({ dataToShow: data, component: fileName });
  }

  //  ============================================

  if (_showConsoles._app && fileName === __fileNames._app) {
    highLightResponse({ dataToShow: data, component: fileName });
  }
};
