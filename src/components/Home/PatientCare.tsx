import React from "react";
import PatientCareCard from "./PatientCareCard";

const PatientCare = () => {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-[#307abd] text-5xl font-semibold text-center pt-20">
          Focus On Patient Care, Not Challenges
        </h1>
        <p className="text-gray-400 text-center font-medium text-lg pt-4">
          YoDr significantly improves the efficiency & productivity of clinic
          <br />
          operation and management, so that Doctors or Clinic owners can <br />
          focus more on patient care.
        </p>
      </div>
      <div>
        <PatientCareCard />
      </div>
    </>
  );
};

export default PatientCare;
