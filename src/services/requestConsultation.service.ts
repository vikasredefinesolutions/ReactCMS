import { _SubmitConsultationPayload } from '@type/requestConsultation.type';
import { CallAPI } from 'helpers/common.helper';

export type _RequestConsultationAPIs = 'SumbitRequestConsultationDetails';

export type _RequestConsultationService = {
  service: 'requestConsultation';
  api: _RequestConsultationAPIs;
};

export const SumbitRequestConsultationDetails = async (
  payload: _SubmitConsultationPayload,
) => {
  const url = '/ConsultationAndProof/Create.json';

  const response = await CallAPI<any>({
    name: {
      service: 'requestConsultation',
      api: 'SumbitRequestConsultationDetails',
    },
    request: {
      url: url,
      method: 'POST',
      data: payload,
    },
  });

  return response;
};
