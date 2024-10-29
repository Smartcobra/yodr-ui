import { Link } from "react-router-dom";
import clinicManagement from "../../assets/clinic_management.png";

const SmartClinic = () => {
  return (
    <>
    <div className="flex justify-around mt-20">
      <div className="w-2/5">
        <h1 className="text-5xl font-bold text-[#307abd]">
          Make Your Clinic <br />
          The Best & The "SMART <br />
          CLINIC" With <span className="text-red-500">YODR.</span>
        </h1>
        <p className="text-base pt-8 font-medium text-gray-600 ">
          YoDr is an integrated platform for Doctorpreneurs to streamline the
          operation and management of clinics for Doctors, managing the staff
          and patient care to reduce the operational cost and increase the
          profit margin.
        </p>
        <div className="mt-6">
        <Link to="/clinic-registration" className="text-[#38ada7] text-xl border-2 border-[#38ada7] px-8 p-4 m-2 font-semibold rounded-full">Clinic Registration</Link>
        <Link to="/doctor-registration"><button className="text-white text-xl bg-[#38ada7] px-8 p-4 m-2 font-semibold rounded-full">Doctor Registration</button></Link>
        </div>
      </div>
      <div className="">
        <img className=""
          src={clinicManagement}
          alt="IMG1"
        />
      </div>
    </div>
    </>
  );
};

export default SmartClinic;
