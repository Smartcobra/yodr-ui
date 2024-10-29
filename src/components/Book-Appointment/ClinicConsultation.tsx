import React from "react";
import DoctorCarousal from "./DoctorCarousal";

const ClinicConsultation = () => {
  return (
    <div className="">
      <div className="pt-20 px-28">
        <h1 className="font-semibold text-3xl">
          Book an appointment for an in-clinic consultation
        </h1>
        <p className="text-gray-500">
          Find experienced doctors across all specialties
        </p>
      </div>

      <DoctorCarousal/>
    </div>
  );
};

export default ClinicConsultation;
