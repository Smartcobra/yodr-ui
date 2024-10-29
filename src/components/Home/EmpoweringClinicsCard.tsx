import { EmpoweringClinicsData } from "../../utils/patientCardData";

const EmpoweringClinicsCard = () => {
  return (
    <>
      <div className="grid grid-cols-2 grid-flow-row gap-6 mb-10 px-24">
        {EmpoweringClinicsData.map((content) => {
          return (
            <div key={content.head} className="flex rounded-lg border-2 p-4">
              <div className="rounded-lg border-[#EDEDED]">
                <img
                  className="w-64 rounded-lg"
                  src={content.src}
                  alt="Billing_Management"
                />
              </div>
              <div className="p-8">
                <h4 className="text-[#307abd] font-bold text-lg">
                  {content.head}
                </h4>
                <p className="text-gray-400 font-semibold text-[15px] mt-3">
                  {content.para}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EmpoweringClinicsCard;
