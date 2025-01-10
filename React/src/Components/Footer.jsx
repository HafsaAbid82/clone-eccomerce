import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import Logo from '../assets/CANON_MENU.png';

const Footer = () => {
  return (
    <Box className=" relative bg-gray-800 text-white py-8 mt-200">
      <Box className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between">
        {/* Logo Section */}
        <Box className="mb-6 md:mb-0">
          <img
            src={Logo}
            alt="Canon Logo"
            className="w-24 mb-2"
          />
          <Typography variant="body2" className="text-gray-300">
            HOME APPLIANCES
          </Typography>
          <Typography variant="body2" className="text-gray-300 mt-2">
            Follow Us
          </Typography>
        </Box>

        {/* Categories */}
        <Box className="mb-6 md:mb-0">
          <Typography variant="h6" className="mb-4 text-white">
            Categories
          </Typography>
          <ul className="space-y-2">
            <li className="text-gray-300">Kitchen Appliances</li>
            <li className="text-gray-300">Home Appliances</li>
            <li className="text-gray-300">Cooking Range</li>
            <li className="text-gray-300">Gas Hobs</li>
            <li className="text-gray-300">Water Dispenser</li>
          </ul>
        </Box>

        {/* Information */}
        <Box className="mb-6 md:mb-0">
          <Typography variant="h6" className="mb-4 text-white">
            Information
          </Typography>
          <ul className="space-y-2">
            <li className="text-gray-300">Store Locations</li>
            <li className="text-gray-300">Return & Exchange Policy</li>
            <li className="text-gray-300">After Sale Services</li>
          </ul>
        </Box>

        {/* Useful Links */}
        <Box>
          <Typography variant="h6" className="mb-4 text-white">
            Useful Links
          </Typography>
          <ul className="space-y-2">
            <li className="text-gray-300">Track My Order</li>
            <li className="text-gray-300">My Account</li>
          </ul>
        </Box>
      </Box>

      <Divider className="bg-gray-600 my-6" />

      {/* Footer Bottom */}
      <Box className="text-center">
        <Typography variant="body2" className="text-gray-300">
          GOT QUESTIONS? WE ARE USING SAFE PAYMENTS
        </Typography>
        <Button
          variant="contained"
          className="bg-blue-500 hover:bg-blue-600 text-white mt-4"
        >
          Chat with us
        </Button>
        <Typography variant="body2" className="text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Canon Appliances | ALL RIGHTS RESERVED
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
