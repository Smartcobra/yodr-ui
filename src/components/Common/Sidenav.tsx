import { LOGO, PROFILE_PICTURE } from "../../utils/constants";
import { MdOutlineAppRegistration } from "react-icons/md";
import { FaTableColumns } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { FaUserCog } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaReceipt } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProfileSettingsForm from "../Clinic/clinic-registration/ProfileSettingsForm";

const Sidenav = () => {
  const [active, setActive] = useState("profileSetting");
  const [open, setOpen] = useState(true);

  const openProfileSettingForm = (content: any) => {
    setActive(content);
  };

  return (
    <>
      <div className="flex">
        <div
          className={`flex flex-col justify-between bg-slate-50 fixed h-screen sidenav rounded-r-lg shadow-md duration-300 ${
            open ? "w-64 p-3" : "w-20"
          }`}
        >
          <div className="upper-section-links">
            <div className="inline-flex p-4 items-center ">
              <img
                className={`block float-left ${open ? "w-14" : "w-14"}`}
                src={LOGO}
                alt="logo"
              />
              {/* <p className={`font-semibold pt-2 ${!open && "scale-0"}`}>
                Krishna
              </p> */}

              <MdKeyboardArrowRight
                onClick={() => setOpen(!open)}
                className={`bg-dark-greenish text-white text-2xl rounded-full cursor-pointer absolute -right-3 ${
                  open && "rotate-180"
                }`}
              />
            </div>

            <div className="mb-6">
              <ul
                className={`px-3 pt-4 flex flex-col gap-4 ${
                  !open && "items-center"
                }`}
              >
                <li className="flex gap-2 text-[#757575] text-sm font-semibold hover:text-white hover:bg-dark-greenish p-2 rounded-lg cursor-pointer">
                  <span className="block float-left">
                    <FaTableColumns size={20} />
                  </span>

                  <span className={`flex-1 ${!open && "hidden"}`}>
                    Dashboard
                  </span>
                </li>

                <Link to="/">
                  <li className="flex gap-2 text-[#757575] text-sm font-semibold hover:text-white hover:bg-dark-greenish p-2 rounded-lg cursor-pointer">
                    <span className="block float-left">
                      <AiFillHome size={20} />
                    </span>
                    <span className={`flex-1 ${!open && "hidden"}`}>Home</span>
                  </li>
                </Link>

                <li
                  onClick={() => openProfileSettingForm("profileSetting")}
                  className={`flex gap-2 text-[#757575] text-sm cursor-pointer p-2 font-semibold rounded-lg ${
                    active === "profileSetting"
                      ? "text-white bg-dark-greenish"
                      : "hover:text-white hover:bg-dark-greenish"
                  } `}
                >
                  <span className="block float-left">
                    <FaUserCog size={20} />
                  </span>
                  <span className={`flex-1 ${!open && "hidden"}`}>
                    Profile Settings
                  </span>
                </li>

                <li
                  onClick={() => openProfileSettingForm("clinic")}
                  className={`flex gap-2 text-[#757575] text-sm font-semibold cursor-pointer p-2 rounded-lg ${
                    active === "clinic"
                      ? "text-white bg-dark-greenish"
                      : "hover:text-white hover:bg-dark-greenish"
                  } `}
                >
                  <span className="block float-left">
                    <MdOutlineAppRegistration size={20} />
                  </span>
                  <span className={`flex-1 ${!open && "hidden"}`}>
                    Clinic Registration
                  </span>
                </li>

                <li className="flex gap-2 text-[#757575] text-sm hover:text-white font-semibold hover:bg-dark-greenish p-2 rounded-lg cursor-pointer">
                  <span className="block float-left">
                    <FaReceipt size={20} />
                  </span>
                  <span className={`flex-1 ${!open && "hidden"}`}>Billing</span>
                </li>

                <li className="flex gap-2 text-[#757575] text-sm hover:text-white font-semibold hover:bg-dark-greenish p-2 rounded-lg cursor-pointer">
                  <span className="block float-left">
                    <FaQuestionCircle size={20} />
                  </span>
                  <span className={`flex-1 ${!open && "hidden"}`}>FAQs</span>
                </li>

                <li className="flex gap-2 text-[#757575] text-sm hover:text-white font-semibold hover:bg-dark-greenish p-2 rounded-lg cursor-pointer">
                  <span className="block float-left">
                    <RiContactsFill size={20} />
                  </span>
                  <span className={`flex-1 ${!open && "hidden"}`}>
                    Contact Us
                  </span>
                </li>

                <li className="flex gap-2 p-2 text-sm text-red-500 hover:text-red-600 font-semibold cursor-pointer">
                  <span className="block float-left">
                    <MdLogout size={20} />
                  </span>
                  <span className={`flex-1 ${!open && "hidden"}`}>Logout</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={` ${
              open
                ? "border-2 border-gray-200 rounded-lg shadow-md"
                : "border-0"
            }`}
          >
            <div className="flex gap-4 p-2">
              <img
                className="bg-[#eae9e9] rounded-full w-16 h-16 p-1"
                src={PROFILE_PICTURE}
                alt="profile"
              />
              {open && (
                <div className="flex flex-col text-xs">
                  <p className="text-[#757575] pt-2">CID0812061</p>
                  <p>91-9870448176</p>
                  <p>bcjds@gmail.com</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-5/6 ml-72 pt-2">
          <ProfileSettingsForm active={active} open={open}/>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
