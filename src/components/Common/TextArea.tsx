import React from 'react';

interface TextareaProps {
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    label: string;
    isRequired?: boolean;
    value: string;
    name: string;
    hasError?: boolean;
    errorMsg?: string;
    lblCols?: string;  // E.g., 'w-full md:w-1/4' for width control
    inputCols?: string;  // E.g., 'w-full md:w-2/4'
    errMsgCols?: string;  // E.g., 'w-full md:w-1/4'
    selectClass?: string; // Custom classes for the select element
    placeholder?: string; // Optional placeholder
}

export const TextArea: React.FC<TextareaProps> = ({
                                                    handleChange,
                                                    label,
                                                    isRequired = false,
                                                    value,
                                                    name,
                                                    hasError = false,
                                                    errorMsg = '',
                                                    lblCols = 'w-full md:w-1/4',
                                                    inputCols = 'w-full md:w-2/4',
                                                    errMsgCols = 'w-full md:w-1/4',
                                                    selectClass = '', // Default to empty string
                                                    placeholder = '' // Default placeholder to empty
                                                    }) => {
    return (
        <div className="mb-4 w-full">
            <div className={`${lblCols} text-right pr-4 ml-2`}>
                <label className="font-bold flex gap-2 ">
                    {label}
                    {isRequired && <span className="text-red-600"> *</span>}
                </label>
            </div>

            <div className={`${inputCols}`}>
                <textarea
                onChange={handleChange}
                name={name}
                placeholder={placeholder}
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