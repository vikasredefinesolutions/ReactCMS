import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { conditionalLogV2, __console } from 'helpers/global.console';
import { SendAsyncV2 } from '../utils/axios.util';

export type _FileUploadAPIs = 'UploadImage';

export type _FileUploadService = {
  service: 'fileUpload';
  api: _FileUploadAPIs;
};

export const UploadImage = async ({
  folderPath,
  files,
}: {
  folderPath: string;
  files: File;
}) => {
  const url = `/upload/image?folderPath=${folderPath}`;

  conditionalLogV2({
    data: { folderPath, files },
    show: __console.files.service.UploadImage,
    type: 'API-PAYLOAD',
    name: 'UploadImage',
  });

  try {
    const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
      url: url,
      method: 'POST',
      data: { files },
    });

    conditionalLogV2({
      data: res,
      show: __console.files.service.UploadImage,
      type: 'API-RESPONSE',
      name: 'UploadImage',
    });

    return res.data;
  } catch (error) {
    conditionalLogV2({
      data: error,
      show: __console.files.service.UploadImage,
      type: 'API-ERROR',
      name: 'UploadImage',
    });
    return null;
  }
};
