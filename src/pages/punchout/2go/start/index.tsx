import { PunchoutPostApi } from '@services/punchout.service';
import { DOMParser, XMLSerializer } from '@xmldom/xmldom';
import fsPrmoises from 'fs/promises';
import path from 'path';

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

  const filePath = path.join(process.cwd(), '/public/success.xml');
  const xmlData = await fsPrmoises.readFile(filePath);
  let xmlDoc = xmlData.toLocaleString();

  const parser = new DOMParser();
  var doc = parser.parseFromString(xmlDoc, 'text/xml');
  const serialized = new XMLSerializer().serializeToString(doc);

  let body = '';
  if (req.method == 'POST') {
    req.on('data', (chunk: any) => {
      body += chunk;
    });
    req.on('end', () => {});
  }

  const res = await PunchoutPostApi(serialized);
  return {
    props: {
      req: {
        data: {
          body: serialized,
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
