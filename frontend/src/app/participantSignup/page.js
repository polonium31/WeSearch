"use client";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import previewImage from "/public/assets/people.png";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { TextField, Button, Container, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Participantsignup } from "../components/connect";
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

const ParticipantSignup = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = () => {
    console.log("email:", email);
    console.log("Password:", password);
    console.log("name:", name);
    Participantsignup(email,password,fullname,type);
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
              <b>Sign up with your University email</b>
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "30px" }}>
              Participate in events and earn exciting rewards!
            </Typography>

            <Container component="main" maxWidth="xs">
              <form style={{ textAlign: "center" }}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  label="email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
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
                <Button
                  variant="contained"
                  color="primary"
                  alignItems=""
                  onClick={handleSignup}
                  style={{
                    backgroundColor: "orange",
                    borderRadius: "30px",
                    color: "white",
                    width: "200px",
                    marginTop: "10px",
                  }}
                >
                  Sign Up
                </Button>
              </form>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ParticipantSignup;
