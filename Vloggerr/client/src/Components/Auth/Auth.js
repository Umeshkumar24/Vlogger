import React, { useState } from 'react'
import { Box } from "@mui/system";
import { Typography, FormLabel, TextField, Button } from "@mui/material";
import { sendAuthRequest } from '../../api-helpers/helpers';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(true);

  const onResReceived = (data) => {
    if (isSignup) {
      localStorage.setItem("userId", data.user._id);
    } else {
      localStorage.setItem("userId", data.id);
    }
    dispatch(authActions.login());
    navigate("/diaries");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isSignup) {
      sendAuthRequest(true, inputs)
      .then(onResReceived)
        .catch((err) => console.log(err));
    } else {
      sendAuthRequest(false, inputs)
      .then(onResReceived)
      .catch((err) => console.log(err));
    }
  };

  const [inputs, setInputs] = useState({
    name: "", email: "", password: ""
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Box
      width="40%"
      borderRadius={10}
      boxShadow={"5px 5px 10px #ccc"}
      margin="auto"
      marginTop={10}>

      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width="60%"
          padding={5}
          margin="auto"
        >
          <Typography variant="h3" textAlign={"center"} fontFamily={"quicksand"} sx={{ mb: 3, color: "purple", bold: true }}>{isSignup ? "Signup" : "Login"}</Typography>
          {isSignup && (
            <>
              <FormLabel>Name</FormLabel>
              <TextField
                onChange={handleChange}
                margin="normal"
                required value={inputs.name}
                name="name"
                type="text" />
            </>)}

          <FormLabel>Email</FormLabel>
          <TextField
            onChange={handleChange}
            margin="normal"
            required value={inputs.email}
            type="email"
            name="email" />

          <FormLabel>Password</FormLabel>
          <TextField
            onChange={handleChange}
            margin="normal"
            required value={inputs.password}
            sx={{ mb: 3 }}
            type="password"
            name="password" />
          <hr color='blue' ></hr>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, borderRadius: 10 }}>
            {isSignup ? "Signup" : "Login"}
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            variant="outlined"
            sx={{ mt: 3, borderRadius: 10 }}>
            Change to {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default Auth