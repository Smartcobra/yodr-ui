const TopDoctors = () => {
  const arr = [
    {
      img_src:
        "https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png",
        head:"Period doubts or Pregnancy"
    },
    {
      img_src:
        "https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png",
        head:"Acne, pimples or skin issue"
    },
    {
      img_src:
        "https://www.practo.com/consult/static/images/top-speciality-sexology.svg",
         head:"Acne, pimples or skin issue"
    },
    {
      img_src:
        "https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png",
        head:"Cold, cough, fever"
    },
    {
      img_src:
        "https://www.practo.com/consult/static/images/top-speciality-pediatric.svg",
        head:"Child not feeling well"
    },
    {
      img_src:
        "https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png",
        head:"Depression or anxiety"
    },
  ];

  return (
    <div>
      <div className="pt-20 px-28">
        <h1 className="font-semibold text-3xl">
          Consult top doctors online for any health concern
        </h1>
        <p className="text-gray-500">
          Private online consultations with verified doctors in all specialists
        </p>
        <div className="flex justify-center items-center gap-20 pt-10">
          {arr?.map((img) => {
            return (
              <div className="cursor-pointer" key={img.head}>
                <div className="border-gray-400 rounded-full">
                  <img className="w-36" src={img.img_src} alt="img" />
                </div>
                  <p className="text-xs font-bold text-gray-500 text-center pt-2">{img.head}</p>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default TopDoctors;
