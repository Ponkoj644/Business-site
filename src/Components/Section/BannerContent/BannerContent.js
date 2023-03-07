import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../../images/banner1.jpg";
import Banner2 from "../../../images/banner2.png";
import Button from "react-bootstrap/Button";
import "./BannerContent.css";

const BannerContent = () => {
  return (
    <div>
      <Carousel fade>
        {/* item 1 */}
        <Carousel.Item>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption>
            <h2>Grow Your Business </h2>
            <p>
              We always try to provide the best Business Solutions for Clients
              to grow up their Business very sharply and smoothly.
            </p>
            <Button variant="secondary">learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* item 2 */}
        <Carousel.Item>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />

          <Carousel.Caption>
            <h2>Invest with us </h2>
            <p>
              We always try to provide the best Business Solutions for Clients
              to grow up their Business very sharply and smoothly.
            </p>
            <Button variant="secondary">learn more</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BannerContent;
