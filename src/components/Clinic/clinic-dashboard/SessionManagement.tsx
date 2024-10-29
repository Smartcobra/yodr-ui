import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import ClinicDashboardSidebar from "./ClinicDashboardSidebar";
import SessionManagementTable from "./SessionManagementTable";
import SessionManagementNewModalPopup from "./SessionManagementNewModalPopup";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import SessionManagementClosePopup from "./SessionManagementClosePopup";
import { BsExclamationCircle } from "react-icons/bs";

const SessionManagement = () => {
  const [openNewModal, setOpenNewModal] = useState(false);
  const [closeModalPopup, setCloseModalPopup] = useState(false);

  const showCloseModalPopup = (e:any) => {
    e.preventDefault();
    setCloseModalPopup(true);
  }

  const closeModal = (e:any) =>{
    e.preventDefault();
    setCloseModalPopup(false)
    setOpenNewModal(false);
  }

  return (
    <>
      <div className="flex">
        <ClinicDashboardSidebar />
        <div className="w-[80%]">
          <div className="flex justify-between p-8 pt-10">
            <div>
              <h1 className="font-bold text-lg">Schedule Informations</h1>
              <div className="flex">
                <Link to="/" className="text-gray-500 font-semibold text-xs">
                  Dashboard -
                </Link>
                <p className="font-semibold text-xs px-1">
                  {" "}
                  Schedule Informations
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold">11-Sep-2024 | 11:09PM </p>
            </div>
          </div>
          <div className="p-8">
            <div className="border rounded-xl shadow-sm p-8">
              <div className="flex justify-between ">
                <div className="flex">
                  <div className="flex w-96 border border-gray-500 p-2 rounded-md">
                    <BsSearch size={20} className="text-gray-400" />
                    <input
                      className="outline-none bg-transparent px-2"
                      type="text"
                      placeholder="Search Doctors, Clinics, etc."
                    />
                  </div>
                  <div className="flex w-40 mx-2 border border-gray-500 p-2 rounded-md">
                    <input
                      className="outline-none bg-transparent px-2"
                      type="date"
                    />
                  </div>
                </div>
                <div
                  onClick={() => setOpenNewModal(true)}
                  className="p-2 px-6 bg-dark-greenish border text-white rounded-lg cursor-pointer"
                >
                  <button>New</button>
                </div>
              </div>
              <div>
                <SessionManagementTable />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SessionManagementNewModalPopup openNewModal={openNewModal}>
        <div>
          <div className="flex justify-between p-0 m-0">
            <h1>Add A Slot Details</h1>
            <RxCross2
              className="hover:text-gray-400 cursor-pointer"
              onClick={() => setOpenNewModal(false)}
            />
          </div>
          <div>
            <form className="pt-8">
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 font-semibold text-sm">
                    Select Doctor*{" "}
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border w-52 p-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#38ada7] focus:border-[#38ada7] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#38ada7] dark:focus:border-[#38ada7]"
                  >
                    <option>Dr 1</option>
                    <option>Dr 2</option>
                    <option>Dr 3</option>
                    <option>Dr 4</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 text-sm font-medium dark:text-white">
                    Session Name*
                  </label>
                  <input
                    type="text"
                    id="text"
                    className="bg-gray-50 border w-52 border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-[#38ada7] focus:border-[#38ada7] dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#38ada7] dark:focus:border-[#38ada7]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className=" text-sm font-medium text-gray-500 dark:text-white">
                    Interval Time (In Minute)*
                  </label>
                  <input
                    type="text"
                    id="text"
                    className="bg-gray-50 border w-52 border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-[#38ada7] focus:border-[#38ada7] dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#38ada7] dark:focus:border-[#38ada7]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-500 dark:text-white">
                    Session Date*
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="bg-gray-50 border w-52 border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-[#38ada7] focus:border-[#38ada7] dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#38ada7] dark:focus:border-[#38ada7]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className=" text-sm font-medium text-gray-500 dark:text-white">
                    Start Time*
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="bg-gray-50 border w-52 border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-[#38ada7] focus:border-[#38ada7] dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#38ada7] dark:focus:border-[#38ada7]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className=" text-sm font-medium text-gray-500 dark:text-white">
                    End Time*
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="bg-gray-50 border w-52 border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-[#38ada7] focus:border-[#38ada7] dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#38ada7] dark:focus:border-[#38ada7]"
                  />
                </div>
              </div>
              <div className="flex gap-4 justify-center items-center pt-10">
                <div className="p-2 px-4 bg-[#ece9e9] hover:bg-[#dcdada] rounded-lg text-[#a39e9e]">
                  <button onClick={showCloseModalPopup}>Discard</button>
                </div>
                <div className="p-2 px-4 bg-dark-greenish rounded-lg text-white">
                  <button>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </SessionManagementNewModalPopup>

      <SessionManagementClosePopup closeModalPopup={closeModalPopup}>
        <div className="p-8">
          <div className="flex flex-col justify-center items-center">
            <BsExclamationCircle size={70} className="text-yellow-500"/>
            <h1 className="pt-6 font-medium">Are you sure you would like to close?</h1>
          </div>
          <div className="flex gap-4 justify-center items-center pt-10">
                <div className="p-2 px-4 bg-yellow-400 rounded-lg text-white">
                  <button onClick={closeModal}>Yes, Close It!</button>
                </div>
                <div className=" p-2 px-4 bg-[#ece9e9] hover:bg-[#dcdada] rounded-lg text-[#a39e9e]">
                  <button onClick={()=>setCloseModalPopup(false)}>No, Return</button>
                </div>
            </div>
        </div>
      </SessionManagementClosePopup>
    </>
  );
};

export default SessionManagement;
