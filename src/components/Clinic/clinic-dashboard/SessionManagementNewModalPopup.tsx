import React, { ReactNode } from "react";

interface newModalprops {
  openNewModal: boolean;
  children: ReactNode;
}

const SessionManagementNewModalPopup: React.FC<newModalprops> = ({
  openNewModal,
  children,
}) => {
  return (
    <div className={`fixed inset-0 flex justify-center items-center transition-colors ${openNewModal ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow p-6 w-[500px] transition-all
       ${ openNewModal ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
        {children}
      </div>
    </div>
  );
};

export default SessionManagementNewModalPopup;
