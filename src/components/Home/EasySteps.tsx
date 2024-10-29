const EasySteps = () => {
  return (
    <div className="flex px-16">
      <div className="w-1/2">
        <div className="px-16 flex gap-8">
          <div className="box-right w-60 h-56 rounded-3xl mb-6 p-7 shadow-2xl flex justify-center items-center bg-[#fff] relative">
            <div className="box-detail">
              <span className="text-[#38ada7] font-bold text-3xl absolute left-28 top-[34%]">
                1
              </span>
              <img
                src="https://yodr.live/assetswebnew/img/icons/hreat-pulse.svg"
                alt="heart-pulse"
              />
              <h6 className="font-semibold text-xl text-center">Register</h6>
            </div>
          </div>
          <div className="box-right mt-8 w-60 h-56 rounded-3xl mb-6 p-7 shadow-2xl flex justify-center items-center bg-[#fff] relative">
            <div className="box-detail">
              <span className="text-[#38ada7] font-bold text-3xl absolute left-28 top-[34%]">
                2
              </span>
              <img
                src="https://yodr.live/assetswebnew/img/icons/hreat-pulse.svg"
                alt="heart-pulse"
              />
              <h6 className="font-semibold text-xl text-center">
                Filled Up Details
              </h6>
            </div>
          </div>
        </div>
        <div className="px-16 flex gap-8">
          <div className="box-right12 -mt-6 w-60 h-56 rounded-3xl mb-6 p-7 shadow-2xl flex justify-center items-center bg-[#fff] relative">
            <div className="box-detail">
              <span className="text-[#38ada7] font-bold text-3xl absolute left-28 top-[34%]">
                3
              </span>
              <img
                src="https://yodr.live/assetswebnew/img/icons/hreat-pulse.svg"
                alt="heart-pulse"
              />
              <h6 className="font-semibold text-xl text-center">Verify With YoDr.</h6>
            </div>
          </div>
          <div className="box-right2 mt-2 w-60 h-56 rounded-3xl mb-6 p-7 shadow-2xl flex justify-center items-center bg-[#fff] relative">
            <div className="box-detail">
              <span className="text-[#38ada7] font-bold text-3xl absolute left-28 top-[34%]">
                4
              </span>
              <img
                src="https://yodr.live/assetswebnew/img/icons/hreat-pulse.svg"
                alt="heart-pulse"
              />
              <h6 className="font-semibold text-xl text-center">
                Ready To Use
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="text-5xl font-semibold mt-8">
          Easy Steps For <br />
          <span className="text-[#307abd]">Clinic Owners & Doctors</span>
        </h1>
        <div>
          <p className="mt-12 text-gray-500 text-lg">
            Visit our website
            <span className="text-[#38ada7] font-medium pl-2">
              https://yodr.live
            </span>
          </p>
          <p className="mt-4 text-gray-500 text-lg">
            Go to "Sign In" if you already have an account or click "Create
            Account" for a new one.
          </p>
          <p className="mt-4 text-gray-500 text-lg">
            Provide the required information such as your name, email address,
            and any contact details as requested.
          </p>
          <p className="mt-4 text-gray-500 text-lg">
            Follow the on-screen instructions to complete the profile creation
            process.
          </p>
        </div>
          <button className="text-white text-base mt-4 bg-[#38ada7] px-8 p-3 m-2 font-semibold rounded-full">
            Check Our Plan
          </button>
      </div>
    </div>
  );
};

export default EasySteps;
