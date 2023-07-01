import { Box, IconButton, Typography } from '@mui/material'
import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", }}>
      <Box>
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
      <Box>
        <Typography variant='subtitle1'>123 Kearney St, El Cerrito, CA 95776</Typography>
        <Box sx={{ display: "flex", alignItems:"center" }}>
            <IconButton>
              <LocalPhoneIcon />
            </IconButton>
            <Typography>(123)-567-8888</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems:"center" }}>
            <IconButton>
              <MailIcon />
            </IconButton>
            <Typography>knepaledu@gmail.com</Typography>
          </Box>
      </Box>
    </Box>
  )
}

export default Footer