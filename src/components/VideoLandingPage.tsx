import React from "react";

const VideoLandingPage = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="p-6 px-12 text-white bg-gradient-to-r from-black absolute overflow-hidden shadow-2xl">
        <ul className="flex gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <select className="border-none bg-transparent">
              <option selected>Dropdown1</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </li>
          <li>
            <select className="border-none bg-transparent">
              <option selected>Dropdown2</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </li>
        </ul>
      </div>
      
      {/* Embeded Video */}
      <div className="overflow-hidden">
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/1VIZ89FEjYI?si=BYMX2BJunGlNQJD1/?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      </div>
    </div>
  );
};

export default VideoLandingPage;
