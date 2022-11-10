import { getPageType } from "services/page.service";

export default function Search(props :any) {
    console.log(props);
    return (
      <>{'sadfas'}</>
    )
  }
  
  export const getServerSideProps = async (context: { params: { slug: any; }; }) => {
    const slug = context.params.slug;
    const {data} = await getPageType({
        store_id: 4,
        slug
    });
    
    return {
        props: {
            pageType: data.data
        }
    }
  }