import emptyUser from "../../assets/emptyUser.png"

const Testimonials = () => {
  return (
    <>
      <div className="flex bg-[#F2F6F6] px-24 p-10">
        <div>
          <img
            className="w-60 rounded-full"
            src={emptyUser}
            alt="user"
          />
        </div>
        <div className="p-8">
          <p className="text-[#38ada7] font-semibold">Testimonials</p>
          <h1 className="text-4xl font-semibold mt-2">What Our Client Says</h1> 
          <p className="text-gray-500 mt-6">
            "Excellent Service, Good Quality updated and high speed software.
            Highly recommended. Thanks Bikram and Team."
          </p>
          <p className="font-base"> Dr. Alok Kumar Mantri
            <span className="text-gray-400 text-sm px-2">Bhubaneswar</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
