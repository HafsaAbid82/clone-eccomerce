import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Logo from '../assets/CANON_MENU.png';
import NavbarMid from './NavbarMid'
import Note from './Note';
import './Navbar.css';

function Navbar() {
  return (
    <>
    <div><Note/></div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" sx={{ width: 1600, height: 100, backgroundColor: '#1D1D1D', mt: 5 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo on the left */}
          <IconButton size="large" edge="start" sx={{ mr: 2 }} disableRipple>
            <img src={Logo} alt="Logo" />
          </IconButton>

          {/* Centered menu items */}
          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
            <NavbarMid />
          </Box>

          {/* Icons on the right */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" fontSize="large" sx={{ mx: 1, '&:hover': { color: '#004792' } }} disableRipple>
              <SearchSharpIcon />
            </IconButton>
            <IconButton color="inherit" fontSize="large" sx={{ mx: 1, '&:hover': { color: '#004792' } }} disableRipple>
              <PersonOutlineOutlinedIcon />
            </IconButton>
            <IconButton color="inherit" fontSize="large" sx={{ mx: 1, '&:hover': { color: '#004792' } }} disableRipple>
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <IconButton color="inherit" fontSize="large" sx={{ mx: 1, '&:hover': { color: '#004792' } }} disableRipple>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}

export default Navbar;
