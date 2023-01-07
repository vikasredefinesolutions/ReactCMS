import { Corporate_LoginIcon } from './Icons/Corporate_LoginIcon';
import Corporate_MyCartIcon from './Icons/Corporate_MyCartIcon';

export const Bacardi_HeaderBar = () => {
  return (
    <div className="bg-primary hidden md:block p-2 lg:p-1 lg:py-2">
      <div className="container mx-auto">
        <div className="sm:flex sm:flex-wrap sm:justify-between items-center text-xs">
          <div className="text-center text-white">
            <span className="">ParsonsKellogg Corporate Stores </span>
          </div>
          <div className="flex">
            <Corporate_LoginIcon />
            <span className="text-white mx-2">|</span>
            <Corporate_MyCartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
