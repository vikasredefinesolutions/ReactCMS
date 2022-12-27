import { FilterChangeHandler, FilterType } from '@type/productList.type';

const FilterLayout3 = ({
    filters,
    handleChange,
    checkedFilters,
}: {
    filters: FilterType;
    handleChange: FilterChangeHandler;
    checkedFilters: any;
}) => {
    return (
        <div className="filter-box">
            {filters.map((filter, index) => (
                <div key={index} className="px-0 py-2" x-data="{ open: false }">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full group"
                        aria-expanded="false"
                    >
                        <div className="font-medium">{filter.label}</div>
                    </button>
                    <div className="text-sm pb-2" x-show="open">
                        <ul className="pt-2 pb-6 space-y-3">
                            {filter.options.map((option, index) => (
                                <li key={index} className="flex items-center">
                                    <input
                                        id="material-0"
                                        name="material[]"
                                        value="new-arrivals"
                                        type="checkbox"
                                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                        htmlFor="material-0"
                                        className="ml-3 text-sm text-gray-600"
                                    >
                                        {option.name} ({option.productCount})
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FilterLayout3;
