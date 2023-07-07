import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from "../assets/logo.jpg";
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const pages = ['About', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const BootstrapAppBar =  styled(AppBar)({
  backgroundColor: "#fff",
})

function ResponsiveAppBar() {
  return (
    <BootstrapAppBar position="static" elevation={0}>
      <Container maxWidth="xl" sx={{ height: 120 }}>
        <Toolbar sx={{my: 2, justifyContent: "space-between"}}>
          
          <Box sx={{display:"flex", alignItems: "center" }}>
            <Box sx={{display:"flex", alignItems:"center"}}>
              <img src={logo} alt="logo" width={100} height={100}/>
              <Typography
                variant="subtitle1"
                component="a"
                href="/"
                sx={{
                  mx: { sm: 1, md: 1 },
                  fontFamily: 'Sans-serif',
                  fontWeight: 600,
                  fontSize: 20,
                  letterSpacing: '.1rem',
                  color: '#424242',
                  textTransform: "uppercase",
                  textDecoration: 'none',
                }}
              >
                Creative Nepal Youth Organization
              </Typography>

            </Box>
            <Box>
              <Typography 
                  variant='subtitle1'
                  noWrap
                  component="a" 
                  href="/about"
                  sx={{
                    mx: { sm: 1, md: 5 },
                    fontFamily: 'Sans-serif',
                    fontWeight: 400,
                    fontSize: 16,
                    letterSpacing: '.1rem',
                    color: '#424242',
                    textTransform: "uppercase",
                    textDecoration: 'none',
                  }}
                >
                  About
                </Typography>
                <Typography 
                  variant='subtitle1'
                  noWrap
                  component="a" 
                  href="/contact"
                  sx={{
                    mx: { sm: 1, md: 5 },
                    fontFamily: 'Sans-serif',
                    fontWeight: 400,
                    fontSize: 16,
                    letterSpacing: '.1rem',
                    color: '#424242',
                    textTransform: "uppercase",
                    textDecoration: 'none',
                  }}
                >
                  Contact
                </Typography>
            </Box>
            

          </Box>
            
            
          <Box>
            <Button variant="outlined" sx={{width: 130, height: 40 }} href="/login">Sign In</Button>
          </Box>
          
        </Toolbar>
        
      </Container>
    </BootstrapAppBar>
  );
}
export default ResponsiveAppBar;
