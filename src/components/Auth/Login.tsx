import React, {useState} from "react";
import LoginImg from "../../assets/login4.png";
import {LOGO} from "../../utils/constants";
import inputfields from "../../utils/inputFields.json";
import {handleFieldLevelValidation, handleFormLevelValidation} from "../Common/services/validations";
import {OTPInput} from "../Common/OTP/OTP";
import {Input} from "../Common/Input";
import {useAppDispatch} from "../../store/store";
import {loginUserByUserName} from "../../store/features/authSlice";


const Login = () => {
    const [otp, setOtp] = useState<string>("");
    const [withEmail, setWithEmail] = useState(true);
    const [inputControls, setInputControls] = useState(inputfields.loginInputFields);

    const [mobileInputControls, setMobileInputControls] =
        useState(inputfields.loginWithMobileField);
    const dispatch = useAppDispatch();

    const inputMethod = () => {
        setWithEmail((prevState) => !prevState);
    };


    const handleChange = (eve: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        if (withEmail) {
            handleFieldLevelValidation(eve, inputControls, setInputControls);
        } else {
            handleFieldLevelValidation(eve, mobileInputControls, setMobileInputControls);
        }
    };

    const fnLogin = async () => {
        try {
            const [isInValid, data]: any = handleFormLevelValidation(
                withEmail ? inputControls : mobileInputControls,
                withEmail ? setInputControls : setMobileInputControls
            );
            if (isInValid) return;

          //  alert(JSON.stringify(data));
            dispatch(loginUserByUserName({username: data.username, password: data.password}))
        } catch (ex) {

        }
    };

    return (
        <div className=" bg-white flex items-center justify-center p-4">
            <div className="shadow-lg max-w-6xl max-md:max-w-lg rounded-md p-6">
                <div className="grid md:grid-cols-2 items-center gap-8">
                    <div className="max-md:order-1 lg:min-w-[450px]">
                        <img
                            src={LoginImg}
                            className="lg:w-11/12 w-full object-cover"
                            alt="login-image"
                        />
                    </div>

                    <div className="md:max-w-md w-full mx-auto">
                        <div className="flex flex-col justify-center items-center">
                            <img
                                src={LOGO} alt={"logo"}
                                className="w-24 animate__animated animate__heartBeat animate__delay-2s"
                            />
                            <p className="text-lg font-semibold">Welcome Back</p>
                            <p className="text-md ">To keep connected with us</p>
                            <p className="text-sm text-center pt-4">
                                Please Log in With your Email and password.
                            </p>
                        </div>

                        <div className="grid gap-2 sm:grid-cols-2 pt-4 mb-4">
                            <button
                                onClick={inputMethod}
                                type="button"
                                className="bg-dark-greenish p-3 font-semibold text-sm m-2 border text-white rounded-lg hover:bg-[#30948f]"
                            >
                                Login With Email ID
                            </button>

                            <button
                                onClick={inputMethod}
                                type="button"
                                className="bg-dark-greenish p-3 font-semibold text-sm m-2 border text-white rounded-lg hover:bg-[#30948f]"
                            >
                                Login With Mobile No.
                            </button>
                        </div>

                        {withEmail
                            ? inputControls.map((obj, index) => (
                                <Input
                                    key={index}
                                    {...obj}
                                    handleChange={handleChange}
                                    // options={loginOptions}
                                />
                            ))
                            : mobileInputControls.map((obj, index) => (
                                <Input
                                    key={index}
                                    {...obj}
                                    handleChange={handleChange}
                                    
                                    // options={loginOptions}
                                />
                            ))}

                        <div className="row">
                            {!withEmail && (
                                <>
                                    <div className="flex items-center gap-4">
                                        <p className="mb-0">Entered value: {otp}</p>
                                        <button
                                            className="absolute text-sm rounded-lg bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 ml-52 lg:ml-40 md:ml-32 sm:ml-16">
                                            Send OTP
                                        </button>
                                    </div>
                                    <div className="flex gap-4">
                                        <OTPInput
                                            separator={<span className="mx-1">-</span>}
                                            length={5}
                                            value={otp}
                                            onChange={setOtp}
                                        />
                                    </div>

                                </>
                            )}

                            <div className="pt-4">
                                <button
                                    onClick={fnLogin}
                                    type="button"
                                    className="w-full bg-dark-greenish p-2 font-semibold text-md border text-white rounded-lg hover:bg-[#30948f]"
                                >
                                    {withEmail ? "Login" : "Login"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
