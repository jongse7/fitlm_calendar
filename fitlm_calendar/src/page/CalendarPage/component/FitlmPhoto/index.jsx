import React from "react";
import { LuRefreshCcw } from "react-icons/lu";

const FitlmPhoto = () => {
  return (
    <div
      className="flex flex-col items-center p-5 bg-white"
      style={{ width: "25vw", height: "75vh" }}
    >
      <img
        src="https://images.pexels.com/photos/12066797/pexels-photo-12066797.jpeg"
        alt="User Workout"
        className="object-cover"
        style={{ width: "20vw", height: "70vh", maxHeight: "70vh" }}
      />
      <div
        className="flex flex-row items-end justify-between w-full"
        style={{ height: "20vh" }}
      >
        <div className="flex items-center">
          <p className="text-sm text-dark-color font-semibold">7</p>
          <button className="pl-1 text-dark-color">
            <LuRefreshCcw style={{ fontSize: "0.8em" }} />
          </button>
        </div>
        <p className="text-sm text-dark-color font-semibold">2024.05.15</p>
      </div>
    </div>
  );
};

export default FitlmPhoto;
