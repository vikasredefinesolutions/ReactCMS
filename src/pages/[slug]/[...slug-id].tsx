import { ProductListPageData, SlugPropType } from '@type/slug.type';
import SeoHead from 'appComponents/Screen/Layout/Head';
import ProductList from 'pages/ProductList';
import { getServerSideProps } from '../../Components/Slug/getServerSideProps';
const ProductListing = (props: SlugPropType) => {
  const { pageType, pageData, slug } = props;
  let page = <>Loading ...</>;
  if (pageType) {
    if (pageType === 'collection') {
      page = <>Collection</>;
    } else if (pageType === 'product') {
      page = <>'product'</>;
    } else if ('brand,category'.includes(pageType)) {
      const { seo } = pageData as ProductListPageData;
      page = (
        <>
          {seo && (
            <SeoHead
              title={seo?.seTitle}
              description={seo?.seDescription}
              keywords={seo?.seKeyWords}
            />
          )}
          <ProductList pageData={pageData} slug={slug} />
        </>
      );
    } else {
      page = <>Home</>;
    }
  }
  return <>{page}</>;
};

export { getServerSideProps };

export default ProductListing;
