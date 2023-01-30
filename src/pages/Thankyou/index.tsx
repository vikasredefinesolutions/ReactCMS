import PageNotFound from 'appComponents/reUsable/404';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';

interface _ContactDetails {
    name: string,
    email: string,
    companyName: string,
    message: string,
}


const Thankyou = () => {
    const storeCode = useTypedSelector(state => state.store.layout)
    const offlineproduct = useTypedSelector(state => state.product.offlineProductSelected)


    if (storeCode == _Store.type4) {

        return (
            <section className="container mx-auto  mt-6" >
                <div className="mb-8 w-full">
                    <div className="w-full ">
                        <p className='block mb-8 text-3xl text-center uppercase font-semibold  mt-4' >Thank You</p>

                        <p className="text-center text-lg font-normal" >A dedicated member of our team will be in touch regarding your request within 2 business days.</p>
                    </div>
                </div>
            </section >
        );
    } else {
        return <PageNotFound />;
    }
};

export default Thankyou;
