import React, { ReactNode } from "react";

interface ChangePassPopupProps {
  ChangePassPopup: boolean;
  onChangepPassClose: () => void;
  children: ReactNode;
}
const ChangePasswordPopup: React.FC<ChangePassPopupProps> = ({
  ChangePassPopup,
  onChangepPassClose,
  children,
}) => {
  return (
    <>
      <div
        className={`fixed inset-0 flex justify-center items-center transition-colors ${
          ChangePassPopup ? "visible bg-black/20" : "invisible"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white rounded-xl shadow p-14 transition-all ${
            ChangePassPopup ? "scale-100 opacity-100" : "scale-125 opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default ChangePasswordPopup;
