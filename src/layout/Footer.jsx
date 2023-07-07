import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Box, IconButton, Typography, Stack } from '@mui/material'


const Footer = () => {
  return (
    <React.Fragment>
      <Box textAlign="center">
        <IconButton>
          <FacebookRoundedIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
      </Box>
      <Box textAlign="center">
        <Typography variant='subtitle1' >123 Kearney St, El Cerrito, CA 95776</Typography>
        
      </Box>
      <Box sx={{ textAlign: "center"}}>
        <Stack direction="row" justifyContent="center">
          <Box sx={{ display: "flex", alignItems:"center" }}>
            <IconButton>
              <LocalPhoneIcon />
            </IconButton>
            <Typography>(123)-567-8888</Typography>
          </Box>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Box sx={{ display: "flex", alignItems:"center" }}>
            <IconButton>
              <MailIcon />
            </IconButton>
            <Typography>knepaledu@gmail.com</Typography> 
          </Box>
        </Stack>
      </Box>
    </React.Fragment>
  )
}

export default Footer;