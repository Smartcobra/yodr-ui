import EmpoweringClinicsCard from "./EmpoweringClinicsCard";

const EmpoweringClinics = () => {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-[#307abd] text-5xl font-semibold text-center pt-20">
          Empowering Clinics With Effortless Financial Solutions
        </h1>
        <p className="text-gray-400 text-center font-medium text-lg pt-4">
          YoDr, ease of doing Business, helps to reduce administrative costs by
          automating various financial <br /> processes, streamlines
          administrative tasks, enhance communication, and provide valuable
          insights for <br /> better decision-making.
        </p>
      </div>
      <div>
        <EmpoweringClinicsCard />
      </div>
    </>
  );
};

export default EmpoweringClinics;
