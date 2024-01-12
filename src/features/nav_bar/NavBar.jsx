import { IconContext } from "react-icons";
import styles from "./NavBar.module.css";
import { LuTags } from "react-icons/lu";
import { FaProjectDiagram } from "react-icons/fa";
import { MdWorkspaces, MdGroups3 } from "react-icons/md";
import { RiMessage3Line } from "react-icons/ri";
import { BsCalendarEvent } from "react-icons/bs";
import { SiAzuredataexplorer } from "react-icons/si";
// import LoginModal from "./Auth";
// import Logo from "./Logo";
// import SearchBar from "./SearchBar";
// import { useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";

// function NavBar() {
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

//   const openLoginModal = () => {
//     setIsLoginModalOpen(true);
//   };

//   const closeLoginModal = () => {
//     setIsLoginModalOpen(false);
//   };

//   return (
//     <nav className="flex justify-between font-semibold p-3 border-b border-gray-200 gap-10 text-gray-400  ">
//       <div className="flex justify-start text-red-500 font-bold text-xl ">
//         {" "}
//         <Logo />{" "}
//       </div>

//       <div>
//         <SearchBar />
//       </div>

//       {/* <NavLink to= '/' style={({isActive}) => {return {color:isActive ? 'blue':'black'};}} >Home</NavLink> */}

//       <button
//         data-modal-target="popup-modal"
//         data-modal-toggle="popup-modal"
//         className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
//                 text-sm px-4 py-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
//         type="button"
//         onClick={openLoginModal}
//       >
//         Login
//       </button>

//       {/* Beginning of login modal  */}

//       {isLoginModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 ">
//           <div className="modal fixed bg-white p-8 rounded shadow-lg">
//             <button
//               onClick={closeLoginModal}
//               className=" hover:bg-gray-600 text-black  float-right mt-10 "
//             >
//               <AiOutlineClose />
//             </button>

//             {/* Login Form */}
//             <LoginModal />
//           </div>
//         </div>
//       )}

//       {/* End of login modal  */}
//     </nav>
//   );
// }
// export default NavBar;

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <IconContext.Provider value={{ className: `${styles.react_icons}` }}>
        {/* <LuTags /> */}
        <SiAzuredataexplorer />
        <MdGroups3 />
        <RiMessage3Line />
        <FaProjectDiagram />
        <MdWorkspaces />
        <BsCalendarEvent />
      </IconContext.Provider>
    </div>
  );
};

export default NavBar;
