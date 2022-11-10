import axios from 'axios';

export const getPageType = async (Req: {
    store_id: number;
    slug: string;
}) => {
    const url = 'https://www.redefinecommerce.net/API/api/front/get-page-type'
    const page = await axios.post(url, Req)
    return page;
}