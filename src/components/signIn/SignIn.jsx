import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Divider, Paper, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { grey } from '@mui/material/colors';
import { styled } from "@mui/material/styles";

const color = grey[50];
const BootstrapButton = styled(Button)({
  boxShadow: "none",
  backgroundColor: "#fff",
  fontSize: 18,
  color: "#424242",
  borderColor: "#000",
  width: 600, 
  height: 65,
  '&:hover' : {
    backgroundColor: "fff",

  },
  '&:active': {
    backgroundColor: "fff",

  },
  '&:focus': {
    backgroundColor: "fff",
  }
})
export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>    
      <Box sx={{ display: 'flex', justifyContent: "center", flexWrap: 'wrap', mt: 10 }}>
        <Paper sx={{ justifyContent: "center", width: 500 , height: 300, textAlign: 'center', p: 6, bgcolor: color }}>
        <Box>
          <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type= 'text'
                label="Email"
                sx={{ width: 400, }}
              />
            </FormControl>
        </Box>
          
        <Box>
          <FormControl sx={{ m: 1,}} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              sx={{ width: 400, }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Box m={4}/>
          <Box>
            <Button variant="contained" sx={{width: 200 }}>Sign In</Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent:"flex-end", m: 6 }}>
          {/* <IconButton>
            <GoogleIcon />
          </IconButton> */}
          <Typography variant='subtitle1'>Forgot Password?</Typography>
        </Box>
        </Paper>
      </Box>
      <Box m={7} />
      <Box sx={{justifyContent:"flex-end"}}>
        <Divider variant='middle' sx={{ mx: 20 }}/>
      </Box>
      <Box sx={{ textAlign: "center", m: 4 }}>
        <BootstrapButton variant='outlined' startIcon={<GoogleIcon sx={{color: "rgba(15,157,88, 0.7)"}}/>}>Sign In with Google</BootstrapButton>
      </Box>
    </React.Fragment>
  );
}