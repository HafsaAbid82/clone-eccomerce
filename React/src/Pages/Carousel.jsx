import React, { useState, useEffect } from "react";
import "./Home.css";
import Button from '@mui/material/Button';
import Image1 from "../assets/Image1.jpg";
import Image5 from "../assets/Image5.jpg";
import Image6 from "../assets/Images.jpg";
import Image7 from "../assets/Images1.jpg";
import Image8 from "../assets/Imager.jpg";
import Image9 from "../assets/Imagea.jpg";

const data = [
  {
    title: "Water Heater",
    description: `
      Looking for a reliable water heater? Our selection offers top-quality water
      heaters designed to provide consistent, energy-efficient hot water for your home.
      Whether you're searching for tankless, electric, or gas models, we have the perfect
      solution to meet your needs. With advanced technology for quick heating and
      long-lasting durability, our water heaters ensure comfort and convenience all year
      round. Explore our range today and enjoy the perfect balance of performance and
      efficiency!
    `,
    images: [Image1, Image5],
    action: (
      <Button variant="contained" color="default" sx={{
        "&:hover": {
          backgroundColor: "#1976d2"
        },
      }}>
        Shop Now
      </Button>
    ),
  },
  {
    title: "Conventional Water Heater",
    description: `
      A conventional water heater is a dependable and affordable option for supplying hot water to your home. 
      It features an insulated storage tank that heats and stores water, ensuring it's ready when needed.
      Available in both gas and electric models, conventional water heaters are easy to install and maintain, 
      offering consistent performance for households of all sizes. 
      Perfect for those seeking reliable, energy-efficient hot water solutions!
    `,
    images: [Image6, Image7],
    action: (
      <Button variant="contained" color="default" sx={{
        "&:hover": {
          backgroundColor: "#1976d2"
        },
      }}>
        Shop Now
      </Button>
    ),
  },
  {
    title: "Cooking Range",
    description: `
      A cooking range is a versatile kitchen appliance that combines a cooktop and an oven, offering the ultimate convenience for all your cooking needs. 
      With options for gas, electric, or dual fuel, cooking ranges provide precise temperature control for baking, roasting, and stovetop cooking. 
      Available in various sizes and styles, they are perfect for everything from quick meals to gourmet dishes, making them an essential centerpiece in any kitchen.
    `,
    images: [Image8, Image9],
    action: (
      <Button variant="contained" color="default" sx={{
        "&:hover": {
          backgroundColor: "#1976d2"
        },
      }}>
        Shop Now
      </Button>
    ),
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data[0].images.length);
    }, 3000); // Slide changes every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="MainContent flex flex-col md:flex-row mt-16 px-4 md:px-16">
      {data.map((section, sectionIndex) => (
        <div key={sectionIndex} className="Section flex flex-col md:flex-row mb-16">
          {/* Left Section - Carousel */}
          <div className="LeftSection w-full md:w-1/2 relative overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {section.images.map((image, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                  style={{ minWidth: "100%" }}
                >
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Text */}
          <div className="RightSection w-full md:w-1/2 flex flex-col justify-center p-4">
            <div>
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.description}</p>
              {section.action && <div className="mt-4">{section.action}</div>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
