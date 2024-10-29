import inputField from "../../utils/inputFields.json";
import { Select } from "../Common/Select";
import DoctorSpecialization from "./DoctorSpecialization";
import FormInput from "../Common/FormInput";
import DashBoard from "./DashBoard";
import ProfilePictureUpdate from "./ProfilePictureUpdate";
import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  handleFieldLevelValidation,
  handleFormLevelValidation,
} from "../Common/services/validations";
import { DatePicker } from "../Common/Date";
import { TextArea } from "../Common/TextArea";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import apiClient from "../../utils/axios";

interface ProfileSettingsFormProps {
  active: string;
}

interface UserData {
  name: string;
  id: number;
  mobileNo: number;
  email:string
}

const ProfileSetting: FC<ProfileSettingsFormProps> = ({ active }) => {
  const [inputControls, SetInputControls] = useState(
    inputField.doctor_profile_input_field
  );

  const { id } = useParams<{ id: string }>();
 console.log("paramid",id);
 
  
  
  

  const [userData, setUserData] = useState<UserData | null>(null);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("try",id);
        
        if(id){
          const numericId:number = parseInt(id)
          console.log(numericId);
          
          const response = await apiClient.get("http://localhost:3002/api/users/"+numericId);
        setUserData(response.data.user); 
        console.log("Fetched data:", response.data.user);
        }
        
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchUserData();
  }, []);

  // useEffect(() => {
  //   if (userData) {
  //     console.log("User ID:", userData); // Logs user ID once userData is set
  //   }
  // }, [userData]);

  if (userData) {
    const { name, id, mobileNo, email } = userData;
    console.log(name, id, mobileNo, email);
  }


  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    handleFieldLevelValidation(e, inputControls, SetInputControls);
  };

  const fnSubmit = async () => {
    const [isInValid, data]: any = handleFormLevelValidation(
      inputControls,
      SetInputControls
    );
    if (isInValid) {
      toast.error("Form is invalid");
      return;
    }
  };

  return userData === null ? (
    <h1  className="text-md font-bold ml-2">Loading...</h1>
  ) : (
    <div className="bg-white shadow-sm overflow-y-hidden mx-5">
      <div className="w-full mx-auto shadow-[0px_0px_50px_15px_#00000024] my-5 rounded-lg">
        {active === "profileSetting" && (
          <>
            <div>
              <ProfilePictureUpdate />
            </div>
            <div className="form px-6 pt-10">
              <form>
                {active === "profileSetting" && (
                  <>
                    <section className=" flex gap-3">
                      {inputControls?.map((input, index) => {
                        switch (input.tag) {
                          case "input":
                            return (
                              <div key={index} className="w-60">
                                <FormInput
                                  {...input}
                                  handleChange={(e: any) =>
                                    handleInputChange(e, index)
                                  }
                                  readOnly={true}
                                  value={input.name === 'name' ? userData?.name : input.name === 'email' ? userData?.email :input.name=== "mobileNo" ?  userData?.mobileNo.toString() : ""}
                                  selectClass={`border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                                />
                              </div>
                            );
                          case "select":
                            return (
                              <div key={index} className="w-60">
                                <Select
                                  options={
                                    input.options?.map((option: any) => ({
                                      value: option.value,
                                      label: option.label,
                                    })) || []
                                  }
                                  {...input}
                                  errMsgCols={`w-full`}
                                  selectClass="w-full border border-teal-300 rounded-md bg-teal-50 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                  handleChange={(e: any) =>
                                    handleInputChange(e, index)
                                  }
                                />
                              </div>
                            );
                          case "date":
                            return (
                              <div key={index} className="w-60">
                                <DatePicker
                                  {...input}
                                  errMsgCols={`w-full`}
                                  selectClass={`w-full border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                                  handleChange={(e: any) =>
                                    handleInputChange(e, index)
                                  }
                                />
                              </div>
                            );

                          default:
                            return <></>;
                        }
                      })}
                    </section>
                    {/* About */}
                    <h2 className="text-2xl font-bold mb-4 pl-3 text-center">
                      About
                    </h2>
                    <section className="">
                      {inputControls?.map((input, index) => {
                        switch (input.tag) {
                          case "textarea":
                            return (
                              <div key={index} className="">
                                <TextArea
                                  {...input}
                                  handleChange={(e: any) =>
                                    handleInputChange(e, index)
                                  }
                                  inputCols={`w-full`}
                                  selectClass={`w-full h-20 mt-2 border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                                />
                              </div>
                            );
                          default:
                            return null; // If no matching tag, return null
                        }
                      })}
                    </section>
                    <h2 className="text-2xl font-bold mb-4 pl-3 text-center">
                      Contact Details
                    </h2>
                    <section className="flex gap-4">
                      {inputControls?.map((input, index) => {
                        switch (input.tag) {
                          case "address":
                            return (
                              <div key={index} className="w-72">
                                <FormInput
                                  {...input}
                                  handleChange={(e: any) =>
                                    handleInputChange(e, index)
                                  }
                                  selectClass={`border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                                />
                              </div>
                            );
                          case "selectAddress":
                            return (
                              <div key={index} className="w-72">
                                <Select
                                  options={
                                    input.options?.map((option: any) => ({
                                      value: option.value,
                                      label: option.label,
                                    })) || []
                                  }
                                  {...input}
                                  errMsgCols={`w-full`}
                                  selectClass="w-full border border-teal-300 rounded-md bg-teal-50 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                  handleChange={(e: any) =>
                                    handleInputChange(e, index)
                                  }
                                />
                              </div>
                            );
                          default:
                            return null; // If no matching tag, return null
                        }
                      })}
                    </section>
                  </>
                )}
              </form>
            </div>
            <div className="flex justify-center pt-4">
              <button
                onClick={fnSubmit}
                className="bg-[#38ada7] p-3 px-5 font-semibold m-2 border text-white rounded-lg hover:bg-[#3ca09b] mb-10"
                type="submit"
              >
                Submit For Verification
              </button>
            </div>
          </>
        )}
        {active === "specialization" && <DoctorSpecialization />}
        {/* Dashboard  */}
        {active === "dashboard" && <DashBoard />}
      </div>
    </div>
  );
};

export default ProfileSetting;
