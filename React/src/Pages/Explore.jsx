import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Imagey from "../assets/Imagey.jpg";
import Imagex from "../assets/Imagex.jpg";
import Image3 from "../assets/Image3.png";
import Image6 from "../assets/Images.jpg";
import Imageh from "../assets/Hob.png";
import Image8 from "../assets/Imager.jpg";
import Image9 from "../assets/Imagea.jpg";

// Image data for categories
const imageData = {
  "Water Heater": [
    { src: Imagey, title: "Fast Electric Water Heater - FEWH-300" },
    { src: Imagex, title: "Fast Electric Water Heater - FEWH-10 LCM" },
    { src: Imagey, title: "Fast Electric Water Heater - FEWH-300" },
    { src: Image3, title: "Another Water Heater Model" },
  ],
  "Conventional Water Heater": [
    { src: Image6, title: "Another Water Heater Model" },
    { src: Image6, title: "Another Water Heater Model" },
    { src: Image6, title: "Another Water Heater Model" },
    { src: Image6, title: "Another Water Heater Model" },
  ],
  "Hobs": [
    { src: Imageh, title: "Another Water Heater Model" },
    { src: Imageh, title: "Another Water Heater Model" },
    { src: Imageh, title: "Another Water Heater Model" },
    { src: Imageh, title: "Another Water Heater Model" },
  ],
  "Cooking Range": [
    { src: Image8, title: "Another Water Heater Model" },
    { src: Image9, title: "Another Water Heater Model" },
    { src: Image8, title: "Another Water Heater Model" },
    { src: Image9, title: "Another Water Heater Model" },
  ],
};

// Custom styled button
const OutlineButton = styled(Button)(({ theme }) => ({
  border: '2px solid transparent',
  borderRadius: '20px',
  color: 'white',
  padding: '10px 20px',
  transition: 'border-color 0.3s, color 0.3s',
  '&:hover': {
    borderColor: 'cyan',
    color: 'cyan',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
}));

// Main Explore component
const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState("Water Heater");

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      {/* "EXPLORE" Title */}
      <Box textAlign="center" color="black" mb={4}>
        <Typography variant="h4" sx={{ display: 'inline-block' }}>
          EXPLORE
        </Typography>
        <Box
          sx={{
            width: '100px',
            height: '2px',
            backgroundColor: 'grey',
            mx: 'auto',
            mt: 1,
          }}
        />
      </Box>

      {/* Button Group */}
      <Box mb={3}>
        <OutlineButton onClick={() => handleButtonClick("Water Heater")}>Water Heater</OutlineButton>
        <OutlineButton onClick={() => handleButtonClick("Conventional Water Heater")} sx={{ marginLeft: '10px' }}>
          Conventional Water Heater
        </OutlineButton>
        <OutlineButton onClick={() => handleButtonClick("Hobs")} sx={{ marginLeft: '10px' }}>
          Hobs
        </OutlineButton>
        <OutlineButton onClick={() => handleButtonClick("Cooking Range")} sx={{ marginLeft: '10px' }}>
          Cooking Range
        </OutlineButton>
      </Box>

      {/* Image Display */}
      <Box display="flex" justifyContent="center" flexWrap="wrap" mt={2}>
        {imageData[selectedCategory]?.map((image, index) => (
          <Box
            key={index}
            sx={{
              margin: '15px',
              position: 'relative',
              textAlign: 'center',
              width: '150px',
            }}
          >
            <img
              src={image.src}
              alt={image.title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                border: '2px solid black',
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: 'black',
                marginTop: '8px',
                fontSize: '0.9rem',
              }}
            >
              {image.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Explore;




