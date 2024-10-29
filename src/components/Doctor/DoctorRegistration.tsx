import FormInput from "../Common/FormInput";
import {ChangeEvent, useState} from "react";
import VerifyPopup from "./VerifyPopup";
import {VERIFY_MOBILE} from "../../utils/constants";
import {VERIFY_EMAIL} from "../../utils/constants";
import apiClient from "../../utils/axios";
import inputfields from "../../utils/inputFields.json";
import {handleFieldLevelValidation, handleFormLevelValidation} from "../Common/services/validations";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const DoctorRegistration = () => {
    const [OpenMobileVerify, setOpenMobileVerify] = useState(false);
    const [OpenEmailVerify, setOpenEmailVerify] = useState(false);

    const [inputControls, setInputControls] = useState(inputfields.Doctor_Registration);
    const emailValue = inputControls.find((control) => control.name === "email")?.value;
    const mobileValue = inputControls.find((control) => control.name === "mobileNo")?.value;

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        handleFieldLevelValidation(e,inputControls,setInputControls)
    };

    const handleVerifyEmail = async (e: any) => {
        e.preventDefault();
        const userId = emailValue;
        if (!userId )  return;
    try {
        const response = await apiClient.post('/otp/generate-otp', { userId });
        console.log(response);
        // Show success notification
        // toast.success("OTP sent to your Email !");
        setOpenEmailVerify(!OpenEmailVerify)
    } catch (error : any) {
        // Show error notification
        toast.error(error.message);
    }
    };

    const handleOTPVerify = async (otp: string) => {
        const userId = emailValue;
        try {
            const response = await apiClient.post('/otp/validate-otp', {userId, otp });
            console.log('OTP verification response:', response);
            // Handle success or error based on the response
        } catch (error) {
            console.error("Error verifying OTP:", error);
        }
    };

    const handleVerifyMobile = async(e: any) => {
        e.preventDefault();
        const mobileOtp = mobileValue
        if(!mobileOtp) return
        try{
            const response = await apiClient.post('/otp/generate-otp', { mobileOtp });
            console.log(response);
            setOpenMobileVerify(!OpenMobileVerify);
        }catch(error : any){
            toast.error(error.message)
        }
    };

    const navigate = useNavigate()
    const { id } = useParams();

    const fnLogin =async (e: any) => {
        try {
            const [isInValid, data]: any = handleFormLevelValidation(inputControls, setInputControls);
            console.log('Form Data:', data);
            console.log('Is Invalid:', isInValid);
            
            // If the form has validation errors, stop here
            if (isInValid) {
                toast.error('Form is invalid');
                return;
            }
             // Adding the roles field
        const formDataWithRole = {
            ...data,
            "roles": ["DOCTOR"] 
        };
        console.log("formdata",formDataWithRole);
        
            // Send POST request
        const response = await apiClient.post('http://localhost:3002/api/users', formDataWithRole);
        console.log("response", response);

        if(response.status === 302){
            toast.error(response.data.error);
            return;
        }

        console.log("id after success",response?.data?.user?.id);
        const {id} = response?.data?.user

            // Navigate to the next page on success
            navigate("/doctor-profile/"+id);
            // dispatch(loginUserByUserName({username: data.username, password: data.password}))
        } catch (error : any) {
            // toast.error(error.message)
        }
    };

    return (
        <div className="flex items-center justify-center my-8">
            <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6 mb-3">
                <h1 className="text-3xl font-bold text-center font-sans">Doctor Registration</h1>

                <div className="form mt-8 flex flex-col">
                    {inputControls.map((input, index) => (
                        <section key={input.id}>
                            <FormInput
                                {...input}
                                handleChange={(e) => handleInputChange(e, index)} // Pass index to handle changes
                                selectClass="border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                            {input.name === "email" && (
                                <div className="text-right">
                                    <button
                                        disabled={!emailValue}
                                        onClick={handleVerifyEmail}
                                        className={`bg-teal-500 rounded-lg w-24 text-sm font-semibold text-white 
                                    ${!emailValue ? "opacity-50 cursor-not-allowed" : ""}`}
                                    >
                                        Verify
                                    </button>
                                    {OpenEmailVerify && (
                                        <VerifyPopup setVerify={setOpenEmailVerify} data={VERIFY_EMAIL} onSubmitOTP={handleOTPVerify}/>
                                    )}
                                </div>
                            )}
                            {input.name === "mobileNo" && (
                                <div className="text-right">
                                    <button
                                        disabled={!mobileValue}
                                        onClick={handleVerifyMobile}
                                        className={`bg-teal-500 rounded-lg w-24 text-sm font-semibold text-white 
                                    ${!mobileValue ? "opacity-50 cursor-not-allowed" : ""}`}
                                    >
                                        Verify
                                    </button>
                                    {OpenMobileVerify && (
                                        <VerifyPopup setVerify={setOpenMobileVerify} data={VERIFY_MOBILE} onSubmitOTP={handleOTPVerify}/>
                                    )}
                                </div>
                            )}
                        </section>
                    ))}
                    <button type="submit" onClick={fnLogin}
                            className="pl-2 p-2 w-full bg-[#38ada7] text-white font-semibold rounded-md mt-5 hover:text-[#38ada7] hover:bg-white hover:border hover:border-[#38ada7]"
                    >
                        Submit
                    </button>

                    <p className="text-gray-500 mt-2 text-center">
                        Already have an account?
                        <span className="text-[#38ada7] text-sm hover:underline px-2 cursor-pointer">
                            Sign In
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default DoctorRegistration;
