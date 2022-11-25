import axios from 'axios';
import { conditionalLog } from 'helpers/global.console';
import { _showConsoles } from 'show.config';

export const getPageType = async (Req: { store_id: number; slug: string }) => {
  const url = 'https://www.redefinecommerce.net/API/api/front/get-page-type';

  try {
    const page = await axios.post(url, Req);

    conditionalLog({
      data: page.data,
      name: 'getPageType',
      type: 'API',
      show: page.data === null,
    });

    return page;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'getPageType',
      type: 'API',
      show: _showConsoles.services.productDetails,
      error: true,
    });
    return null;
  }
};

export const getPageComponents = async (Req: { page_id: number }) => {
  const url = `https://www.redefinecommerce.net/API/api/front/topic/component/get/${Req.page_id}`;
  console.log('data', url);

  const page = await axios.get(url);
  return page;
};
