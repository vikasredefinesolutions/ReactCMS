import Head from 'next/head';

const SeoHead = (props: {
    title: string;
    keywords: string;
    description: string;
}) => (
    <Head>
        <title>{props.title}</title>
        <meta
            name="description"
            content={props.description}
            key="desc"
        />
        <meta name="keywords" content={props.keywords} />
    </Head>
)

export default SeoHead;