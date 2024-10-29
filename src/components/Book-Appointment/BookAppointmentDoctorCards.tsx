const BookAppointmentDoctorCards = () => {
  const doctorArr = [
    {
      img_src:
        "https://i.pinimg.com/736x/0d/75/10/0d7510c1f7596c01e5a3acb75f435655.jpg",
      head: "Instant Video Consultation",
      para: "Connect with 60 secs",
    },
    {
      img_src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBAMpsnFK4qeIVTRYBTbewTQOtUgzrbgEDag&s",
      head: "Instant Video Consultation",
      para: "Connect with 60 secs",
    },
    {
      img_src:
        "https://img.pikbest.com/png-images/qiantu/nurse-doctor-cartoon_2715486.png!sw800",
      head: "Instant Video Consultation",
      para: "Connect with 60 secs",
    },
    {
      img_src:
        "https://png.pngtree.com/png-vector/20200423/ourmid/pngtree-cute-nurse-cartoon-illustration-png-image_2191801.jpg",
      head: "Instant Video Consultation",
      para: "Connect with 60 secs",
    },
    {
      img_src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3SsMKQCyX1CJ2LX0nek6qZ3WoWYiQDmDH9I6znbBQszMG9MlifQZihvTj5JkLiyKVAk&usqp=CAU",
      head: "Instant Video Consultation",
      para: "Connect with 60 secs",
    },
  ];

  return (
    <div className="p-20 flex justify-center gap-12">
      {doctorArr?.map((dr) => {
        return (
          <div
            key={dr.para}
            className="card border-gray-500 rounded-3xl shadow-lg w-56 cursor-pointer"
          >
            <div className="">
              <img className="rounded-t-3xl w-56 h-56" src={dr.img_src} alt={dr.para} />
              <div className="p-4">
                <h1 className="font-semibold text-center">{dr.head}</h1>
                <p className="text-gray-500 text-sm text-center pb-1">
                  {dr.para}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookAppointmentDoctorCards;
