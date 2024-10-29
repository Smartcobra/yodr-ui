import React from "react";

interface InputProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    isRequired?: boolean;
    value: string;
    name: string;
    type: string;
    placeholder?: string;
    hasError?: boolean;
    section?: string;
    errorMsg?: string;
    lblCols?: string; // E.g., 'w-full md:w-1/4' for width control
    inputCols?: string; // E.g., 'w-full md:w-2/4'
    errMsgCols?: string; // E.g., 'w-full md:w-1/4'
    selectClass?: string; // Custom classes for the select element
    readOnly?: boolean; // To make the input field read-only
}

const FormInput: React.FC<InputProps> = ({
                                             handleChange,
                                             label,
                                             isRequired = false,
                                             value,
                                             placeholder,
                                             name,
                                             type,
                                             section,
                                             hasError = false,
                                             errorMsg = "",
                                             lblCols = "",
                                             inputCols = "",
                                             errMsgCols = "w-full md:w-1/4",
                                             selectClass = "", // Default to empty string
                                             readOnly = false, // New prop for read-only functionality
                                         }) => {
  //  console.log("value---",value)
    return (

        <div className="mb-4 w-full">
            <div className={`${lblCols}`}>
                <label className=" text-gray-700 font-semibold ml-2">
                    {label}
                    {isRequired && <span className="text-red-600"> *</span>}
                </label>
            </div>

            <div className={`${inputCols} pt-2`}>
                <input
                    onChange={handleChange}
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    value={value}
                    readOnly={readOnly}
                    className={`${selectClass} border ${
                        hasError ? "border-red-500" : "border-gray-300"
                    } w-full rounded-md px-3 py-2`}
                />
            </div>

            <div className={`${errMsgCols}w-full text-left `}>
                <span className="text-red-500 text-sm font-semibold">{errorMsg}</span>
            </div>
        </div>
    );
};
export default FormInput;
