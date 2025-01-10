import React, { useState, useRef, useEffect } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import './Navbar.css';

function Menu({ title, options }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  const renderSubmenu = (option) => {
    const [subOpen, setSubOpen] = useState(false);

    return (
      <div
        key={option.label}
        className="submenu-item"
        onMouseEnter={() => setSubOpen(true)}
        onMouseLeave={() => setSubOpen(false)}
      >
        <ListItemButton
          sx={{
            pl: 4,
            '&:hover': {
              color: '#004792',
            },
          }}
        >
          <ListItemText primary={option.label} />
          {option.options && (
            subOpen ? (
              <ExpandLess sx={{ color: '#004792' }} />
            ) : (
              <ExpandMore sx={{ '&:hover': { color: '#004792' } }} />
            )
          )}
        </ListItemButton>

        {option.options && (
          <Collapse in={subOpen} timeout="auto" unmountOnExit className="sub-dropdown">
            <List component="div" disablePadding>
              {option.options.map((subOption, subIndex) => (
                <ListItemButton
                  key={subIndex}
                  sx={{
                    pl: 8,
                    '&:hover': {
                      color: '#004792',
                    },
                  }}
                >
                  <ListItemText primary={subOption.label} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        )}
      </div>
    );
  };

  return (
    <div
      className="navbar-item"
      ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ListItemButton>
        <ListItemText
          primary={title}
          sx={{
            '&:hover': {
              color: '#004792',
            },
          }}
        />
        {open ? (
          <ExpandLess sx={{ color: open ? '#004792' : 'inherit' }} />
        ) : (
          <ExpandMore sx={{ '&:hover': { color: '#004792' } }} />
        )}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit className="dropdown">
        <List component="div" disablePadding>
          {options.map((option, index) =>
            option.options ? renderSubmenu(option) : (
              <ListItemButton
                key={index}
                sx={{
                  pl: 4,
                  '&:hover': {
                    color: '#004792',
                  },
                }}
              >
                <ListItemText primary={option.label} />
              </ListItemButton>
            )
          )}
        </List>
      </Collapse>
    </div>
  );
}

export default Menu;



  


