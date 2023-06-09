import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import React from 'react'
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <>
      <Box position={"relative"} width="100%" height="90vh">
        <img src="https://images.pexels.com/photos/1133505/pexels-photo-1133505.jpeg?cs=srgb&dl=asphalt-blue-clouds-1133505.jpg&fm=jpg" alt="Road" width={"100%"} height="70%" />
        <Typography
          fontFamily={"Playfair,cursive"}
          variant="h3"
          textAlign={'center'}
          width="100%"
          sx={{ position: "absolute", top: "0px", color: "#111115de", background: "#b3ffff" }}>
          Dare to live the life you have always wanted
        </Typography>

        <Box
          width="100%"
          height="30%"
          display={'flex'}
          flexDirection="column">

          <Typography
            fontFamily={"quicksand"}
            textAlign={'center'}
            variant="h4"
            padding={4}>
            SHARE YOUR MOOD WITH US
          </Typography>
          <Box margin="auto">
            <Button variant="outlined" sx={{ mr: 2 }}>Share Your Story</Button>
            <Button LinkComponent={Link} to="/diaries" variant="contained" sx={{ ml: 2 }}>View Diaries</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default home