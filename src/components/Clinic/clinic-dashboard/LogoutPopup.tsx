import React, { ReactNode } from "react";
import { RxCross2 } from "react-icons/rx";

interface LogoutPopupProps {
  openPopup: boolean;
  onClose: () => void;
  children: ReactNode;
}

const LogoutPopup: React.FC<LogoutPopupProps> = ({
  openPopup,
  onClose,
  children,
}) => {
  return (
    <div
      //onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        openPopup ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-14 transition-all ${
          openPopup ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default LogoutPopup;
