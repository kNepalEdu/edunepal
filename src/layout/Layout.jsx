import React from 'react';
import Footer from './Footer';
// import ResponsiveDrawer from './Drawer';
import { Box } from '@mui/material';
import ResponsiveAppBar from './Navbar';
import { grey } from '@mui/material/colors';

const color = grey[200];

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Box sx={{ bgcolor: color, height: "100vh" }}>
        <ResponsiveAppBar/>
        <Box mx={{ xs: 4, sm: 6, md: 8 , lg: 10, xl: 35 }}>
          {children}
        </Box>
        <Box sx={{ m: 6 }}>
          <Footer />
        </Box>
        
      </Box>
    </React.Fragment>
  )
}

export default Layout;