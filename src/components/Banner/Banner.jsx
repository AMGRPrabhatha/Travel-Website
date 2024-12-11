import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/10.png";
import sliderImg1 from "../../assets/images/slider/15.png";
import "../Banner/banner.css"

const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={sliderImg} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  VISIT <span>SRI LANKA</span>
                </h5>
                <p className="sub_text">
                Endless beaches, timeless ruins, welcoming people, oodles of elephants, rolling surf, cheap prices, fun trains, famous tea and flavorful food make Sri Lanka irresistible.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  AN ISLAND ESCAPE <span>AWITS</span>
                </h5>
                <p className="sub_text">
                Plan your dream getaway with our curated travel guides, top destinations, and exclusive experiences tailored just for you. Start your adventure here!
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
