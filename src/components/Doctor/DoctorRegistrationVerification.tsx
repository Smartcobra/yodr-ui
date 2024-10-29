import { SlLock } from "react-icons/sl";
import { TbUsers } from "react-icons/tb";
import FormInput from "../Common/FormInput";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

const DoctorRegistrationVerification = () => {
  const [verificationData, setVerificationData] = useState({
    emailCode: "",
    mobileCode: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVerificationData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex flex-col w-[30%] mb-20">
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
                <p className="text-gray-500 font-sm">Step 1</p>
                <p className="font-medium">Create Account</p>
              </div>
            </div>
            <div className="relative top-6 w-12 h-[2px] bg-[#38ada7]">
              <hr />
            </div>
            <div className="flex">
              <div className="bg-[#38ada7] rounded-full p-4 text-white">
                <SlLock size={20} />
              </div>
              <div className="px-2">
                <p className="text-gray-500 font-sm">Step 2</p>
                <p className="font-medium">Verify Account</p>
              </div>
            </div>
          </div>
          <form>
            <div className="form mt-8 flex flex-col">
              <div className=" ">
                <FormInput
                  label="Email Verification Code"
                  type="number"
                  placeholder ="Enter Email Code"
                  handleChange={handleInputChange}
                  isRequired
                  value={verificationData.emailCode}
                  name="emailCode"
                  selectClass="border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <div className=" text-right">
                  <button className="bg-teal-500 rounded-lg w-24 text-sm font-semibold text-white">
                    Get Code{" "}
                  </button>
                </div>
              </div>
              {/* Email Verification */}
              <div className=" mt-1">
                <FormInput
                  label="Mobile Number Verification Code"
                  type="number"
                  placeholder ="Enter Your Mobile Code"
                  handleChange={handleInputChange}
                  isRequired
                  value={verificationData.mobileCode}
                  name="mobileCode"
                  selectClass="border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <div className=" text-right">
                  <button className="bg-teal-500 rounded-lg w-24 text-sm font-semibold text-white">
                    Get Code{" "}
                  </button>
                </div>
              </div>
            </div>
            <Link to={"/doctor-profile"}>
            <button
              //   onClick={handleSubmit}
              className="p-2  w-full bg-[#38ada7] text-white font-semibold rounded-md mt-6 hover:text-[#38ada7] hover:bg-white hover:border hover:border-[#38ada7]"
              type="submit"
            >
              Submit
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegistrationVerification;
