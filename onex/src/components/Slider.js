import React, { useState, useEffect } from "react";
import SlidingText from "./SlidingText"; // Import the SlidingText component

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const texts = [
    "Procurement",
    "Time Tracking",
    "Logistics",
    "Accounting",
    "Attendance",
    "Job Estimation",
    "Enterprise Resource Planning",
  ]; // Your text content

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % texts.length);
    }, 2000); // Adjust the delay between texts (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup function for the interval
  }, [texts]);

  return (
    <div className="slider-wrapper">
      <div className="slider">
        <SlidingText text={texts[currentSlide]} />{" "}
        {/* Render only the current text */}
      </div>
    </div>
  );
};

export default Slider;
