const ProductListing = () => {
    return (
        <>Nested</>
    )
}


export const getServerSideProps = async (context: {
    params: { slug: string, ['slug-id']: string[] };
}) => {
    const slug = context.params['slug-id'];
    console.log(slug.at(-1));
    return {
        props: {
            title: 'Husain'
        }
    }
}

export default ProductListing;