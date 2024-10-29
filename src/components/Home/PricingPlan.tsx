import { FaCircleCheck } from "react-icons/fa6";
import lab from "../../assets/laboratory.png";
import hospital from "../../assets/hospital.png";
import pharmacy from "../../assets/pharmacy.png";

const PricingPlan = () => {
  return (
    <>
      <h1 className="text-[#307abd] text-4xl font-semibold text-center pt-20">
        Pricing Plan
      </h1>
      <div className="flex gap-6 px-24 mb-10 mt-12">
        <div className="h-[600px] w-1/3 bg-[#e1e5e4] border-4 border-[#e1e5e4] px-8 rounded-md">
          <div className="flex pt-4">
            <div>
              <img
                className="w-16 h-16 bg-white rounded-2xl p-2"
                src={lab}
                alt="laboratory"
              />
            </div>
            <div className="px-4 p-4">
              <p className="text-xs font-medium text-gray-500">Annually</p>

              <h6 className="text-sm font-medium text-gray-500">
                PATHOLAB MANAGEMENT
              </h6>
            </div>
          </div>
          <div className="pt-7">
            <p className="text-3xl font-bold">
              ₹ 3999
              <span className="text-gray-400 text-xs"> +GST(18%) </span>
              <span className="text-gray-400 font-medium text-base">
                / Annually
              </span>
            </p>
            <p className="text-xl pt-2 font-medium">What’s included</p>
          </div>
          <div className="pt-2">
            <ul className="">
              <div className=" flex pt-4">
                <p className="pt-1 text-[#38ada7]">
                  <FaCircleCheck />
                </p>
                <li className="px-2 text-gray-500">User Role Management</li>
              </div>
              <div className=" flex pt-4">
                <p className="pt-1 text-[#38ada7]">
                  <FaCircleCheck />
                </p>
                <li className="px-2 text-gray-500">Lab Management</li>
              </div>
              <div className=" flex pt-4">
                <p className="pt-1 text-[#38ada7]">
                  <FaCircleCheck />
                </p>
                <li className="px-2 text-gray-500">Patient Registration</li>
              </div>
              <div className=" flex pt-4">
                <p className="pt-1 text-[#38ada7]">
                  <FaCircleCheck />
                </p>
                <li className="px-2 text-gray-500">
                  Lab Test Sample Collection
                </li>
              </div>
              <div className=" flex pt-4">
                <p className="pt-1 text-[#38ada7]">
                  <FaCircleCheck />
                </p>
                <li className="px-2 text-gray-500">Lab Test Report</li>
              </div>
              <div className=" flex pt-4">
                <p className="pt-1 text-[#38ada7]">
                  <FaCircleCheck />
                </p>
                <li className="px-2 text-gray-500">Billing Management</li>
              </div>
              <div className=" flex pt-4">
                <p className="pt-1 text-[#38ada7]">
                  <FaCircleCheck />
                </p>
                <li className="px-2 text-gray-500">Reports</li>
              </div>

              <button className="bg-[#3b9cf6] w-full text-white font-semibold px-12 p-3 rounded-lg mt-10">
                Choose Plan
              </button>
            </ul>
          </div>
        </div>
        <div className="h-[600px] w-1/3 bg-[#38ada7] text-white px-8 rounded-3xl">
          <div className="flex pt-4 ">
            <div>
              <img
                className="w-16 h-16 bg-white rounded-2xl p-2"
                src={hospital}
                alt="laboratory"
              />
            </div>
            <div className="px-4 p-4 ">
              <p className="text-xs font-medium ">Annually</p>

              <h6 className="text-sm font-medium">OPD MANAGEMENT</h6>
            </div>
          </div>
          <div className="pt-7">
            <p className="text-3xl font-bold">
              ₹ 0<span className=" font-medium text-base">/ Annually</span>
            </p>
            <p className="text-xl pt-2 font-medium">What’s included</p>
          </div>
          <div className="pt-2">
            <ul className="">
              <div className=" flex pt-3">
                <p className="pt-1 text-white">
                  <FaCircleCheck />
                </p>
                <li className="px-2 ">Clinic Management</li>
              </div>
              <div className=" flex pt-3">
                <p className="pt-1 text-white">
                  <FaCircleCheck />
                </p>
                <li className="px-2 ">Doctor's Management</li>
              </div>
              <div className=" flex pt-3">
                <p className="pt-1 text-white">
                  <FaCircleCheck />
                </p>
                <li className="px-2 ">Daily Appointment Schedule</li>
              </div>
              <div className=" flex pt-3">
                <p className="pt-1 text-white">
                  <FaCircleCheck />
                </p>
                <li className="px-2 ">Patient Booking</li>
              </div>
              <div className=" flex pt-3">
                <p className="pt-1 text-white">
                  <FaCircleCheck />
                </p>
                <li className="px-2 ">Consultation Status</li>
              </div>
              <div className=" flex pt-3">
                <p className="pt-1 text-white">
                  <FaCircleCheck />
                </p>
                <li className="px-2 ">Live Consultation Screen</li>
              </div>
              <div className=" flex pt-3">
                <p className="pt-1 text-white">
                  <FaCircleCheck />
                </p>
                <li className="px-2 ">Billing Management</li>
              </div>
              <div className=" flex pt-3">
                <p className="pt-1 text-white">
                  <FaCircleCheck />
                </p>
                <li className="px-2 ">Daily Report</li>
              </div>

              <button className="bg-[#3b9cf6] w-full text-white font-semibold px-12 p-3 rounded-lg mt-9 hover:bg-[#FFC840]">
                Choose Plan
              </button>
            </ul>
          </div>
        </div>
        <div className="h-[600px] w-1/3 bg-[#e1e5e4] border-4 border-[#e1e5e4] px-8 rounded-md">
          <div className="flex pt-4">
            <div>
              <img
                className="w-16 h-16 bg-white rounded-2xl p-2"
                src={pharmacy}
                alt="laboratory"
              />
            </div>
            <div className="px-4 p-4">
              <p className="text-xs font-medium text-gray-500">Annually</p>

              <h6 className="text-sm font-medium text-gray-500">
                PHARMACY MANAGEMENT
              </h6>
            </div>
          </div>
          <div className="pt-7">
            <p className="text-3xl font-bold">
              ₹ 6999
              <span className="text-gray-400 text-xs"> +GST(18%) </span>
              <span className="text-gray-400 font-medium text-base">
                / Annually
              </span>
            </p>
            <p className="text-xl pt-2 font-medium">What’s included</p>
          </div>
          <div className="pt-2">
            <ul className="">
              <div className=" flex pt-4">
                <p className="pt-1 text-[#38ada7]">
                  <FaCircleCheck />
                </p>
                <li className="px-2 text-gray-500">Supplier Management</li>
              </div>
              <div className=" flex pt-4">
                <p className="pt-1 text-[#38ada7]">
                  <FaCircleCheck />
                </p>
                <li className="px-2 text-gray-500">Stock Purchase Entry</li>
              </div>
              <div className=" flex pt-4">
                <p className="pt-1 text-[#38ada7]">
                  <FaCircleCheck />
                </p>
                <li className="px-2 text-gray-500">Stock Management</li>
              </div>
              <div className=" flex pt-4">
                <p className="pt-1 text-[#38ada7]">
                  <FaCircleCheck />
                </p>
                <li className="px-2 text-gray-500">Counter Sell</li>
              </div>
              <div className=" flex pt-4">
                <p className="pt-1 text-[#38ada7]">
                  <FaCircleCheck />
                </p>
                <li className="px-2 text-gray-500">Billing Management</li>
              </div>
              <div className=" flex pt-4">
                <p className="pt-1 text-[#38ada7]">
                  <FaCircleCheck />
                </p>
                <li className="px-2 text-gray-500">Reports</li>
              </div>

              <button className="bg-[#3b9cf6] w-full text-white font-semibold px-12 p-3 rounded-lg mt-20">
                Choose Plan
              </button>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="px-24 font-medium">
        One time Registration Fees 1000.00 INR is applicable at the time of
        registration.
      </h1>
    </>
  );
};

export default PricingPlan;
