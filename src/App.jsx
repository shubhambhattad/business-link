import "./App.css";

// function App() {
//   return (
//     <>
//       {/* <!-- End of Parallax Pixel Background Animation --> */}

//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "10rem",
//           background: "#242424", // Optional: add a background color if needed
//           // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional: add a box shadow for a subtle effect
//           zIndex: 2,
//           flexDirection: "column", // Align children vertically
//           color: "white", // Set text color to white
//         }}
//       >
//         <img
//           src="https://mosambimedia.com/img/mosambi-logo-1692634661.jpg"
//           alt=""
//           style={{
//             height: "3rem",
//             width: "10rem",
//             borderRadius: "10px",
//           }}
//         />
//         <div id="userName" style={{ marginTop: "1rem" }}>
//           @mosambi
//         </div>
//       </div>

//       <div id="links">
//         <a class="link " href="https://github.com" target="_blank">
//           <i class="fab fa-github">&nbsp;</i>Github
//         </a>
//         <a class="link" href="https://www.linkedin.com" target="_blank">
//           <i class="fab fa-linkedin">&nbsp;</i>Linkedin
//         </a>
//         <a class="link" href="https://www.facebook.com/" target="_blank">
//           <i class="fab fa-facebook">&nbsp;</i>Facebook
//         </a>
//         <a class="link" href="https://www.instagram.com/" target="_blank">
//           <i class="fab fa-instagram">&nbsp;</i>Instagram
//         </a>
//         <a class="link" href="https://twitter.com/" target="_blank">
//           <i class="fab fa-twitter">&nbsp;</i>Twitter
//         </a>
//       </div>
//     </>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import sanityClient from "./sanityClient";
import HomePage from "./component/HomePage";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <HomePage />
    </>
  );
}

export default App;
