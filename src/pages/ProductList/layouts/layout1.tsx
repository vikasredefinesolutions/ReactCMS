import { Menu, MenuItem } from "@mui/material";
import { ColorChangeHandler, FilterChangeHandler, FilterType, GetlAllProductList, ProductList } from "@type/productList.type";
import ProductComponent from "component/Product/Product";
import { Fragment, useState } from "react";
import SideFilter from "../components/Filters/sideFilter";

const Layout1 = ({ filters, products, checkedFilters, totalCount, colorChangeHandler, handleChange, loadMore, sortProductJson }: { filters: FilterType, products: ProductList, checkedFilters: any, totalCount: number, colorChangeHandler: ColorChangeHandler, handleChange: FilterChangeHandler, loadMore: () => void , sortProductJson: (arg: number) => {}}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            {/* <ProductDetailsPageBanner /> */}
            <section id="">
                <div className="bg-white">
                    <div className="container mx-auto">
                        <div aria-labelledby="products-heading" className="mt-8">
                            <h2 id="products-heading" className="sr-only">
                                Products
                            </h2>
                            <div className="flex flex-wrap -mx-4" id="gridview">
                                {filters.length > 0 && <SideFilter
                                    filters={filters}
                                    handleChange={handleChange}
                                    checkedFilters={checkedFilters}
                                />}
                                {/*   relative w-full pb-6 -mb-6 */}
                                <div className="w-full lg:w-9/12 px-4">
                                    <div className="relative z-10 border-t border-b border-gray-200">
                                        <h2 id="filter-heading" className="sr-only">
                                            Filters
                                        </h2>
                                        <div className="relative py-4">
                                            <div className="container mx-auto flex space-x-6 divide-x divide-gray-200 text-sm">
                                                <div className="flex-1 flex flex-wrap items-center pr-2">
                                                    <span>{totalCount} results</span>
                                                </div>
                                                <div className="col-start-1 row-start-1">
                                                    <div className="flex justify-end max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-8 z-40">
                                                        <div className="flex items-center">
                                                            <div
                                                                x-data="Components.menu({ open: false })"
                                                                x-init="init()"
                                                                className="relative inline-block text-left"
                                                            >
                                                                <div>
                                                                    <button
                                                                        type="button"
                                                                        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                                                        id="menu-button"
                                                                        x-ref="button"
                                                                        aria-expanded="false"
                                                                        aria-haspopup="true"
                                                                        onClick={handleClick}
                                                                    >
                                                                        Sort
                                                                        <svg
                                                                            className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                            x-description="Heroicon name: solid/chevron-down"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 20 20"
                                                                            fill="currentColor"
                                                                            aria-hidden="true"
                                                                        >
                                                                            <path
                                                                                fill-rule="evenodd"
                                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                                clip-rule="evenodd"
                                                                            ></path>
                                                                        </svg>
                                                                    </button>
                                                                    <Menu
                                                                        id="basic-menu"
                                                                        anchorEl={anchorEl}
                                                                        open={open}
                                                                        onClose={handleClose}
                                                                        MenuListProps={{
                                                                            'aria-labelledby': 'basic-button',
                                                                        }}
                                                                    >
                                                                        <MenuItem onClick={() => {
                                                                            sortProductJson(1)
                                                                            handleClose()
                                                                        }}>
                                                                            Newest
                                                                        </MenuItem>
                                                                        <MenuItem onClick={() => {
                                                                            sortProductJson(2)
                                                                            handleClose()
                                                                        }}>
                                                                            Price: Low to High
                                                                        </MenuItem>
                                                                        <MenuItem onClick={() => {
                                                                            sortProductJson(3)
                                                                            handleClose()
                                                                        }}>
                                                                            Price: High to Low
                                                                        </MenuItem>
                                                                    </Menu>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <ul
                                        role="list"
                                        className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8"
                                    >
                                        {
                                            products.map((product: GetlAllProductList, index: number) => (
                                                <Fragment key={index}>
                                                    <ProductComponent
                                                        product={product}
                                                        colorChangeHandler={colorChangeHandler}
                                                    />
                                                </Fragment>
                                            ))}

                                    </ul>
                                    <div className="py-24 border-t border-t-gray-300">
                                        <p className="text-center">You've seen {products.length} Products out of {totalCount}</p>
                                        {
                                            products.length < totalCount && <button
                                                onClick={loadMore}
                                                type="submit"
                                                className="mt-8 w-auto mx-auto bg-white border border-gray-800 py-3 px-24 flex items-center text-center justify-center text-base font-medium text-gray-800 hover:bg-blue-500 hover:border-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                            >
                                                View More
                                            </button>
                                        }
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default Layout1;