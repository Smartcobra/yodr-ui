import { FaUpload } from "react-icons/fa6";
import { PROFILE_PICTURE } from "../../../utils/constants";
import { TextArea } from "../../Common/TextArea";
import { DatePicker } from "../../Common/Date";
import inputFields from "../../../utils/inputFields.json";
import FormInput from "../../Common/FormInput";
import React, { useState } from "react";
import { handleFieldLevelValidation } from "../../Common/services/validations";
import { Select } from "../../Common/Select";

interface ProfileSettingsFormProps {
  active: string;
  open: boolean;
}

const ProfileSettingsForm: React.FC<ProfileSettingsFormProps> = ({active}) => {

  const [inputControls, setInputControls] = useState(
    inputFields.input_field_profile_setting
  );

  const [formData, setFormData] = useState({
    username:"",
    useremail:"",
    userPhoneNo:"",
    telephoneNo:"",
    // gender:[],
    birthdate:"",
    address:"",
    street:"",
    city:"",
    postalCode:""
  })

  const handleChange = (e: any) => {
    // handleFieldLevelValidation(e, inputControls, setInputControls);
    
    // console.log(e.target.value);

    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  };

  return (
    <>
      <div className="bg-slate-50 shadow-sm h-screen">
        {active === "profileSetting" && (
          <div className="p-4 flex">
            <img className="w-28" src={PROFILE_PICTURE} alt="profile" />
            <div className="pt-6 px-4">
              <div className="flex bg-[#45bab5] text-white w-44 px-6 rounded-full">
                <span className="pt-2">
                  <FaUpload size={20} />
                </span>
                <button className="font-semibold text-sm p-2 rounded-full">
                  Upload Logo
                </button>
              </div>
              <p className="text-gray-500 text-sm pt-2">
                Allowed JPG, GIF or PNG. Max size of 2MB
              </p>
            </div>
          </div>
        )}
        <div className="form px-6 pt-10">
          <form>
            {active === "profileSetting" && (
              <div className="flex flex-wrap gap-10 mb-4 ">
                {inputFields.input_field_profile_setting?.map((obj: any) => {
                  switch (obj.tag) {
                    case "input":
                      return (
                        <FormInput
                          {...obj}
                          selectClass={`w-80 border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                          handleChange={handleChange}
                        />
                      );
                    case "textarea":
                      return (
                        <TextArea
                          {...obj}
                          selectClass={`border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                          handleChange={handleChange}
                        />
                      );
                    case "date":
                      return (
                        <DatePicker
                          {...obj}
                          selectClass={`w-80 border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                          handleChange={handleChange}
                        />
                      );
                    case "select":
                      return (
                        <Select
                          options={obj.options.map((option: any) => (
                            <>
                              {option.value}
                              {option.label}
                            </>
                          ))}
                          {...obj}
                          selectClass="border border-teal-300 rounded-md bg-teal-50 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
                          handleChange={handleChange}
                        />
                      );
                    default:
                      return <></>;
                  }
                })}
              </div>
            )}

            {/*  Business Information Form */}

            {active === "clinic" && (
              <div className="">
                {inputFields.clinic_input_fields?.map((input, index) => {
                  return (
                    <>
                      <div key={index} className="text-2xl font-semibold">
                        {input.heading}
                      </div>
                      {input.fields.map((field: any) => {
                        switch (field.tag) {
                          case "input":
                            return (
                              <FormInput
                                {...field}
                                selectClass={` border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                                handleChange={handleChange}
                              />
                            );
                          case "textarea":
                            return (
                              <TextArea
                                {...field}
                                selectClass={`border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                                handleChange={handleChange}
                              />
                            );
                          case "date":
                            return (
                              <DatePicker
                                {...field}
                                selectClass={` border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                                handleChange={handleChange}
                              />
                            );
                          case "select":
                            return (
                              <Select
                                options={field.options.map((option: any) => (
                                  <>
                                    {option.value}
                                    {option.label}
                                  </>
                                ))}
                                {...field}
                                selectClass="w-80 border border-teal-300 rounded-md bg-teal-50 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                handleChange={handleChange}
                              />
                            );
                          default:
                            return <></>;
                        }
                      })}
                    </>
                  );
                })}
              </div>
            )}
          </form>
        </div>
        {/* <LiveCamera/> */}
        <div className="flex justify-center pt-4 ">
          <button className="bg-dark-greenish p-3 px-5 font-semibold m-2 border text-white rounded-lg hover:bg-[#3ca09b]">
            Submit For Verification
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileSettingsForm;
