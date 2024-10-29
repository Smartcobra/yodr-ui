import React from "react";

const TopPlacesLinks = () => {
  const arr = [
    { place: "BALASORE" },
    { place: "CUTTACK" },
    { place: "BHUBANESWAR" },
    { place: "JAGATSINGHAPUR" },
    { place: "KHURDA" },
    { place: "BAUDH" },
    { place: "BARGARH" },
  ];

  return (
    <>
      <div className="flex justify-center gap-4 pt-16">
        {arr.map((places) => {
          return (
            <div className="w-40 p-2 rounded-xl text-center border border-gray-300 hover:bg-[#38ada7] hover:text-white cursor-pointer">
              <span className="text-sm">{places.place}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopPlacesLinks;
