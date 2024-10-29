import { GrLocation } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import BookAppointmentDoctorCards from "./BookAppointmentDoctorCards";
import TopDoctors from "./TopDoctors";
import ClinicConsultation from "./ClinicConsultation";
import DoctorCarousal from "./DoctorCarousal";
import TopPlacesLinks from "./TopPlacesLinks";
import BookAppointmentEasySteps from "./BookAppointmentEasySteps";
import Testimonials from "../Home/Testimonials";

const BookAppointment = () => {
  return (
    <>
      <div className="pt-10">
        <div className="text-center">
          <h1 className="font-semibold text-5xl">Find Doctor's near You !</h1>
          <p className="text-gray-500 text-lg pt-4">
            Consult Doctors for all kind of health concerns.
          </p>
          <p className="text-[#38ada7] text-base">
            Book an Appointment for In-Clinic Consultation.
          </p>
        </div>

        <div className="flex gap-4 justify-center pt-8">
          <div className="flex border border-gray-500 p-2 rounded-md">
            <GrLocation size={20} className="text-gray-400" />
            <input
              className="outline-none bg-transparent px-2"
              type="text"
              placeholder="Search Location"
            />
          </div>
          <div className="flex w-96 border border-gray-500 p-2 rounded-md">
            <BsSearch size={20} className="text-gray-400" />
            <input
              className="outline-none bg-transparent px-2"
              type="text"
              placeholder="Search Doctors, Clinics, Specialties."
            />
          </div>
        </div>
        <TopPlacesLinks />
      </div>

      <BookAppointmentDoctorCards />
      <TopDoctors />
      <BookAppointmentEasySteps />
      <ClinicConsultation />
      <Testimonials />
    </>
  );
};

export default BookAppointment;
