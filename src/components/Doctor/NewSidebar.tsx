import React, { useState } from "react";
import { FaBullseye, FaHome, FaList, FaUser, FaPowerOff } from "react-icons/fa";
import ProfileSetting from "./ProfileSetting";

const NewSidebar: React.FC = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("profileSetting");

  const openProfileSetting = (content: any) => {
    setActive(content);
  };

  return (
    <aside className="flex h-screen relative w-full ">
      {/* Sidebar */}
      <nav
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className={`fixed z-10 transform ${
          show ? "translate-x-0" : "-translate-x-full"
        } flex flex-col justify-between space-y-4 px-2 py-6 bg-teal-500 text-gray-100 transition-transform duration-200 md:relative md:translate-x-0`}
      >
        {/* Brand */}
        <div
          className={`flex justify-center items-center font-bold space-x-2 ${
            show ? "bg-blue-100 text-blue-500 px-1 py-0.5 rounded" : ""
          }`}
        >
          <FaBullseye className="text-blue-500" />
          {show && <span>Yoby Tech</span>}
        </div>

        {/* Menu */}
        <div
          className={`flex flex-1 flex-col space-y-2 font-bold ${
            !show ? "items-center" : ""
          }`}
        >
          <div
            onClick={() => openProfileSetting("dashboard")}
            className={`${active === "dashboard"} `}
          >
            <MenuItem
              icon={<FaHome size={25} />}
              label="Dashboard"
              show={show}
            />
          </div>
          <div
            onClick={() => openProfileSetting("profileSetting")}
            className={`${active === "profileSetting"} `}
          >
            <MenuItem icon={<FaUser size={25} />} label="Profile" show={show} />
          </div>
          <div
            onClick={() => openProfileSetting("specialization")}
            className={`${active === "specialization"} `}
          >
            <MenuItem
              icon={<FaList size={25} />}
              label="More"
              show={show}
            />
          </div>
        </div>

        {/* Profile Section */}
        <div
          className={`flex flex-col space-y-2 text-red-600 font-bold ${
            !show ? "items-center" : ""
          }`}
        >
          <MenuItem
            icon={<FaPowerOff size={25} />}
            label="Logout"
            show={show}
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="">
        <ProfileSetting active={active} />
      </main>
    </aside>
  );
};

type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
  show: boolean;
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, show }) => (
  <span className="space-x-2 px-2 py-1 rounded hover:bg-blue-500 hover:text-blue-100 cursor-pointer flex items-center">
    {icon}
    {show && <span>{label}</span>}
  </span>
);

export default NewSidebar;
