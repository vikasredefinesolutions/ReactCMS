import { FetchFiltersJsonByBrand } from '@services/product.service';
import { ProductList as listType } from '@type/productList.type';
import AppContext from 'Context/AppContext';
import Head from 'next/head';
import ProductList from 'pages/ProductList';
import Layout1 from 'pages/ProductList/layouts/layout1';
import ProductListController from 'pages/ProductList/ProductListController';
import { getPageType } from 'services/page.service';

export default function Search(props: any) {
    const { pageType, pageData, slug } = props;
    let page = <>Loading ...</>;
    if (pageType) {
        if (pageType === 'collection') {
            page = <>Collection</>;
        }
        else if (pageType === 'product') {
            page = <>'product'</>;
        }
        else if ('brand,category'.includes(pageType)) {
            const { handleChange, colorChangeHandler } = ProductListController(pageData, slug);
            const { filters,
                product } = pageData;
            if (product) {
                page = <ProductList filters={filters} products={product} colorChangeHandler={colorChangeHandler} handleChange={handleChange} />
            } else {
                page = <>Loading ...</>
            }
        }
        else {
            page = <>Home</>
        }
    }
    return <>
            <Head>
                <title>{pageType.slug || 'Corporate Gear'}</title>
            </Head>
        {page}
    </>;
}

export const getServerSideProps = async (context: {
    params: { slug: string };
}) => {
    const slug = context.params.slug;
    const { data } = await getPageType({
        store_id: 4,
        slug,
    });
    const pageType = data.data.type;
    let pageData: any;


    if ('brand,category'.includes(pageType)) {
        let product: listType = [];
        const filter = {
            storeID: 4,
            brandId: 169,
            customerId: 1,
            filterOptionforfaceteds: [],
        };
        pageData = await FetchFiltersJsonByBrand(filter);
        const _filters = [];
        for (const key in pageData) {
            const element = pageData[key];
            if (element.length > 0 && key !== 'getlAllProductList') {
                _filters.push({
                    label: element[0].label,
                    options: element,
                });
            } else if (key === 'getlAllProductList') {
                product = element;
            }
        }
        pageData['filters'] = _filters;
        pageData['product'] = product;
    }

    return {
        props: {
            pageType,
            pageData,
            slug
        },
    };
};
