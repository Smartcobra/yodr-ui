import React, {ChangeEvent, useState} from "react";
import inputField from "../../utils/inputFields.json";
import {Select} from "../Common/Select";
import {
    handleFieldLevelValidation,
    handleFormLevelValidation,
} from "../Common/services/validations";
import FormInput from "../Common/FormInput";
import {DatePicker} from "../Common/Date";
import {TextArea} from "../Common/TextArea";
import {toast} from "react-toastify";
import {FaCirclePlus, FaTrash} from "react-icons/fa6";
import config from './config.json'

const DoctorSpecialization = () => {
    const [inputControls, setInputControls] = useState(
        config
    );
    const [education, setEducation] = useState([
        inputControls.filter((input) => input.section === "education"),
    ]);
    const [experience, setExperience] = useState([
        inputControls.filter((input) => input.section === "experience"),
    ]);
    const [award, setAward] = useState([
        inputControls.filter((input) => input.section === "award"),
    ]);
    const [registration, setRegistration] = useState([
        inputControls.filter((input) => input.section === "registration"),
    ]);


    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        sectionIndex?: number,
        fieldIndex?: number,
        sectionType?: string
    ) => {
        const updatedControls = [...inputControls];

        if (sectionIndex !== undefined && fieldIndex !== undefined) {
            let updatedSection:any;
            if (sectionType === "education") {
                updatedSection = [...education];
                updatedSection[sectionIndex][fieldIndex].value = e.target.value;
                setEducation(updatedSection);
            } else if (sectionType === "experience") {
                updatedSection = [...experience];
                updatedSection[sectionIndex][fieldIndex].value = e.target.value;
                setExperience(updatedSection);
            } else if (sectionType === "award") {
                updatedSection = [...award];
                updatedSection[sectionIndex][fieldIndex].value = e.target.value;
                setAward(updatedSection);
            } else if (sectionType === "registration") {
                updatedSection = [...registration];
                updatedSection[sectionIndex][fieldIndex].value = e.target.value;
                setRegistration(updatedSection);
            }

            const controlIndex = updatedControls.findIndex(
                input => input.id === updatedSection[sectionIndex][fieldIndex].id
            );
            if (controlIndex > -1) {
                updatedControls[controlIndex].value = e.target.value; // Update control value if found
                setInputControls(updatedControls); // Update input controls
            }
        }

        handleFieldLevelValidation(e, inputControls, setInputControls);
    };



    const handleAddMore = (
        sectionState: any[],
        setSectionState: React.Dispatch<React.SetStateAction<any[]>>
    ) => {
        const newSection = sectionState[0].map((field: any) => ({
            ...field,
            value: "",
        }));

        const updateSection = [...sectionState, newSection];
        setSectionState(updateSection);

        const updatedInputControls = [...inputControls, ...newSection];
        setInputControls(updatedInputControls);
    };

    const handleRemoveSection = (
        sectionState: any[],
        setSectionState: React.Dispatch<React.SetStateAction<any[]>>
    ) => {
        if (sectionState.length > 1) {
            const updatedSection = sectionState.slice(0, -1); // Remove the last section
            setSectionState(updatedSection);

            // Update input controls to remove the fields from the last section
            const updatedInputControls = inputControls.filter((_, index) =>
                !sectionState[sectionState.length - 1].some((field: { id: string; }) => field.id === inputControls[index].id)
            );
            setInputControls(updatedInputControls);
        } else {
            toast.error("At least one section must remain.");
        }
    };

    const fnSubmit = async () => {
        const [isInValid, data]: any = handleFormLevelValidation(
            inputControls,
            setInputControls
        );
        if (isInValid) {
            toast.error("Form is invalid");
            return;
        }
    };


    return (
        <div className="form px-6 pt-10">
            {/* Specialization Form */}
            <h2 className="text-2xl font-bold mb-4 pl-3 text-center">
                Specialization
            </h2>
            <section className="flex gap-3">
                {inputControls?.map((input, index) => {
                    switch (input.tag) {
                        case "selectSpecialization":
                            return (
                                <div key={index} className="w-full">
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
                            break;
                    }
                })}
            </section>

            {/* Education Form */}
            <h2 className="text-2xl font-bold mb-4 pl-3 mt-4 text-center">
                Education
            </h2>
            {education.map((eduFields, idx) => (
                <section key={idx} className="flex gap-3 mb-4">
                    {eduFields.map((input, index) => {
                        switch (input.tag) {
                            case "degree":
                            case "degreeYear":
                                return (
                                    <div key={index} className="w-full">
                                        {input.tag === "degree" ? (
                                            <FormInput
                                                {...input}
                                                handleChange={(e) => (handleInputChange(e, idx, index, "education"))
                                                }
                                                selectClass={`border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                                            />
                                        ) : (
                                            <DatePicker
                                                {...input}
                                                handleChange={(e) => (handleInputChange(e, idx, index, "education"))
                                                }
                                                errMsgCols={`w-full`}
                                                selectClass={`w-72 border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                                            />
                                        )}
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                </section>
            ))}
            <div className="flex items-center justify-center pt-4">
                <button
                    type="button"
                    onClick={() => handleAddMore(education, setEducation)}
                    className="flex items-center text-teal-500 font-semibold"
                >
                    <FaCirclePlus className="mr-1"/>
                    Add More
                </button>
                <button
                    type="button"
                    onClick={() => handleRemoveSection(education, setEducation)}
                    className="flex items-center text-red-500 font-semibold ml-3"
                >
                    <FaTrash className="mr-1"/>
                    Remove Section
                </button>
            </div>

            {/* Experience Form */}
            <h2 className="text-2xl font-bold mb-4 pl-3 mt-4 text-center">
                Experience
            </h2>
            {experience.map((expFields, idx) => (
                <section key={idx} className="flex gap-3 mb-4">
                    {expFields.map((input, index) => {
                        switch (input.tag) {
                            case "hospital":
                            case "expYear":
                                return (
                                    <div key={index} className="w-full">
                                        {input.tag === "hospital" ? (
                                            <FormInput
                                                {...input}
                                                handleChange={(e) => (handleInputChange(e, idx, index, "experience"))
                                                }
                                                selectClass={`border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                                            />
                                        ) : (
                                            <DatePicker
                                                {...input}
                                                handleChange={(e) => (handleInputChange(e, idx, index, "experience"))
                                                }
                                                errMsgCols={`w-full`}
                                                selectClass={`w-72 border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                                            />
                                        )}
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                </section>
            ))}
            <div className="flex items-center justify-center pt-4 ">
                <button
                    type="button"
                    onClick={() => handleAddMore(experience, setExperience)}
                    className="flex items-center text-teal-500 font-semibold"
                >
                    <FaCirclePlus className="mr-1"/>
                    Add More
                </button>
                <button
                    type="button"
                    onClick={() => handleRemoveSection(experience, setExperience)}
                    className="flex items-center text-red-500 font-semibold ml-3"
                >
                    <FaTrash className="mr-1"/>
                    Remove Section
                </button>
            </div>

            {/*  awards section*/}
            <h2 className="text-2xl font-bold mb-4 pl-3 mt-4 text-center">Award</h2>
            {award.map((awardFields, idx) => (
                <section className="flex gap-3">
                    {awardFields.map((input, index) => {
                        switch (input.tag) {
                            case "awardName":
                                    return (
                                        <div key={index} className="w-72">
                                            <FormInput
                                                {...input}
                                                handleChange={(e: any) =>
                                                    handleInputChange(e, idx, index, "award")
                                                }
                                                selectClass={`border h-11 border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                                            />
                                        </div>
                                    );
                                case "awardYear":
                                    return (
                                        <div key={index} className="w-72">
                                            <DatePicker
                                                {...input}
                                                errMsgCols={`w-full`}
                                                selectClass={`w-full border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                                                handleChange={(e: any) =>
                                                    handleInputChange(e, idx, index, "award")
                                                }
                                            />
                                        </div>
                                    );
                                case "awardDescription":
                                    return (
                                        <div key={index} className="w-72">
                                            <TextArea
                                                {...input}
                                                errMsgCols={`w-full`}
                                                inputCols={`w-full`}
                                                handleChange={(e: any) =>
                                                    handleInputChange(e, idx, index, "award")
                                                }
                                                selectClass={`w-full h-11 mt-2 border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                                            />
                                        </div>
                                    );
                                default:
                                    return null;
                            }
                        }
                    )}

                </section>
            ))}
            <div>
                <button
                    type="button"
                    onClick={() => handleAddMore(award, setAward)}
                    className="flex items-center text-teal-500 font-semibold"
                >
                    <FaCirclePlus className="mr-1"/>
                    Add More
                </button>
            </div>

            {/*Registration*/}
            <h2 className="text-2xl font-bold mb-4 pl-3 mt-4 text-center">
                Registration
            </h2>

            {registration.map((regFields, idx) => (
                <section className="flex gap-3">
                    {regFields.map((input, index) => {
                        switch (input.tag) {
                            case "registrationName":
                                return (
                                    <div key={index} className="w-full">
                                        {" "}
                                        <FormInput
                                            {...input}
                                            handleChange={(e: any) =>
                                                handleInputChange(e, idx, index, "registration")
                                            }
                                            selectClass={`border h-11 border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                                        />
                                    </div>
                                );
                            case "registrationYear":
                                return (
                                    <div key={index} className="w-full">
                                        <DatePicker
                                            {...input}
                                            errMsgCols={`w-full`}
                                            selectClass={`w-full border border-teal-300 rounded-l-md bg-teal-50 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                                            handleChange={(e: any) =>
                                                handleInputChange(e, idx, index, "registration")
                                            }
                                        />
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                </section>
            ))}

            <div>
                <button
                    type="button"
                    onClick={() => handleAddMore(registration, setRegistration)}
                    className="flex items-center text-teal-500 font-semibold"
                >
                    <FaCirclePlus className="mr-1"/>
                    Add More
                </button>
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
        </div>
    );
};

export default DoctorSpecialization;
