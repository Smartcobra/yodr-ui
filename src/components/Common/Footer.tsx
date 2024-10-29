import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { LOGO } from "../../utils/constants";

const Footer = () => {
  return (
    <div className="bg-[#38ada7]">
      <div className="flex gap-8 justify-center p-12">
        <div
          className="w-96 rounded-xl"
          style={{ background: "rgb(212 216 218 / 16%)" }}
        >
          <div className="p-2 px-4 flex ">
            <div className="bg-white rounded-full p-4 text-[#38ada7]">
              <MdOutlineMail size={30} />
            </div>
            <div className="p-2 px-4">
              <p className="text-white font-bold">Email</p>
              <p className="text-white font-bold">hello@yodr.live</p>
            </div>
          </div>
        </div>
        <div
          className="w-96 rounded-xl"
          style={{ background: "rgb(212 216 218 / 16%)" }}
        >
          <div className="p-2 px-4 flex ">
            <div className="bg-white rounded-full p-4 text-[#38ada7]">
              <FiPhone size={30} />
            </div>
            <div className="p-2 px-4">
              <p className="text-white font-bold">Phone Number</p>
              <p className="text-white font-bold">9207598749</p>
            </div>
          </div>
        </div>
        <div
          className="w-96 rounded-xl"
          style={{ background: "rgb(212 216 218 / 16%)" }}
        >
          <div className="p-2 px-4 flex ">
            <div className="bg-white rounded-full p-4 text-[#38ada7]">
              <MdOutlineAccessTime size={30} />
            </div>
            <div className="p-2 px-4">
              <p className="text-white font-bold">Open Timing</p>
              <p className="text-white font-bold">We are available 24*7</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-40 flex gap-20">
        <div className="text-white">
          <p className="font-bold text-lg">For Patients</p>
          <p className="mt-2">Search for Doctors</p>
          <p>Login / Register</p>
          <p>Refund Policy For Patient</p>
        </div>
        <div className="text-white">
          <p className="font-bold text-lg">For Patients</p>
          <p className="mt-2">Search for Doctors</p>
          <p>Login / Register</p>
          <p>Refund Policy For Patient</p>
        </div>
        <div className="text-white">
          <p className="font-bold text-lg">For Patients</p>
          <p className="mt-2">Search for Doctors</p>
          <p>Login / Register</p>
          <p>Refund Policy For Patient</p>
        </div>
        <div>
          <p className="text-white font-bold text-lg">Subscribe Newsletter</p>
          <div className="bg-white w-full p-3 rounded-lg mt-2">
            <input
              className="outline-none"
              type="email"
              placeholder="Enter Email Address"
            />
            <button className="bg-[#38ada7] text-white p-2 px-6 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="px-40 text-white font-bold pt-8">
        <p>Acceptable Payments</p>
        <img
          className="pt-2"
          src="https://yodr.live/assetswebnew/img/payment.png"
          alt="payment"
        />
      </div>
      <div className="flex justify-between px-40 pt-8 text-white">
        <div className="flex gap-8">
          <p>About YoDr.</p>
          <p>Blogs</p>
          <p>FAQs</p>
          <p>Contact Us</p>
        </div>
        <div className="flex gap-4">
          <FaGoogle size={20} />
          <FaYoutube size={20} />
          <FaFacebook size={20} />
          <IoLogoLinkedin size={20} />
        </div>
      </div>
      <div className="flex justify-between p-8 px-40 text-white text-sm font-semibold">
        <div className="pt-6">
          <p>© 2024 YODr. Powered By YoByTech | All Rights Reserved.</p>
        </div>
        <div>
          <img className="w-20" src={LOGO} alt="logo" />
        </div>
        <div className="pt-6">
            <p>Privacy Policy | Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
