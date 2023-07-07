import React from 'react';
import { Box, TextField, Typography, Button} from '@mui/material';


const Contact = () => {
  return (
    <React.Fragment>
      <Box p={{ sm: 0, md: 8 }}>
          <Typography variant='subtitle1' sx={{ fontSize: 32, mb: 4 }}>We would love to hear from you!!</Typography>
          <Box sx={{display: "flex"}}>
            <Box sx={{mx: 2}} flexGrow={1}>
              <TextField 
                fullWidth 
                id="outlined-basic" 
                label="Name" 
                variant="outlined"
              />
            </Box>
            <Box sx={{mx: 2}} flexGrow={1}>
              <TextField 
                fullWidth 
                id="outlined-basic" 
                label="Email" 
                variant="outlined"
              />
            </Box>

          </Box>
          <Box m={2}>
            <TextField  
              id="outlined-multiline-basic" 
              label="Message" 
              variant="outlined"
              multiline
              rows={8}
              fullWidth
            />
          </Box>
          <Box>
            <Button type="submit" variant='contained' sx={{width: 200, height: 50,  mx: 2 }}>Submit</Button>
          </Box>
      </Box>
    </React.Fragment>
  )
}

export default Contact