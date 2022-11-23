import { getPageType } from '@services/page.service';
import { GetServerSideProps } from 'next';
import { extractSlugName } from 'helpers/common.helper';
import { TopicProps } from '@type/slug.type';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const domain = __domain.layout || context.req.rawHeaders[1];
  let store: _StoreReturnType | null = null;
  const {slug, slugID} = extractSlugName(context.params);
  store = await _AppController.FetchStoreDetails(domain, slug!);
  const { data } = await getPageType({
    store_id: 4,
    slug,
  });

  console.log(pageType);
  const pageType = data.data.type;
  let pageData: TopicProps = null;
  let seo: any = null;
  ////////////////////////////////////////////////
  /////////// Page Type Checks
  ////////////////////////////////////////////////
  if(pageType === 'topic')
  {
    seo = {};
    pageData = {} as TopicProps;
    seo['seDescription'] = data.data?.meta_description;
    seo['seKeyWords'] = data.data.meta_keywords;
    seo['seTitle'] = data.data.meta_title;
    pageData['seo'] = seo;

  }
  console.log("PP", pageType);

  return {
    props: {
      pageType,
      pageData,
      slug,
    },
  };
};
