import { PunchoutPostApi } from '@services/punchout.service';
import qs from 'querystring';
const Puchout = ({ req, res, punchout }: any) => {
  return (
    <>
      <h1>Request Stream</h1>
      <span>{JSON.stringify(req?.data)}</span>
      <h1>Response Stream</h1>
      <span>{JSON.stringify(res?.data)}</span>
      <h1>Punchout Api</h1>
      <span>{JSON.stringify(punchout)}</span>
    </>
  );
};

export default Puchout;

export const getServerSideProps = async (context: any) => {
  const req = context.req;

  let body = '';
  if (req.method == 'POST') {
    req.on('data', (chunk: any) => {
      body += chunk;
    });
    req.on('end', () => {
      console.log(qs.parse(body));
    });
  }

  const res = await PunchoutPostApi();
  return {
    props: {
      req: {
        data: {
          body: body,
          headers: { ...context.req.headers },
          returnUrl: { ...context.req?.return_url },
        },
      },
      res: {
        data: {
          body: { ...context.res.body },
          headers: { ...context.res.headers },
          params: { ...context.req?.params },
          returnUrl: { ...context.req?.return_url },
        },
      },
      punchout: res,
    },
  };
};