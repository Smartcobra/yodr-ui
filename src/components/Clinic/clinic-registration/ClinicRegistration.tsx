import { TbUsers } from "react-icons/tb";
import { SlLock } from "react-icons/sl";
import React, { useState } from "react";
import SecurityVerification from "./SecurityVerification";
// import { TextArea } from "../../Common/TextArea";
import FormInput from "../../Common/FormInput";

const ClinicRegistration = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleNext = (e: any) => {
    e.preventDefault();
    setShowComponent(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    alert(e.target.value);
  };

  return (
    <>
      {!showComponent ? (
        <div className="flex justify-center items-center">
          <div className="flex flex-col w-[30%] mb-20">
            <div className="mt-14">
              <h1 className="text-3xl font-semibold">Business Registration</h1>
              <p className="text-gray-500 mt-2">
                Please enter your mandatory details.
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
                <div className="bg-[#c9e3fe] rounded-full p-4 text-white">
                  <SlLock size={20} />
                </div>
                <div className="px-2 text-gray-300">
                  <p>Step 2</p>
                  <p>verify Account</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleNext}>
              <div className="form mt-8 flex flex-col">
                <FormInput
                  label="Business Owner Name"
                  type="text"
                  handleChange={handleInputChange}
                  isRequired
                  value=""
                  name="name"
                  selectClass="border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <FormInput
                  label="Email"
                  type="text"
                  handleChange={handleInputChange}
                  isRequired
                  value=""
                  name="email"
                  selectClass="border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <FormInput
                  label="Mobile Number"
                  type="number"
                  handleChange={handleInputChange}
                  isRequired
                  value=""
                  name="mobileno"
                  selectClass="border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>

              <button className="pl-2 p-2 w-full bg-[#38ada7] text-white font-semibold rounded-md mt-2 hover:text-[#38ada7] hover:bg-white hover:border hover:border-[#38ada7] ">
                Next
              </button>

              <p className="text-gray-500 mt-2 text-center">
                Already have an account ?
                <span className="text-[#38ada7] text-sm hover:underline px-2 cursor-pointer">
                  Sign In
                </span>
              </p>
            </form>
          </div>
        </div>
      ) : (
        <SecurityVerification />
      )}
    </>
  );
};

export default ClinicRegistration;
