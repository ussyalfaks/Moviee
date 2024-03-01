// import React, { useState } from "react";
// import Sidebar from "./sidebar";
// import menu from '../asset/images/Menu.png';


// function Menu() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div>
//       <img
//         src={menu}
//         alt="menu beside sign pic"
//         onClick={toggleSidebar} 
//         style={{ cursor: "pointer" }} 
//       />
//       <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
//       <div
//         className={`overlay ${isSidebarOpen ? "active" : ""}`}
//         onClick={toggleSidebar}
//       />
//     </div>
//   );
// }

// export default Menu;
