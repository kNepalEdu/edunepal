import React from 'react'
import Drawer from './Drawer';
import Content from './Content';
import Box from '@mui/material/Box';


const Main = () => {
  return (
    <Box sx={{ display: "flex" }}>
        <Drawer/>
        <Content />
    </Box>
  )
}

export default Main;