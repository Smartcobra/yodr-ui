import {Dispatch, FC, SetStateAction, useState} from "react";
import {IoCloseSharp} from "react-icons/io5";
import {OTPInput} from "../Common/OTP/OTP";

interface VerifyPopupProps {
    setVerify: Dispatch<SetStateAction<boolean>>;
    data: {
        title: string;
        description: string;
        button: string;
    };
    onSubmitOTP: (otp:string)=>void; // callback to Doctor registration
}

const VerifyPopup: FC<VerifyPopupProps> = ({setVerify, data,onSubmitOTP}) => {
    // Close Popup
    const [otp, setOtp] = useState('');
    const closeModal = () => {
        setVerify(false);
    };
    const {title, description, button} = data;

  const submitOTP= async  ()=>{
      try{
          onSubmitOTP(otp);
          setVerify(false);
      }catch (error:any){
          console.error("OTP validation failed:", error);
      }

  }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="relative max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
                {/* Close button (cross icon) */}
                <button
                    onClick={closeModal}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                >
                    <IoCloseSharp size={25}/>
                </button>

                <header className="mb-8">
                    <h1 className="text-2xl font-bold mb-1">{title} Verification</h1>
                    <p className="text-[15px] text-slate-500">Enter The 4-digit Verification Code That Was Sent To
                        Your {description}</p>
                </header>
                <div className="flex items-center justify-center">
                    <OTPInput separator={<span>-</span>} value={otp} onChange={setOtp} length={4}/>
                </div>
                <div className="max-w-[260px] mx-auto mt-4">
                    <button onClick={submitOTP}
                        type="button"
                        className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-teal-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-teal-950/10 hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-teal-300 transition-colors duration-150"
                    >
                        Verify {button}
                    </button>
                </div>
                <div className="text-sm text-slate-500 mt-4">
                    Didn't receive code?{" "}
                    <a
                        className="font-medium text-teal-500 hover:text-teal-600"
                        href="#0"
                    >
                        Resend
                    </a>
                </div>
            </div>
        </div>
    );
};

export default VerifyPopup;
