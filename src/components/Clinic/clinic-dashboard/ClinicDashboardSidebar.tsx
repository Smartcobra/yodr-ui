import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import "./ClinicDashboard.css";
import { GoQuestion } from "react-icons/go";
import { Link } from "react-router-dom";
import { LOGO } from "../../../utils/constants";
import LogoutPopup from "./LogoutPopup";
import ChangePasswordPopup from "./ChangePasswordPopup";

const ClinicDashboardSidebar = () => {
  const [btnIconChange, setBtnIconChange] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [ChangePassPopup, setChangePassPopup] = useState(false);

  const toggle = () => {
    setBtnIconChange(!btnIconChange);
  };

  return (
    <>
      <LogoutPopup openPopup={openPopup} onClose={() => setOpenPopup(false)}>
        <GoQuestion size={100} className="mx-auto text-blue-300" />
        <div className="pt-6">
          <p>Are you sure want to end session & logout ?</p>
        </div>
        <div className="flex justify-center gap-4 pt-6">
          <Link to="/login">
            <button className="bg-[#4fc9da] rounded-lg p-2 text-white px-4 hover:bg-[#4899a4]">
              Yes
            </button>
          </Link>
          <button onClick={()=> setOpenPopup(false)} className="bg-[#f06445] rounded-lg p-2 text-white px-4 hover:bg-[#ce5d43]">
            No
          </button>
        </div>
      </LogoutPopup>

      <ChangePasswordPopup ChangePassPopup={ChangePassPopup} onChangepPassClose={() => setChangePassPopup(false)}>
        <h1>fvhjffd</h1>
      </ChangePasswordPopup>
      <div className="">
        <div className="flex">
          <div className="flex flex-col justify-between bg-[#d8faf8] h-screen p-6">
            <div className="upper-section">
              <div className="flex justify-center p-6 gap-14">
                <img className="w-20" src={LOGO} alt="logo" />
                <div className="pt-5">
                  <button>
                    <GiHamburgerMenu size={30} />
                  </button>
                </div>
              </div>

              <div className="dropdown pt-4">
                <div className="flex justify-between p-2 rounded-xl">
                  <h3 className="text-sm">Yobytech</h3>
                  <div className="text-[#59bcb7]">
                    <button>
                      <MdKeyboardArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-10">
                <div className="flex justify-between bg-[#d8faf8] outline-none p-1">
                  <p className="text-sm">Dashboard</p>
                  <div className=" text-[#59bcb7]">
                    <button onClick={toggle}>
                      {!btnIconChange ? (
                        <MdKeyboardArrowRight size={20} />
                      ) : (
                        <MdKeyboardArrowDown size={20} />
                      )}
                    </button>
                  </div>
                </div>
                {btnIconChange ? (
                  <div className="options">
                    <div className="p-2 px-4 mb-2 bg-[#38ada7] text-sm text-white font-semibold rounded-xl">
                      Clinic Dashboard
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="logo-container relative">
              <div className="flex justify-around">
                <img
                  className="w-14 logo cursor-pointer"
                  src={LOGO}
                  alt="logo"
                />
                
              </div>
              <div className="hide border p-4 bg-white rounded-lg">
                <div className="flex mb-2">
                 
                  <div className="px-2">
                    <div className="flex">
                      <p className="font-semibold text-sm pt-1">Rudra Clinic</p>
                      <div className="px-2">
                        <span className="bg-[#eff0ff] text-[#4f55da] text-xs rounded-xl font-semibold p-1 px-2">
                          Clinic
                        </span>
                      </div>
                    </div>
                    <p className="text-xs">rudra@yobytech.in</p>
                  </div>
                </div>

                <hr />

                <div className="pt-4">
                  <button onClick={() => setChangePassPopup(true)} className="w-full text-sm font-semibold text-start text-gray-500 hover:bg-[#d2f6f4] rounded-lg p-2">
                    Change Password
                  </button>
                  <button
                    onClick={() => setOpenPopup(true)}
                    className="w-full text-sm font-semibold text-start text-gray-500 hover:bg-[#d2f6f4] rounded-lg p-2"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default ClinicDashboardSidebar;
