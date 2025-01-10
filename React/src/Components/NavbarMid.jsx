import React from 'react';
import List from '@mui/material/List';
import Menu from './Menu';
import Menuitems from './Menuitems';

function NavbarMid() {
  

  return (
    <List component="nav" sx={{ display: 'flex', justifyContent: 'center' }}>
      {Menuitems.map((item, index) => (
        <Menu key={index} title={item.title} options={item.options} />
      ))}
    </List>
  );
}

export default NavbarMid;
