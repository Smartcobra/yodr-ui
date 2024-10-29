import { MdOutlineAppRegistration } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTableColumns } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useState } from "react";
import drLogo from "../../assets/finalYodrlogo.png";
import emptyPic from "../../assets/emptyPic.png";
import ProfileSetting from "./ProfileSetting";

const SideNav = () => {
  const [active, setActive] = useState("profileSetting");

  const openProfileSettingForm = (content: any) => {
    setActive(content);
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/6 flex flex-col justify-between bg-slate-50 p-3 fixed h-full  rounded-r-lg shadow-md">
          <div className="upper-section-links">
            <div className="flex p-4 justify-between items-center ">
              <div className="">
                <img className="w-14" src={drLogo} alt="logo" />
              </div>
              <div className="cursor-pointer">
                <GiHamburgerMenu size={20} />
              </div>
            </div>

            <div className="mb-6">
              <ul className="px-3 pt-4 flex flex-col gap-4">
                <div
                  onClick={() => openProfileSettingForm("dashboard")}
                  className={`flex gap-2 text-[#757575] text-sm cursor-pointer p-2 font-semibold rounded-lg ${
                    active === "dashboard"
                      ? "text-white bg-[#38ada7]"
                      : "hover:text-white hover:bg-[#38ada7]"
                  } `}
                >
                  <FaTableColumns size={20} />
                  <li>Dashboard</li>
                </div>

                <div
                  onClick={() => openProfileSettingForm("profileSetting")}
                  className={`flex gap-2 text-[#757575] text-sm cursor-pointer p-2 font-semibold rounded-lg ${
                    active === "profileSetting"
                      ? "text-white bg-[#38ada7]"
                      : "hover:text-white hover:bg-[#38ada7]"
                  } `}
                >
                  <FaUserCog size={20} />
                  <li>Profile Settings</li>
                </div>

                <div
                  onClick={() => openProfileSettingForm("specialization")}
                  className={`flex gap-2 text-[#757575] text-sm font-semibold cursor-pointer p-2  rounded-lg ${
                    active === "specialization"
                      ? "text-white bg-[#38ada7]"
                      : "hover:text-white hover:bg-[#38ada7]"
                  } `}
                >
                  <MdOutlineAppRegistration size={20} />
                  <li>More Information</li>
                </div>

                <div className="flex gap-2 p-2 text-sm text-red-500 hover:text-red-600 font-semibold cursor-pointer">
                  <MdLogout size={20} />
                  <li>Logout</li>
                </div>
              </ul>
            </div>
          </div>

          <div className="border-2 border-gray-200 rounded-lg shadow-md">
            <div className="flex gap-4 p-2">
              <img
                className="bg-[#eae9e9] rounded-full w-16 h-16 p-1"
                src={emptyPic}
                alt="profile"
              />
              <div className="flex flex-col text-xs">
                <p className="font-semibold">BIMAL</p>
                <p className="text-[#757575]">CID0008055</p>
                <p>91-777777777</p>
                <p>abc@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 h-full ml-60 pt-2">
          <ProfileSetting active={active} />
        </div>
      </div>
    </>
  );
};

export default SideNav;
