import ClinicCard from "./ClinicCard";
import ClinicDashboardSidebar from "./ClinicDashboardSidebar";

const ClinicDashboardBody = () => {
  return (
    <div className="flex">
      <ClinicDashboardSidebar />
      <div className="w-[80%]">
        <div className="p-8 pt-10">
          <div className="flex justify-between">
            <p className="font-bold text-lg">Dashboard</p>
            <p className="text-sm font-bold">20-Aug-2024 | 09:32PM</p>
          </div>

          <div className="pt-4">
            <p>
              Welcome <span className="font-bold">Rudra Clinic!</span>
            </p>
            <p className="text-sm text-gray-500">
              Your clinic dashboard awaits. Seamlessly manage, monitor, and
              maximize the potential of every clinic under your purview.
            </p>
          </div>

          <ClinicCard />
        </div>
      </div>
    </div>
  );
};

export default ClinicDashboardBody;
