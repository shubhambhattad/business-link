import React, { useState, useEffect } from "react";
import sanityClient from "../sanityClient";
import CarouselComponent from "./Carousel/CarouselComponent";

const Loader = () => (
  <div className="loader-container">
    <div className="loader"></div>
  </div>
);
function HomePage() {
  const [logo, setLogo] = useState("");
  const [userName, setUserName] = useState("");
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const query = `*[_type == 'siteSettings'][0] {
    logo {
      asset-> {
        url
      }
    },
  userName,
  links[] {
    title,
    url,
    "imageUrl": image.asset->url
  }
}`;

    sanityClient
      .fetch(query)
      .then((data) => {
        const logoUrl = data.logo && data.logo.asset && data.logo.asset.url;

        setLogo(logoUrl || "");
        setUserName(data.userName || "");
        setLinks(data.links || []);
        setLoading(false);

        console.log("Fetched Data:", data);
        // console.log(data.links[0].imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching data from Sanity:", error);
        setLoading(false);
      });
  }, []);
  // const embedCode = `
  //   <div style="position:relative;padding-top:max(60%,326px);height:0;width:100%">
  //     <iframe allow="clipboard-write" sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms" allowfullscreen="true" style="position:absolute;border:none;width:100%;height:100%;left:0;right:0;top:0;bottom:0;"
  //     src="https://e.issuu.com/embed.html?d=sri_hanuman_chalisa_hindi&u=thebusiness-masters.com"></iframe>
  //   </div>
  // `;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CarouselComponent />
          {/* <div dangerouslySetInnerHTML={{ __html: embedCode }} /> */}

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
              @{userName}
            </div>
          </div>
          {/* <div className="social-icons-container">
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
          </div> */}
          <div
            id="links"
            style={{
              marginTop: "3rem",
              zIndex: 24,
            }}
          >
            {links.map((link, index) => (
              <div key={index}>
                <a
                  className="link"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  href={link.url}
                  target="_blank"
                >
                  <div
                    style={{
                      marginRight: "5px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={link.imageUrl}
                      alt="icon"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div style={{ flex: 1, marginLeft: "5px" }}>{link.title}</div>
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;
