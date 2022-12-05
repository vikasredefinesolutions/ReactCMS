import axios from 'axios';
import { conditionalLog } from 'helpers/global.console';
import { _showConsoles } from 'show.config';

export const getPageType = async (Req: {
  store_id: number;
  slug: string;
}): Promise<{ data: any }> => {
  const url = 'https://www.redefinecommerce.net/API/api/front/get-page-type';

  try {
    console.log(url, Req);
    const page = await axios.post(url, Req);

    conditionalLog({
      data: page.data,
      name: 'getPageType',
      type: 'API',
      show: page.data === null,
    });
    return page;
  } catch (error) {
    const page = {
      data: null,
    };
    conditionalLog({
      data: error,
      name: 'getPageType',
      type: 'API',
      show: _showConsoles.services.productDetails,
      error: true,
    });
    return page;
  }
};

export const getPageComponents = async (Req: { page_id: number }) => {
  const url = `https://www.redefinecommerce.net/API/api/front/topic/component/get/${Req.page_id}`;

  const page = await axios.get(url);
  return page;
};
