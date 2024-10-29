const BookAppointmentEasySteps = () => {
  return (
    <div className="flex bg-[#F2F6F6] p-8 pt-36">
      <div className="w-1/3 flex justify-center">
        <img
          className="w-96"
          src="https://dev.yodr.live/assetswebnew/img/yodr/doctor_solution.png"
          alt="doctor_solution"
        />
      </div>
      <div className="w-8/12">
        <h3 className="text-[#38ada7] font-semibold text-xl text-center">
          How it Works
        </h3>
        <h1 className="text-4xl font-semibold pt-2 text-center">
          4 Easy Steps To Get Your Solution
        </h1>
        <div>
          <div className="p-8 px-24">
            <div className="flex items-center">
              <img
                className="bg-[#E0E7FF] p-4 rounded-lg w-16 h-16 border"
                src="https://dev.yodr.live/assetswebnew/img/icons/work-01.svg"
                alt="work-01"
              />
              <div className="flex flex-col px-4">
                <p className="text-lg font-semibold">Registration</p>
                <span className="text-sm font-semibold text-gray-400">
                  Begin by registering effortlessly on our platform.
                </span>
              </div>

              <img
                className="bg-[#E0E7FF] p-4 rounded-lg w-16 h-16 border"
                src="https://dev.yodr.live/assetswebnew/img/icons/work-02.svg"
                alt="work-01"
              />
              <div className="flex flex-col px-4">
                <p className="text-lg font-semibold">Setup</p>
                <span className="text-sm font-semibold text-gray-400">
                  Tailor your profile to meet your unique needs and preferences.
                </span>
              </div>
            </div>

            <div className="flex items-center pt-10">
              <img
                className="bg-[#E0E7FF] p-4 rounded-lg w-16 h-16 border"
                src="https://dev.yodr.live/assetswebnew/img/icons/work-03.svg"
                alt="work-01"
              />
              <div className="flex flex-col px-4">
                <p className="text-lg font-semibold">Integration</p>
                <span className="text-sm font-semibold text-gray-400">
                  Seamlessly integrate our solution into your workflow, ensuring
                  a smooth transition.
                </span>
              </div>

              <img
                className="bg-[#E0E7FF] p-4 rounded-lg w-16 h-16 border"
                src="https://dev.yodr.live/assetswebnew/img/icons/work-04.svg"
                alt="work-01"
              />
              <div className="flex flex-col px-4">
                <p className="text-lg font-semibold">Optimization</p>
                <span className="text-sm font-semibold text-gray-400">
                  Enjoy immediate benefits, with enhanced efficiency and
                  streamlined operations for optimal patient management.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentEasySteps;
