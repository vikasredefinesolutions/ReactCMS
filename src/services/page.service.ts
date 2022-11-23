import axios from 'axios';

export const getPageType = async (Req: {
    store_id: number;
    slug: string;
}) => {
    const url = 'https://www.redefinecommerce.net/API/api/front/get-page-type'
    const page = await axios.post(url, Req)
    return page;
};

export const getPageComponents = async (Req: {
    page_id: number;
}) => {
    const url = `https://www.redefinecommerce.net/API/api/front/topic/component/get/${Req.page_id}`;
    console.log("data", url);

    const page = await axios.get(url);
    return page;
};