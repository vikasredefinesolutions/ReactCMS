import { SendAsyncV2 } from '@utils/axios.util';
import { AxiosRequestConfig, AxiosResponse } from 'axios';


export const PunchoutPostApi = async () => {
  const url = '/Punchout/index.json';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: {'message' : 'success'},
  });
  return res;
};
  