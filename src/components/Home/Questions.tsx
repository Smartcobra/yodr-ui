import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { QuestionsData } from "../../utils/Questions";
import faq from "../../assets/faq.jpg"

const Questions = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggle = (i: any) => {
    setIsOpen(i === isOpen ? null : i);
  };

  return (
    <>
      <div className="pt-20">
        <p className="text-center text-[#38ada7] font-semibold text-lg">
          Get Your Answer
        </p>
        <h1 className="text-[#307abd] text-5xl font-semibold text-center pt-2">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="px-24 pt-2 flex">
        <div className="w-1/2">
          <img
            src={faq}
            alt="faq"
          />
        </div>
        <div className="w-1/2 p-10">
          {QuestionsData.map((content, i) => {
            return (
              <div key={i} className="bg-[#F8F8F8] w-full mt-4">
                <div className="p-3 flex justify-between">
                  <h1 className="py-2">{content.heading}</h1>
                  <div>
                    <button onClick={() => toggle(i)} className="p-1">
                      {isOpen === i ? (
                        <div className="bg-[#38ada7] text-white p-2 rounded-md">
                          <FaMinus />
                        </div>
                      ) : (
                        <div className="text-[#38ada7] bg-white p-2 rounded-md">
                          <FaPlus />
                        </div>
                      )}
                    </button>
                  </div>
                </div>

                {isOpen === i && (
                  <>
                    <hr />
                    <div className="p-4">
                      <p className="text-gray-500">{content.para}</p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Questions;
