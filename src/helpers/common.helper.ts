import { __domain } from 'page.config';
import { ParsedUrlQuery } from 'querystring';
import { conditionalLog, highLightError } from './global.console';

export function removeDuplicates(arr: any[]) {
  return arr.filter(
    (arr, index, self) =>
      index === self.findIndex((t) => t.seName === arr.seName),
  );
}

export function layoutToShow(payload: {
  layout: string | undefined;
  showProd: boolean;
}): string {
  let layout = __domain.layoutToDisplay;

  if (payload.showProd && payload.layout) {
    layout === payload.layout;
  }

  conditionalLog({
    show: payload.layout ? false : true,
    type: 'FUNCTION',
    name: 'layoutToShow',
    data: payload.layout,
    error: true,
  });

  return layout;
}

export function domainToShow(payload: {
  domain: string | undefined;
  showProd: boolean;
}): string {
  let domain = __domain.localDomain;

  if (payload.showProd && payload.domain) {
    domain === payload.domain;
  }
  conditionalLog({
    show: !payload.domain,
    type: 'FUNCTION',
    name: 'domainToShow',
    data: payload.domain,
    error: true,
  });

  highLightError({
      error: domain+' calling',
      component:
        'custom',
    });
  return domain;
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
