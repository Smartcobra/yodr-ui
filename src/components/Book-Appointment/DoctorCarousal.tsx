import { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

const DoctorCarousal = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const carousalImg = [
    {
      img_src:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg",
      speciality: "Dentist",
      desc: "Teething troubles? Schedule a dental checkup",
    },
    {
      img_src:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg",
      speciality: "Gynecologist/Obstetrician",
      desc: "Explore for women’s health, pregnancy and infertility treatments",
    },
    {
      img_src:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg",
      speciality: "Dietitian/Nutrition",
      desc: "Get guidance on eating right, weight management and sports nutrition",
    },
    {
      img_src:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg",
      speciality: "Physiotherapist",
      desc: "Pulled a muscle? Get it treated by a trained physiotherapist",
    },
    {
      img_src:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg",
      speciality: "General surgeon",
      desc: "Need to get operated? Find the right surgeon",
    },
    {
      img_src:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg",
      speciality: "Dentist",
      desc: "Teething troubles? Schedule a dental checkup",
    },
    {
      img_src:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg",
      speciality: "Orthopedist",
      desc: "For Bone and Joints issues, spinal injuries and more",
    },
    {
      img_src:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg",
      speciality: "General physician",
      desc: "Find the right family doctor in your neighborhood",
    },
  ];

  const handleNext = () => {
    if (currIndex < carousalImg.length - 4) {
      setCurrIndex(currIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currIndex > 0) {
      setCurrIndex(currIndex - 1);
    }
  };

  return (
    <div className="px-16">
      <div className="carousel-container flex items-center justify-center p-10">
        <button
          onClick={handlePrev}
          disabled={currIndex === 0}
          className="p-2 relative left-2"
        >
          <IoIosArrowDropleft
            size={50}
            className={currIndex===0?"hidden":"rounded-full text-[#86c2bf]"}
          />
        </button>
        <div className="carousel-images flex gap-8 overflow-hidden w-full">
          {carousalImg.slice(currIndex, currIndex + 4).map((img, index) => {
            return (
              <div className="flex flex-col">
                <img
                  key={img.speciality}
                  src={img.img_src}
                  alt={`Slide+${index}`}
                  className="carousal-image w-72 rounded-xl cursor-pointer shadow-lg"
                />
                <div className="pt-4">
                  <p className="text-sm font-semibold text-center">{img.speciality}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={handleNext}
          disabled={currIndex >= carousalImg.length - 4}
          className={
            currIndex >= carousalImg.length - 4
              ? "text-gray-300 p-2 relative right-2"
              : " p-2 relative right-2"
          }
        >
          <IoIosArrowDropright
            size={50}
            className={
              currIndex >= carousalImg.length - 4
                ? "hidden"
                : "rounded-full text-[#86c2bf]"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default DoctorCarousal;
