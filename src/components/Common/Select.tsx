import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  isRequired?: boolean;
  value: string;
  name: string;
  options: Option[];
  hasError?: boolean;
  errorMsg?: string;
  lblCols?: string; // E.g., 'w-full md:w-1/4'
  inputCols?: string; // E.g., 'w-full md:w-2/4'
  errMsgCols?: string; // E.g., 'w-full md:w-1/4'
  selectClass?: string; // Custom classes for the select element
}

export const Select: React.FC<SelectProps> = ({
  handleChange,
  label,
  isRequired = false,
  value,
  name,
  options,
  hasError = false,
  errorMsg = "",
  lblCols = "",
  inputCols = "",
  errMsgCols = "w-full md:w-1/4",
  selectClass = "", // Default to empty string
}) => {
  return (
    <div className="w-full">
      <div className={`${lblCols} `}>
        <label className="text-gray-700 font-semibold ml-2">
          {label}
          {isRequired && <span className="text-red-600"> *</span>}
        </label>
      </div>

      <div className={`${inputCols} pt-2`}>
        <select
          onChange={handleChange}
          name={name}
          value={value}
          className={`${selectClass} border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500${
            hasError ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Select...</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {hasError && (
        <div className={`${errMsgCols} text-left`}>
          <span className="text-red-500 text-sm font-semibold">{errorMsg}</span>
        </div>
      )}
    </div>
  );
};
