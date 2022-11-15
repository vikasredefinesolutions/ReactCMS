import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { SendAsyncV2 } from '../utils/axios.util';

export const UploadImage = async ({
  folderPath,
  files,
}: {
  folderPath: string;
  files: File;
}) => {
  const url = `/upload/image?folderPath=${folderPath}`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: { files },
  });

  return res.data;
};
