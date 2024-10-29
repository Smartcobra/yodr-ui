import { Children, useState } from "react";

export default function PatientRegistration() {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    name: "",
    gender: "",
    yearOfBirth: "",
    bloodGroup: "",
    maritalStatus: "",
    agreeToTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl  w-full max-w-xl shadow-2xl my-20">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 text-center">
          Patient Registration
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Please enter your details.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* mobile */}
          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-gray-700 font-semibold mb-2 mt-3 ml-2"
            >
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div>
              <input
                //   id="mobileNumber"
                placeholder="Your Mobile No"
                name="mobileNumber"
                type="tel"
                required
                className="border border-teal-300 rounded-md bg-teal-50 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.mobileNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* name */}
          <div>
            <label 
              htmlFor="mobileNumber"
              className="block text-gray-700 font-semibold mb-2 mt-3 ml-2"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <div>
              <input
                placeholder="Enter Your Name"
                name="name"
                type="text"
                required
                className="border border-teal-300 rounded-md bg-teal-50 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* gender */}
          <div className="">
            <label className="block text-gray-700 font-semibold mb-2 ml-2">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              id="gender"
              name="gender"
              required
              value={formData.gender}
              onChange={handleInputChange}
              className="border border-teal-300 rounded-md bg-teal-50 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {/* year of birth */}
          <div className="">
            <label className="block text-gray-700 font-semibold mb-2 ml-2">
              Year of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="border border-teal-300 rounded-md bg-teal-50 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Select year of birth"
            />
          </div>
          {/* blood group */}
          <div>
            <label htmlFor="bloodGroup"  className="block text-gray-700 font-semibold mb-2 ml-2">
              Blood Group <span className="text-red-500">*</span>
            </label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              required
              className="border border-teal-300 rounded-md bg-teal-50 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.bloodGroup}
              onChange={handleInputChange}
            >
              <option value="">Select A Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          {/* marital Status */}
          <div>
            <label htmlFor="maritalStatus" className="block text-gray-700 font-semibold mb-2 ml-2">
              Marital Status <span className="text-red-500">*</span>
            </label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              required
              className="border border-teal-300 rounded-md bg-teal-50 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.maritalStatus}
              onChange={handleInputChange}
            >
              <option value="">Select A Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" name="" id="" />
            <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
              I have read and agree to YoDr.'s
              <a href="#" className="text-teal-500 hover:underline">Terms of Service</a> and{' '}
              <a href="#" className="text-teal-500 hover:underline">Privacy Policy</a>.
            </label>
          </div>

          <div className="">
            <button
              type="submit"
              className="bg-teal-500 text-white font-semibold py-2 rounded-md mt-4 w-full "
            >
              Register Now
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already a Member ?
          <a href="#" className="text-teal-500 underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
