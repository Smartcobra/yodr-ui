import "./infiniteScroll.css";
import digital_india from "../../assets/DigitalIndia.svg"
import startup_india from "../../assets/statupindia.png"
import aws from "../../assets/AWS.png"
import indiaGov from "../../assets/indiagov.png";
import msme from "../../assets/msme.svg"
import nha from "../../assets/NHA.svg"
import hfw from "../../assets/health and walfair.svg"

const InfiniteScroll = () => {

  return (
    <div className="body w-[92%] rounded-2xl bg-[#f2e580]">
      <h3 className="text-center p-1 font-bold text-gray-500">Trusted & Recognised By</h3>
      <div className="logos overflow-hidden">
        <div className="logos-slide flex justify-center gap-20 p-5">
          <img
            className="w-[100%] h-[60px]"
            src={digital_india}
            alt="Digital-India"
          />
          <img
            className="w-[100%] h-[60px]"
            src={startup_india}
            alt="Startup-india"
          />
          <img
            className="w-[100%] h-[60px]"
            src={aws}
            alt="aws"
          />
          <img
            className="w-[100%] h-[60px]"
            src={indiaGov}
            alt="india-govin"
          />
          <img
            className="w-[100%] h-[60px]"
            src={msme}
            alt="msme"
          />
           <img
            className="w-[100%] h-[60px]"
            src={nha}
            alt="NHA"
          />
           <img
            className="w-[100%] h-[60px]"
            src={hfw}
            alt="HFW"
          />
          
          {/* repeating images */}
          <img
            className="w-[100%] h-20"
            src={digital_india}
            alt="Digital-India"
          />
          <img
            className="w-[100%] h-20"
            src={startup_india}
            alt="Startup-india"
          />
          <img
            className="w-[100%] h-20"
            src={aws}
            alt="aws"
          />
          <img
            className="w-[100%] h-20"
            src={indiaGov}
            alt="india-govin"
          />
          <img
            className="w-[100%] h-20"
            src={msme}
            alt="msme"
          />
           <img
            className="w-[100%] h-20"
            src={nha}
            alt="NHA"
          />
           <img
            className="w-[100%] h-20"
            src={hfw}
            alt="HFW"
          />

        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
