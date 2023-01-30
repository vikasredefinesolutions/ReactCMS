import { paths } from '@constants/paths.constant';
import { _ProductPolicy } from '@type/APIs/productDetail.res';
import StartOrderModal from 'appComponents/modals/StartOrderModal';
import ImageComponent from 'appComponents/reUsable/Image';
import CartSummary from 'Components/CartSummary/CartSummary';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const CartLayout4 = ({
    cartProducts,
    loadProduct,
    deleteCartItem,
    showEdit,
    product,
    setShowEdit,
    currentCartProduct,
    getPolicyDetails,
    productPolicy,
    endUserDisplay
}: any) => {
    const router = useRouter();

    const [endUserName, setEndUserName] = useState<string>('')
    useEffect(() => {
        getPolicyDetails(cartProducts)
    }, [])
    const [checked, setChecked] = useState<string[]>([])
    const handlecheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        var updateCheckedList = [...checked]
        if (event.target.checked) {
            updateCheckedList = [...checked, event.target.value]
        } else {
            updateCheckedList.splice(checked.indexOf(event.target.value), 1)
        }
        setChecked(updateCheckedList)
    }
    let uniquePolicybrand: string[] = []
    productPolicy.map((item: _ProductPolicy) => {
        if (item.isPolicywithcheckbox && item.brandName) {
            uniquePolicybrand.push(item.brandName)
        }
    })

    const buttonDisabed = (checked.length == uniquePolicybrand.length) ? endUserDisplay ? endUserName.length > 0 ? true : false : true : false;
    return (
        <>
            <section id="" className="mt-5">
                <div className="bg-white">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap -mx-3 -mt-3 cart-box">
                            <section
                                aria-labelledby="cart-heading"
                                className="w-full lg:w-9/12 px-3 mt-3"
                            >
                                <div className="flex justify-between items-center bg-gray-200 w-full px-4 py-2">
                                    <div className="text-2xl mr-3">Shopping Cart</div>
                                    <div className="text-base">
                                        {cartProducts.length} Item(s)
                                        <span className="hidden-xs"> in cart</span>
                                    </div>
                                </div>
                                <h2 id="cart-heading" className="sr-only">
                                    Items in your shopping cart
                                </h2>
                                <ul role="list" className="overflow-hidden">
                                    {cartProducts.map((product: any, index: number) => (
                                        <li key={index} className="flex flex-wrap py-5 -mx-3">
                                            <div className="w-full lg:w-1/4 px-3">
                                                {/* <Link href={`/${product.seName}`} title=""> */}
                                                <ImageComponent
                                                    src={product.colorImage}
                                                    alt="products"
                                                    className=""
                                                />
                                                {/* </Link> */}
                                            </div>
                                            <div className="w-full lg:w-3/4 px-3 flex flex-wrap lg:justify-between">
                                                <div className="text-lg font-semibold">
                                                    <Link
                                                        key={product.seName}
                                                        href={`/${product.seName}`}
                                                        id={product.seName}
                                                        className="text-black hover:text-anchor-hover"
                                                        title=""
                                                    >
                                                        {product.productName}
                                                    </Link>
                                                </div>
                                                <div className="w-full flex flex-wrap">
                                                    <div className="lg:w-2/3 w-full mt-2">
                                                        <div className="flex justify-between">
                                                            <div className="text-base">
                                                                <span className="font-semibold">SKU :</span>{' '}
                                                                {product.sku}
                                                            </div>
                                                        </div>
                                                        <div className="mt-1 flex">
                                                            <div className="text-base">
                                                                <span className="font-semibold">Color :</span>{' '}
                                                                {product.attributeOptionValue}
                                                            </div>
                                                        </div>
                                                        <div className="mt-10">
                                                            <div className="text-base font-semibold border-b pb-2">
                                                                Item Details
                                                            </div>
                                                            <div className="flex justify-between py-2">
                                                                <div className="text-base font-semibold w-28">
                                                                    Size
                                                                </div>
                                                                <div className="text-base font-semibold w-16 text-center">
                                                                    Qty
                                                                </div>
                                                                <div className="text-base font-semibold w-20 text-right">
                                                                    Price
                                                                </div>
                                                            </div>

                                                            {product.shoppingCartItemDetailsViewModels.map(
                                                                (item: any, index: number) => (
                                                                    <div
                                                                        key={index}
                                                                        className="flex justify-between py-2"
                                                                    >
                                                                        <div className="text-base w-28">
                                                                            {item.attributeOptionValue}
                                                                        </div>
                                                                        <div className="text-base w-16 text-center">
                                                                            {item.qty}
                                                                        </div>
                                                                        <div className="text-base w-20 text-right">
                                                                            ${item.price}
                                                                        </div>
                                                                    </div>
                                                                ),
                                                            )}

                                                            <div className="flex justify-between py-3 border-t border-b">
                                                                <div className="text-base w-28">
                                                                    Product Total:
                                                                </div>
                                                                <div className="text-base w-16 text-center">
                                                                    {product.totalQty}
                                                                </div>
                                                                <div className="text-base w-20 text-right">
                                                                    ${product.totalPrice}
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <div className="mt-2 lg:w-1/3 w-full">
                                                        <div className="bold text-xl text-right">
                                                            <span className="">
                                                                Item Total:
                                                                <br />${product.totalPrice}
                                                            </span>
                                                        </div>
                                                        <div className="mt-6 lg:ml-10">
                                                            <button
                                                                onClick={() => loadProduct(product)}
                                                                data-modal-toggle="startorderModal"
                                                                className="btn btn-secondary !w-full !py-1 text-center"
                                                            >
                                                                EDIT ITEM
                                                            </button>
                                                        </div>
                                                        <div className="mt-3 lg:ml-10">
                                                            <button
                                                                onClick={() =>
                                                                    deleteCartItem(product.shoppingCartItemsId)
                                                                }
                                                                className="btn btn-primary !w-full !py-1 text-center"
                                                            >
                                                                REMOVE
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section
                                aria-labelledby="summary-heading"
                                className="w-full lg:w-3/12 px-3 mt-3"
                            >
                                <CartSummary title="Cart Summary" />
                                {productPolicy.map((policy: _ProductPolicy) => {
                                    return (
                                        policy.isPolicywithcheckbox &&
                                        <div className='p-2' key={policy.brandName}>
                                            <input className='w-4 h-4 rounded m-4' type="checkbox" id={policy.brandName || ''} value={policy.brandName || ''} onChange={(event) => handlecheck(event)} />
                                            <strong className="text-lg font-semibold mt-4 p-4">{policy.policyMessage}<span className="text-red-600 p-1">*</span></strong>
                                        </div>)

                                })}
                                {
                                    endUserDisplay &&
                                    <div className="text-lg font-semibold mt-4"> End User Name (your customer) :<span className="text-red-600">*</span>
                                        <input type="text" id="enduserstio" className="p-2 w-full" onChange={(event) => setEndUserName(event.target.value)} />
                                    </div>}

                                <div className="mt-4 w-full">
                                    <button id="checkout" key={'/checkout'} onClick={() => router.push(paths.CHECKOUT)} className={`mt-4 w-full `} disabled={!buttonDisabed}>
                                        <a className={`btn btn-lg btn-secondary !flex items-center justify-center w-full ${!buttonDisabed ? 'opacity-40' : ''}`}>
                                            <i
                                                className="fa fa-shopping-cart mr-2"
                                                aria-hidden="true"
                                            ></i>
                                            CHECKOUT NOW
                                        </a>
                                    </button>
                                </div>
                                <div className="mt-4 bg-gray-200 px-4 py-4">
                                    <div className="flex items-center justify-center">
                                        <img
                                            src="images/order-risk-free-icon.jpg"
                                            alt=""
                                            className="mr-2"
                                        />
                                        <span className="text-xl font-semibold">
                                            Order Risk-Free!
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-center text-lg text-center mt-3">
                                        Cancel your order without penalty anytime before your proof
                                        is approved.
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
            </section>
            {showEdit && product && (
                <StartOrderModal
                    modalHandler={() => setShowEdit(false)}
                    product={product}
                    editDetails={currentCartProduct}
                />
            )}
        </>
    );
};

export default CartLayout4;
