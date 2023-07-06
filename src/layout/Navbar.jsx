import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from "../assets/logo.jpg";
import { styled } from '@mui/material/styles';

const pages = ['About', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const BootstrapAppBar =  styled(AppBar)({
  backgroundColor: "#fff",
})

function ResponsiveAppBar() {
  return (
    <BootstrapAppBar position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt="logo" width={100} height={100}/>
          <Typography
            variant="subtitle1"
            component="a"
            href="/"
            sx={{
              mr: 2,
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
          <Box sx={{display: "flex" }}>
            <Typography 
              variant='subtitle1'
            >
              About
            </Typography>
            <Typography 
              variant='subtitle1'
              noWrap
              component="a" 
              href="/about"
              sx={{
                mr: 2,
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
                mr: 2,
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
        </Toolbar>
      </Container>
    </BootstrapAppBar>
  );
}
export default ResponsiveAppBar;
