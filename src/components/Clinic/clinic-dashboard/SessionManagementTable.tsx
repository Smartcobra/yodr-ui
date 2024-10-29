import React from "react";

const SessionManagementTable = () => {
  const tableHeadings = [
    { heads: "Actions" },
    { heads: "Cancel" },
    { heads: "ID" },
    { heads: "Status" },
    { heads: "Doctor Name" },
    { heads: "Session Name" },
    { heads: "Date" },
    { heads: "Start Time" },
    { heads: "End Time" },
    { heads: "Interval Time" },
    { heads: "Free/Total Tokens" },
  ];
  return (
    <div className="pt-8">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg overflow-x-hidden">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-wrap text-gray-700 uppercase bg-gray-200 border-2  ">
            <tr>
              {tableHeadings?.map((head) => {
                return (
                  <th scope="col" className="px-6 py-3">
                    {head.heads}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
             
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">nckjd</td>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 ">jdfkdsk</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 ">jdfkdsk</td>
              <td className="px-6 py-4 ">jdfkdsk</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SessionManagementTable;
