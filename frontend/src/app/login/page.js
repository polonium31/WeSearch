"use client";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import previewImage from "/public/assets/people.png";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { FormControl, RadioGroup, FormControlLabel, Radio, FormLabel, TextField, Button, Container, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { login } from "../components/connect";
const theme = createTheme({
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

const ParticipantLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

  const handleLogin = () => {
    console.log("email:", email);
    console.log("Password:", password);
    console.log("Type:", type);
    login(email,password,type);
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container style={{ height: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <Paper
            style={{
              height: "100%",
              backgroundImage: `url(${previewImage.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundColor: "blue",
              overflowY: "hidden",
            }}
          ></Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Paper
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
              overflowY: "hidden",
            }}
          >
            <Typography variant="h5" gutterBottom>
              <b>Login with your University</b>
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "30px",padding: "1em"}}>
              See all the events, or create your own as a researcher!
            </Typography>

            <Container component="main" maxWidth="xs">
              <form style={{ textAlign: "center" }}>
                <TextField
                  label="email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControl className="radioButtonForm">
                  <FormLabel id="demo-row-radio-buttons-group-label">I am a...</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={(e) => {setType(e.target.value)}}
                  >
                    <FormControlLabel value="researcher" control={<Radio />} label="Researcher" />
                    <FormControlLabel value="student" control={<Radio />} label="Student" />

                  </RadioGroup>
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  alignItems=""
                  onClick={handleLogin}
                  style={{
                    backgroundColor: "orange",
                    borderRadius: "30px",
                    color: "white",
                    width: "200px",
                    marginTop: "10px",
                  }}
                >
                  Login
                </Button>

              </form>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ParticipantLogin;
