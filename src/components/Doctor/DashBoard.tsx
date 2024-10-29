import React from 'react'
import { FaHospital } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";


function DashBoard() {
  return (
    <div>
      <div className="">
          {/* <!-- Gauge Component --> */}
          <div className="flex justify-around m-14">
            <div className="flex">
              <div className="relative w-40 h-40">
                <svg
                  className="w-full h-full rotate-[135deg]"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <!-- Background Circle (Gauge) --> */}
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-gray-200"
                    stroke-width="1.5"
                    stroke-dasharray="100 100"
                    stroke-linecap="round"
                  ></circle>

                  {/* <!-- Gauge Progress --> */}
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-teal-500"
                    stroke-width="1.5"
                    stroke-dasharray="50 100"
                    stroke-linecap="round"
                  ></circle>
                </svg>

                {/* <!-- Value Text --> */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-4xl font-bold text-teal-500">
                    <FaHospital size={50} />
                  </span>
                </div>
              </div>
              <div>
                <h2 className="ml-10 mt-10 text-sm font-bold">
                  Profile Complete
                </h2>
                <p className="ml-10 mt-1 text-sm font-bold">50%</p>
                <p className="ml-10 mt-1 text-sm font-bold">
                  Registered on 05,Aug 2024
                </p>
              </div>
            </div>

            <div className="flex">
              {/* <!-- Gauge Component --> */}
              <div className="relative w-40 h-40">
                <svg
                  className="w-full h-full rotate-[135deg]"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <!-- Background Circle (Gauge) --> */}
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-gray-200"
                    stroke-width="1.5"
                    stroke-dasharray="100 100"
                    stroke-linecap="round"
                  ></circle>

                  {/* <!-- Gauge Progress --> */}
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-teal-500"
                    stroke-width="1.5"
                    stroke-dasharray="0 100"
                    stroke-linecap="round"
                  ></circle>
                </svg>

                {/* <!-- Value Text --> */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-3xl font-bold text-teal-500">
                    <BiAddToQueue size={50} />
                  </span>
                </div>
              </div>
              <div>
                <p className="ml-10 mt-10 text-sm font-bold">Subscription</p>
                <p className="ml-10 mt-1 text-lg font-bold">
                  Not Subscribed Yet
                </p>
              </div>
            </div>
          </div>
          {/* <!-- End Gauge Component --> */}
          <div className="p-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
              YODr. Journey
            </h2>
            {/* Status: Profile Verification Pending */}
            <div className="flex mb-6">
              <div className="flex-shrink-0">
                <div className="h-4 w-4 bg-teal-500 rounded-full mt-1.5"></div>
                <div className="w-1 bg-teal-500 h-full mx-auto"></div>
                <div className="w-1 bg-teal-500 h-full mx-auto"></div>
              </div>
              <div className="ml-4 w-full">
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold w-full">
                    Profile Verification Pending
                  </h3>
                  <p className="text-xs text-teal-400">
                    29 Aug, 2024 at 1:27PM
                  </p>
                </div>
                <p className="text-gray-600">
                  Your profile verification is currently pending. We appreciate
                  your patience. Rest assured, we will notify you once the
                  verification process is complete.
                </p>
              </div>
            </div>
            {/* Status: Profile Updated */}
            <div className="flex mb-6">
              <div className="flex-shrink-0">
                <div className="h-4 w-4 bg-teal-500 rounded-full mt-1.5"></div>
                <div className="w-1 bg-teal-500 h-full mx-auto"></div>
                <div className="w-1 bg-teal-500 h-full mx-auto"></div>
                <div className="w-1 bg-teal-500 h-full mx-auto"></div>
              </div>
              <div className="ml-4 w-full">
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold  w-full">Profile Updated</h3>
                  <p className="text-xs text-teal-400">
                    29 Aug, 2024 at 1:27PM
                  </p>
                </div>
                <p className="text-gray-600 ">
                  Thank you for updating your profile! Your information is now
                  current.
                </p>
              </div>
            </div>
            {/* Status: Profile Update Pending */}
            <div className="flex mb-6">
              <div className="flex-shrink-0">
                <div className="h-4 w-4 bg-teal-500 rounded-full mt-1.5"></div>
                <div className="w-1 bg-teal-500 h-full mx-auto"></div>
                <div className="w-1 bg-teal-500 h-full mx-auto"></div>
                <div className="w-1 bg-teal-500 h-full mx-auto"></div>
                <div className="w-1 bg-teal-500 h-full mx-auto"></div>
              </div>
              <div className="ml-4 w-full">
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold w-full">
                    Profile Update Pending
                  </h3>
                  <p className="text-xs text-teal-400">
                    29 Aug, 2024 at 1:27PM
                  </p>
                </div>
                <p className="text-gray-600">
                  Dear user, please be advised that your profile update is
                  pending. Kindly ensure all information is current for optimal
                  service!
                </p>
              </div>
            </div>
            {/* Status: Doctor Registered */}
            <div className="flex mb-6">
              <div className="flex">
                <div className="h-4 w-4 bg-teal-500 rounded-full mt-1.5"></div>
              </div>
              <div className="ml-4 w-full">
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold  w-full">
                    Doctor Registered
                  </h3>
                  <p className="text-xs text-teal-400">
                    29 Aug, 2024 at 1:27PM
                  </p>
                </div>
                <p className="text-gray-600">
                  Congratulations! Thank you for registering with YODr. Welcome
                  aboard!
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DashBoard
