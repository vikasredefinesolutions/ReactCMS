const AccountSetting = () => {
  return (
    <section className="container mx-auto  bg-gray-100 mb-6 ">
      <div className="gird grid-cols-1 lg:flex lg:items-center gap-6 lg:py-8 lg:px-12 px-4 py-4 lg:my-5">
        <div className="w-full mx-auto max-w-7xl">
          <div className="mb-6">
            <div className="mt-4">
              <label className="block text-base font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="Full Name"
                  name="Full Name"
                  placeholder="Enter Your Full Name"
                  value="John Thomas"
                  className="form-input"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-base font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  id="email-address"
                  name="email-address"
                  placeholder="Enter Email Address"
                  value="johnthomas@ecommerce.com"
                  className="form-input"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-base font-medium text-gray-700">
                Current Password
              </label>
              <div className="relative mb-2">
                <input
                  id="password"
                  className="form-input"
                  placeholder="Password"
                  type="password"
                  value="Admin@123"
                />
                <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-indigo-500 transition-colors">
                  <span className="material-symbols-outlined text-base">
                    visibility
                  </span>
                </button>

                <div className="absolute top-2 right-10">
                  <button className="" aria-haspopup="true">
                    <span className="material-icons-outlined ml-2 text-base">
                      info
                    </span>
                  </button>
                  <div className="z-10 absolute top-full left-32 transform -translate-x-1/2">
                    <div
                      className="bg-slate-500 p-2 overflow-hidden mt-2"
                      style={{ display: 'none' }}
                    >
                      <div className="text-sm text-gray-200 font-light whitespace-nowrap w-full text-left px-4 py-4">
                        <span className="w-full pt-1 pb-1 block font-semibold">
                          Your password must have :
                        </span>
                        <span className="w-full pt-1 pb-1 block">
                          8 Or more character
                        </span>
                        <span className="w-full pt-1 pb-1 block">
                          Upper and lowercase letters
                        </span>
                        <span className="w-full pt-1 pb-1 block">
                          At list one number
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a href="profile-setting.html" className="btn btn-primary">
                Profile Setting
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSetting;
