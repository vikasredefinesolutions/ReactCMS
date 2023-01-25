import { ClearBrandCache, ClearCategoryCache } from '@services/cache.service'
import { useTypedSelector } from 'hooks'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ClearCache: NextPage = () => {

    const storeId = useTypedSelector(state => state.store.id);
    const { query } = useRouter();
    const { brand_id, category_id } = query;

    useEffect(() => {
        if (storeId) {
            if (brand_id) {
                ClearBrandCache({ storeid: storeId, brandid: +brand_id })
            }
            if (category_id) {
                ClearCategoryCache({ storeid: storeId, categoryid: +category_id })
            }
        }
    }, [])


    return (
        <></>
    )
}

export default ClearCache