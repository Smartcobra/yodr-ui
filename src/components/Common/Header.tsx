import { Link, useLocation } from "react-router-dom";
import yodrLogo from "../../assets/finalYodrlogo.png"

const Header = () => {
  const location = useLocation();
  const hideLoginButton = ["/clinic-profile"];

  return (
    <div className="flex justify-between px-36 p-3 ">
      <div>
        <img className="w-24" src={yodrLogo} alt="yodr-logo" />
      </div>
      <div className="mt-5">
        <ul className="flex gap-8 justify-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>About YoDr.</li>
          <li>Pricing</li>
          <li>Blogs</li>
          <li>FAQs</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="">
        <Link to="/book-appointment"><button className="bg-[#38ada7] p-2 px-5 font-semibold text-sm m-2 border text-white rounded-full">
          BOOK APPOINTMENT
        </button>
        </Link>
        {!hideLoginButton.includes(location.pathname) && (
          <Link to="/login">
            <button className="bg-[#38ada7] p-2 px-5 font-semibold text-sm m-2 border text-white rounded-full">
              LOGIN
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
