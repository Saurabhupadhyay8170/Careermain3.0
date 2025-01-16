
import { Link } from 'react-router-dom';

const universities = [
  {
    name: "Bennett University",
    location: "University in Greater Noida, Uttar Pradesh",
    imgSrc: "./logo/bennett.jpeg",
    route: "/UniversityLandingPage"
  },
  {
    name: "IILM University",
    location: "University in Greater Noida, Uttar Prades",
    imgSrc: "./logo/iilm.png",
    route: "/UniversityLandingPage"
  },
  {
    name: "UPES",
    location: "University in Dehradun, Uttarakhand",
    imgSrc: "./logo/images.png",
    route: "/UniversityLandingPage"
  },
  {
    name: "Quantum University",
    location: "University in Jaysingha, Uttarakhand",
    imgSrc: "./logo/Quantum_logo.png",
    route: "/UniversityLandingPage"
  }
];

const TopUni = () => {
  return (
    <div className="mt-4">
      <h1 className="text-gray-800 font-semibold text-3xl">Top Universities</h1>
      <hr className="mt-2" />
      {universities.map((university, index) => (
        <div>
          <div
          key={index}
          className="p-3 rounded-lg flex flex-row items-center justify-between relative overflow-hidden mb-2"
        >
            <div className="text-white mb-6 md:mb-0 md:text-left">
              <h1 className="text-sm sm:text-lg text-gray-800  font-bold mb-1">{university.name}</h1>
              <p className="text-sm text-gray-700 mb-2">{university.location}</p>
              <Link
                to={university.route}
                className="bg-white text-primaryBtn border-2 border-primaryBtn px-4 py-1 rounded shadow hover:bg-primaryBtn hover:text-white"
              >
                Visit Now
              </Link>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 relative">
              <img src={university.imgSrc} alt={university.name} className="h-[15vh]" />
            </div>
            </div><hr/>
         </div>
       ))}
      
    </div>
  );
};

export default TopUni;
