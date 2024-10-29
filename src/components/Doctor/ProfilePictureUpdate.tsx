import React, { ChangeEvent, useRef, useState } from 'react'
import emptyPic from "../../assets/emptyPic.png"
import { FaFileUpload } from "react-icons/fa";


function ProfilePictureUpdate() {
    // handle upload button
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonFileChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/gif", "image/png"];
      if (allowedTypes.includes(file.type)) {
        if (file.size <= 2 * 1024 * 1024) {
          setSelectedFile(file);
          setErrorMessage(null); // Clear any previous error messages
        } else {
          setErrorMessage("File size exceeds 2MB limit.");
        }
      } else {
        setErrorMessage(
          "Invalid file type. Please choose a JPG, GIF, or PNG file."
        );
      }
    }
  };

  const handleUploadButtonClick = () => {
    inputRef.current?.click();
  };
  return (
    <div>
      <div className="p-4 flex">
            <h1 className="text-3xl font-bold mb-3 ml-[450px]">
              Basic Information
            </h1>
          </div>
          <div className="flex items-start ml-5">
            <img
              className="w-[120px] h-[120px] rounded-lg object-cover overflow-hidden"
              src={selectedFile ? URL.createObjectURL(selectedFile) : emptyPic}
              alt="Profile"
            />
            <div className="mt-5 ml-3">
              <button
                className="bg-teal-500 px-2 rounded-xl flex items-center text-white font-semibold text-sm"
                onClick={handleUploadButtonClick}
                aria-label="Upload Profile Picture"
              >
                <FaFileUpload size={20} className="my-2" />
                Upload Photo
              </button>
              <input
                type="file"
                ref={inputRef}
                style={{ display: "none" }}
                onChange={handleButtonFileChange}
                aria-hidden="true"
              />
              {!selectedFile && (
                <p className="text-sm text-black font-normal mt-3">
                  Allowed JPG, GIF, or PNG. Max size of 2MB
                </p>
              )}
              {selectedFile && (
                <p className="text-sm text-green-500 mt-2">
                  Selected file: {selectedFile.name}
                </p>
              )}
              {errorMessage && (
                <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
              )}
            </div>
          </div>
    </div>
  )
}

export default ProfilePictureUpdate
