import React, { ReactNode } from 'react'

interface closeModalPopupProps{
    children: ReactNode,
    closeModalPopup: boolean
}

const SessionManagementClosePopup:React.FC<closeModalPopupProps> = ({children, closeModalPopup}) => {
  return (
    <>
       <div className={`fixed inset-0 flex justify-center items-center transition-colors ${closeModalPopup ? "visible bg-black/20" : "invisible"}`}>
       <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow p-6 w-[500px] transition-all
            ${closeModalPopup ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
            {children}
       </div>
       </div>
    </>
  )
}

export default SessionManagementClosePopup
