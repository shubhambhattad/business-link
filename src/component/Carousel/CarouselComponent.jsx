import React, { useState, useEffect } from "react";
import sanityClient from "../../sanityClient";
import imageUrlBuilder from "@sanity/image-url";

import "./CarouselComponent.css";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const builder = imageUrlBuilder(sanityClient);

const CarouselComponent = () => {
  const [homeBanner, setHomeBanner] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == 'homeBanner'] {
      title,
      "bannerImage": bannerImage.asset->url
    }`;

    sanityClient.fetch(query).then((data) => {
      setHomeBanner(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="main-slider">
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={45}
          totalSlides={homeBanner.length}
          interval={5000}
          isPlaying={true}
          infinite={true}
        >
          <Slider>
            {homeBanner.map((item, index) => (
              <Slide index={index} key={index}>
                <img
                  src={item.bannerImage}
                  alt={item.title || "Banner Image"}
                  style={{ width: "100%", height: "130%" }}
                />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      )}
    </div>
  );
};

export default CarouselComponent;
