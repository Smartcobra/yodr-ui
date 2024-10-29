import SmartClinic from "./SmartClinic";
import InfiniteScroll from "./InfiniteScroll";
import EasySteps from "./EasySteps";
import PatientCare from "./PatientCare";
import EmpoweringClinics from "./EmpoweringClinics";
import PricingPlan from "./PricingPlan";
import Questions from "./Questions";
import Testimonials from "./Testimonials";

const Main = () => {
  return (
    <>
      <div className="bg-[#f2f6f6]">
        <SmartClinic />
        <div className="mt-20 mb-8">
          <InfiniteScroll />
        </div>
        <div className="mt-20">
          <EasySteps />
        </div>
      </div>
      <div className="bg-white">
        <PatientCare />
        <EmpoweringClinics />
        <PricingPlan />
        <Questions />
        <Testimonials />
      </div>
    </>
  );
};

export default Main;
