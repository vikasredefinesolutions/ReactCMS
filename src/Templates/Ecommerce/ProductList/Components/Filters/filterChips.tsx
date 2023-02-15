import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { FilterChangeHandler } from '@type/productList.type';
import { CheckedFilter } from '@type/slug.type';
const FilterChips = ({
  checkedFilters,
  clearFilters,
  handleChange,
}: {
  checkedFilters: CheckedFilter[];
  clearFilters: () => void;
  handleChange: FilterChangeHandler;
}) => {
  return checkedFilters.length > 0 ? (
    <div className='mt-4 flex gap-2 text-sm leading-none'>
      <div className='font-semibold whitespace-nowrap mt-1.5'>Filters :</div>
      <div className=''>
        <ul className='flex flex-wrap gap-2'>
          {checkedFilters.map((filter, index) => (
            <li key={index} className=''>
              <a className='btn btn-sm btn-primary !inline-flex items-center !rounded-md gap-x-2 !py-1 !text-sm'>
                <span>{filter.value}</span>
                <span
                  onClick={() => {
                    handleChange(filter.name, filter.value, false);
                  }}
                >
                  <CloseOutlinedIcon />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='whitespace-nowrap mt-1.5'>
        <button onClick={clearFilters} className='inline-block font-semibold'>
          Clear All
        </button>
      </div>
    </div>
  ) : null;
};

export default FilterChips;
