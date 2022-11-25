import { ParsedUrlQuery } from 'querystring';

export function removeDuplicates(arr: any[]) {
  return arr.filter(
    (arr, index, self) =>
      index === self.findIndex((t) => t.seName === arr.seName),
  );
}

export const c_getSeName = (
  component: 'PRODUCT DETAILS' | 'PRODUCT COMPARE',
) => {
  const pathName = window.location.pathname;
  let slug = '';

  if (component === 'PRODUCT DETAILS') {
    const withoutHTML = pathName.split('.')[0];
    slug = withoutHTML.split('/')[1];
  }

  if (component === 'PRODUCT COMPARE') {
    slug = '';
  }

  return slug;
};

const ANSI = {
  Reset: '\x1b[0m',
  Bright: '\x1b[1m',

  FgRed: '\u001b[31m',
  FgGreen: '\x1b[32m',
  FgYellow: '\x1b[33m',
};

export const highLightResponse = ({
  dataToShow,
  component,
  display = true,
}: {
  dataToShow: any;
  component: string;
  display?: boolean;
}) => {
  if (display === false) return;
  console.log(
    `${ANSI.FgYellow}Console.log: Response ====================================================================================Res( ${component} )`,
    `=================================================Data>`,
    dataToShow,
    `${ANSI.FgYellow}<Data===============================================================================================================================================================================================END${ANSI.Reset}`,
  );
};

export const highLightError = ({
  error,
  component,
}: {
  error: any;
  component: string;
}) => {
  console.log(
    `${ANSI.FgRed}Console.log: ERROR ==========================================================================================Error( ${component} )`,
    `=================================================Data>${ANSI.Reset}`,
    error,
    `${ANSI.FgRed}<Data===============================================================================================================================================================================================END${ANSI.Reset}`,
  );
};

export const extractSlugName = (contextParam?: ParsedUrlQuery) => {
  let slug = '';
  let slugID: string[] = [];
  if (contextParam) {
    slugID = contextParam['slug-id'] as string[];
    if (slugID) {
      slug = slugID.at(-1)?.replace('.html', '') || '';
    } else {
      const paramsSlug = contextParam!;

      slug = paramsSlug
        ? (paramsSlug?.slug as string).replace('.html', '')
        : '';
    }
  }
  return { slug, slugID };
};
