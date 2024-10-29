import { IoIosArrowRoundBack } from "react-icons/io";
import { SlLock } from "react-icons/sl";
import { TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";
import FormInput from "../../Common/FormInput";

const SecurityVerification = () => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    alert(e.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-[30%] mb-20">
        <div className="mt-14 flex">
          <span className="cursor-pointer">
            <IoIosArrowRoundBack size={30} />
          </span>
          <button className="text-md mt-1 font-light">Back</button>
        </div>
        <div className="py-6">
          <h1 className="text-3xl font-semibold">Security Verification</h1>
          <p className="text-gray-500 mt-2">
            To secure your account complete the verification <br /> process.
          </p>
        </div>
        <div className="flex py-4">
          <div className="flex">
            <div className="bg-[#38ada7] rounded-full p-4 text-white">
              <TbUsers size={20} />
            </div>
            <div className="px-2">
              <p className="text-gray-500 font-medium">Step 1</p>
              <p className="font-semibold">Create Account</p>
            </div>
          </div>
          <div className="relative top-6 w-12 h-[2px] bg-[#E0E0E0]">
            <hr />
          </div>
          <div className="flex">
            <div className="bg-[#38ada7] rounded-full p-4 text-white">
              <SlLock size={20} />
            </div>
            <div className="px-2">
              <p className="text-gray-500 font-medium">Step 2</p>
              <p className="font-semibold">Verify Account</p>
            </div>
          </div>
        </div>
        <form className=" ">
          <div className="form mt-8 flex flex-col">
            <div className="flex justify-between">
              {/* <label className="text-gray-400">
                Mobile Number Verfication Code
              </label> */}
              <FormInput
                label="Mobile Number Verfication Code"
                type="number"
                handleChange={handleInputChange}
                isRequired
                value=""
                name="mobileno"
                selectClass="border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />

            </div>
              <label className="text-sm font-semibold text-red-500">
                Get Code
              </label>
            {/* <div className="p-2 my-2 border border-gray-300 rounded-lg ">
              <input className="outline-none bg-transparent" type="text" />
            </div> */}

            <div className="flex justify-between mt-4">
              {/* <label className="text-gray-400">Email Verfication Code</label> */}
              <FormInput
                label="Email Verfication Code"
                type="number"
                handleChange={handleInputChange}
                isRequired
                value=""
                name="emailCode"
                selectClass="border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <label className="text-sm font-semibold text-red-500">
                Get Code
              </label>
            </div>

            {/* <div className="p-2 my-2 border border-gray-300 rounded-lg ">
              <input className="outline-none bg-transparent" type="email" />
            </div> */}
          </div>

          <Link to="/clinic-profile">
            <button className="p-2 w-full bg-[#38ada7] text-white font-semibold rounded-md mt-2 hover:text-[#38ada7] hover:bg-white hover:border hover:border-[#38ada7]">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SecurityVerification;
