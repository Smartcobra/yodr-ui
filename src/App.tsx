import { Route, Routes, useLocation, matchPath } from "react-router-dom";
import "./App.css";
import Main from "./components/Home/Main";
import ClinicRegistration from "./components/Clinic/clinic-registration/ClinicRegistration";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Login from "./components/Auth/Login";
import { lazy, Suspense } from "react";
import PersonalDashboard from "./components/Clinic/clinic-dashboard/PersonalDashboard";
import PatientRegistration from "./components/Patient/PatientRegistration";
import DoctorRegistration from "./components/Doctor/DoctorRegistration";
import BookAppointment from "./components/Book-Appointment/BookAppointment";
import SessionManagement from "./components/Clinic/clinic-dashboard/SessionManagement";
import VideoLandingPage from "./components/VideoLandingPage";
import ClinicDashboardBody from "./components/Clinic/clinic-dashboard/ClinicDashboardBody";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewSidebar from "./components/Doctor/NewSidebar";

const ClinicProfile = lazy(() => import("./components/Clinic/clinic-registration/ClinicProfile"));
const DoctorProfile = lazy(() => import("./components/Doctor/DoctorProfile"));

const App = () => {
  const location = useLocation();

  const enableLogin = [
    "/login",
    "/clinic-dashboard",
    "/dashboard",
    "/clinic-profile",
    "/doctor-profile-update",
    "/session-management",
    "/video",
    "/newsidebar",
  ];

  const hideHeaderFooter = enableLogin.some(
    (path) => matchPath({ path, end: true }, location.pathname) || 
              matchPath({ path: "/doctor-profile/:id", end: true }, location.pathname)
  );

  return (
    <>
      <ToastContainer />
      <div className="bg-[#f2f6f6]">
        {!hideHeaderFooter && <Header />}
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/video" element={<VideoLandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clinic-registration" element={<ClinicRegistration />} />
        <Route
          path="/clinic-profile"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <ClinicProfile />
            </Suspense>
          }
        />
        <Route
          path="/book-appointment"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <BookAppointment />
            </Suspense>
          }
        />
        <Route
          path="/doctor-profile/:id"
          element={
            <Suspense fallback={<h1 className="text-md font-bold ml-2">Loading...</h1>}>
              <DoctorProfile />
            </Suspense>
          }
        />
        <Route path="/clinic-dashboard" element={<ClinicDashboardBody />} />
        <Route path="/dashboard" element={<PersonalDashboard />} />
        <Route path="/clinic-profile" element={<ClinicProfile />} />
        <Route path="/doctor-registration" element={<DoctorRegistration />} />
        <Route path="/patient-registration" element={<PatientRegistration />} />
        <Route path="/session-management" element={<SessionManagement />} />
        <Route path="/newsidebar" element={<NewSidebar />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;
