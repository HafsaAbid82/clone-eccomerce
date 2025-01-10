import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
function Note() {
  return (
    <Box >
      <AppBar position="absolute" sx={{ width: 1600 ,height: 40, backgroundColor: '#004792', top:0 , left:0, right:0 }} >

        <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
          <CallOutlinedIcon fontSize="small"sx={{mb:1}} />
          <Typography
            variant="body2"
            fontSize="small"
            sx={{  ml: -61,mb:1}}
            fontFamily= {'-apple-system'}
      
            component="div"
          >
            0331 1600900
          </Typography>
          <Typography
            variant="subtitle1"
            fontSize="small"
            sx={{ fontWeight: 'bold' ,mr:80,mb:1}}
            component="div"
            fontFamily= {'-apple-system'}
          >
            We Offer Free Delivery on Order with Advance Payment
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Note;