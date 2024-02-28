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

function App() {
  const [logo, setLogo] = useState("");
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const query = `*[_type == 'siteSettings'][0] {
      logo,
      links
    }`;

    sanityClient
      .fetch(query)
      .then((data) => {
        setLogo(data.logo || ""); // Set logo URL
        setLinks(data.links || []); // Set links array
        console.log("Fetched Data:", data); // Log the data
      })
      .catch((error) => {
        console.error("Error fetching data from Sanity:", error);
      });
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10rem",
          // background: "#242424",
          zIndex: 24,
          flexDirection: "column",
          background: "white",
        }}
      >
        <img
          src={logo}
          alt=""
          style={{
            height: "3rem",
            width: "10rem",
            borderRadius: "10px",
          }}
        />
        <div id="userName" style={{ marginTop: "1rem", zIndex: 24 }}>
          @mosambi
        </div>
      </div>
      <div className="social-icons-container">
        <div className="social-icons-container">
          <div className="page-social relative">
            <a
              className="social-icon-anchor"
              data-id="Twitter"
              data-type="social_link"
              target="_blank"
              rel="noopener nofollow"
              href="https://twitter.com"
            >
              <img
                className="social-icon-fill"
                src="https://elkadi.ca/wp-content/uploads/2022/01/Twitter.png"
                style={{ width: "30px", height: "30px" }}
                alt="Twitter Icon"
              />
            </a>
          </div>

          <div className="page-social relative">
            <a
              className="social-icon-anchor"
              data-id="Instagram"
              data-type="social_link"
              target="_blank"
              rel="noopener nofollow"
              href="https://www.instagram.com"
            >
              <img
                className="social-icon-fill"
                src="https://elkadi.ca/wp-content/uploads/2022/01/Instagram.png"
                style={{ width: "30px", height: "30px" }}
                alt="Instagram Icon"
              />
            </a>
          </div>

          <div className="page-social relative">
            <a
              className="social-icon-anchor"
              data-id="Facebook"
              data-type="social_link"
              target="_blank"
              rel="noopener nofollow"
              href="https://www.facebook.com"
            >
              <img
                className="social-icon-fill"
                src="https://elkadi.ca/wp-content/uploads/2022/01/Facebook.png"
                style={{ width: "30px", height: "30px" }}
                alt="Facebook Icon"
              />
            </a>
          </div>
          <div className="page-social relative">
            <a
              className="social-icon-anchor"
              data-id="Email"
              data-type="social_link"
              target="_blank"
              rel="noopener nofollow"
              href="mailto:"
            >
              <img
                className="social-icon-fill"
                src="https://elkadi.ca/wp-content/uploads/2022/01/Email.png"
                style={{ width: "30px", height: "30px" }}
                alt="Email Icon"
              />
            </a>
          </div>

          <div className="page-social relative">
            <a
              className="social-icon-anchor"
              data-id="Linkedin"
              data-type="social_link"
              target="_blank"
              rel="noopener nofollow"
              href="https://www.linkedin.com"
            >
              <img
                className="social-icon-fill"
                src="https://elkadi.ca/wp-content/uploads/2022/01/Linkedin.png"
                style={{ width: "30px", height: "30px" }}
                alt="Linkedin Icon"
              />
            </a>
          </div>

          {/* Repeat the above structure for each social media icon */}
          {/* ... */}

          <div className="page-social relative">
            <a
              className="social-icon-anchor"
              data-id="Whatsapp"
              data-type="social_link"
              target="_blank"
              rel="noopener nofollow"
              href="tel:"
            >
              <img
                className="social-icon-fill"
                src="https://elkadi.ca/wp-content/uploads/2022/01/Whatsapp.png"
                style={{ width: "30px", height: "30px" }}
                alt="Whatsapp Icon"
              />
            </a>
          </div>
        </div>
      </div>
      <div id="links">
        {links.map((link, index) => (
          <div>
            <a key={index} className="link" href={link.url} target="_blank">
              {link.title}
              {console.log(link.title)}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
