import React from 'react';
import Footer from './Footer';
// import ResponsiveDrawer from './Drawer';
import { Box } from '@mui/material';
import ResponsiveAppBar from './Navbar';
import { grey } from '@mui/material/colors';
import { indigo } from '@mui/material/colors';


const color = grey[200];

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Box sx={{ bgcolor: color, height: "100vh" }}>
        <ResponsiveAppBar/>
        <Box mx={{ xs: 4, sm: 6, md: 8 , xl: 26 }}>
          {children}
        </Box>
        <Box my={10} />
        <Box sx={{ backgroundColor: indigo[200], height: 200, }}>
          <Footer />
        </Box>
        
      </Box>
    </React.Fragment>
  )
}

export default Layout;