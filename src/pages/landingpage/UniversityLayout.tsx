import Sidebar from "src/components/main-website/admissions/landingpage/sidebar/Sidebar"
import LandingPages from "./LandingPages"
import CollegeLandingPage from "src/components/main-website/admissions/landingpage/CollegeLandingPage"

// const UniversityLayout = () => {
//   return (
//     <>
//       <div>
//         <CollegeLandingPage/>
//         <div className="flex flex-col  md:flex-row">
//           {/* Main Content */}
//          <div className="w-full md:w-4/5 h-3/4 md:h-full overflow-y-auto"
//           style={{
//             scrollbarWidth: "thin"
//           }}>
//           <LandingPages/>
//          </div>
//          {/* Sidebar */}
//          <div className="hidden md:block w-full md:w-2/5 h-1/4 md:h-full">
//           <Sidebar />
//          </div>
         
//        </div>
//       </div>
//     </>
//   )
// }

// export default UniversityLayout

const UniversityLayout = () => {
  return (
    <>
      <div>
        <CollegeLandingPage />
        <div className="flex flex-col md:flex-row">
          {/* Main Content */}
          <div
<<<<<<< HEAD
            className="w-full md:w-4/5 h-screen md:h-auto overflow-y-auto"
=======
            className="w-full md:w-4/5 h-auto sm:h-screen md:h-auto overflow-y-auto"
>>>>>>> 7d32aec (new onw)
            style={{
              scrollbarWidth: "thin",
            }}
          >
            <LandingPages />
          </div>
          {/* Sidebar */}
          <div
            className="hidden md:block w-full md:w-2/5 h-auto"
            style={{
              position: "sticky",
              top: "10vh", // Sidebar top se fix rahega jab tak scroll na ho.
              height: "90vh", // Full height tak fix.
              overflowY: "auto",
            }}
          >
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityLayout;
