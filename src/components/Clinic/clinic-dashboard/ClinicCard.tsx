import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ClinicCard = () => {
  return (
   <Link to="/dashboard">
      <div className="pt-12">
        <div className="card rounded-lg shadow-xl w-[40%] cursor-pointer">
          <div className="flex p-6">
            <img
              className="w-24 rounded-full"
              src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
              alt="user-img"
            />
            <div className="p-2 px-6">
              <h1 className="text-lg font-bold ">Rudra Clinic</h1>
              <p className="text-xs font-semibold ">
                Palasuni, BHUBANESWAR, KHURDA, Odisha, India-754001
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 p-4">
            <div className="flex justify-center p-2 pt-4 bg-[#ddf8fc] rounded-lg shadow-lg w-[48%] ">
              <img
                className="w-14 h-14"
                src="https://dev.yodr.live/assets/icons/doctor.png"
                alt="doctor"
              />
              <div className="px-4 p-3 font-bold">
                <p className="text-xs">No. Of Doctors</p>
                <h1 className="text-sm text-center">3</h1>
              </div>
            </div>
            <div className="flex justify-center p-2 pt-4 bg-[#f6f1e9] rounded-lg shadow-lg w-[48%] ">
              <img
                className="w-14 h-14"
                src="https://dev.yodr.live/assets/icons/patient.png"
                alt="patient"
              />
              <div className="px-4 p-3 font-bold">
                <p className="text-xs">No. Of Patients</p>
                <h1 className="text-sm text-center">130</h1>
              </div>
            </div>
            <div className="flex justify-center p-2 pt-4 bg-[#fdf4d6] rounded-lg shadow-lg w-[48%] ">
              <img
                className="w-14 h-14"
                src="https://dev.yodr.live/assets/icons/medical-appointment.png"
                alt="medical-appointment"
              />
              <div className="px-4 p-3 font-bold">
                <p className="text-xs">Today's Session</p>
                <h1 className="text-sm text-center">0</h1>
              </div>
            </div>
            <div className="flex justify-center p-2 pt-4 bg-[#eff0ff] rounded-lg shadow-lg w-[48%] ">
              <img
                className="w-14 h-14"
                src="https://dev.yodr.live/assets/icons/patientattend.png"
                alt="patientattend"
              />
              <div className="px-4 p-1 font-bold">
                <p className="text-xs text-center">Today's Appointment</p>
                <h1 className="text-sm text-center">0</h1>
              </div>
            </div>
          </div>
          <div className="text-center pt-4 pb-6 mb-5">
            <span className="text-[#38ada7] font-bold hover:border border-[#38ada7] p-2 rounded-xl">CLICK HERE TO ENTER</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ClinicCard;
