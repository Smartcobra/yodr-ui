import React from 'react';

interface DatePickerProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    isRequired?: boolean;
    value: string;
    name: string;
    hasError?: boolean;
    errorMsg?: string;
    lblCols?: string;  // E.g., 'w-full md:w-1/4'
    inputCols?: string;  // E.g., 'w-full md:w-2/4'
    errMsgCols?: string;  // E.g., 'w-full md:w-1/4'
    selectClass?: string; // Custom classes for the select element
}

export const DatePicker: React.FC<DatePickerProps> = ({
                                                          handleChange,
                                                          label,
                                                          isRequired = false,
                                                          value,
                                                          name,
                                                          hasError = false,
                                                          errorMsg = '',
                                                          lblCols = '',
                                                          inputCols = '',
                                                          errMsgCols = 'w-full md:w-1/4',
                                                          selectClass = '' // Default to empty string
                                                      }) => {
    return (
        <div className="mb-4 w-full">
            <div className={`${lblCols}`}>
                <label className="text-gray-700 font-semibold ml-2">
                    {label}
                    {isRequired && <span className="text-red-600"> *</span>}
                </label>
            </div>

            <div className={`${inputCols} pt-2`}>
                <input
                    onChange={handleChange}
                    name={name}
                    type="date"
                    value={value}
                    className={`${selectClass} border ${hasError ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                />
            </div>

            {hasError && (
                <div className={`${errMsgCols} text-left`}>
                    <span className="text-red-500 text-sm font-semibold">{errorMsg}</span>
                </div>
            )}
        </div>
    );
};
