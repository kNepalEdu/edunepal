import React from 'react';
import Footer from './Footer';
// import ResponsiveDrawer from './Drawer';
import { Box } from '@mui/material';
import ResponsiveAppBar from './Navbar';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
        <ResponsiveAppBar/>
        <Box>
          {children}
        </Box>
        <Footer />
    </React.Fragment>
  )
}

export default Layout;