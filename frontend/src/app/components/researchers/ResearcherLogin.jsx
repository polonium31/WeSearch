"use client";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import previewImage from "/public/assets/research.jpg";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { TextField, Button, Container, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

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

const ResearcherLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
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
            <Typography variant="body1" style={{ marginBottom: "30px" }}>
              Host events and find top participants!
            </Typography>

            <Container component="main" maxWidth="xs">
              <form style={{ textAlign: "center" }}>
                <TextField
                  label="Username"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  onClick={handleLogin}
                  style={{
                    backgroundColor: "blue",
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

export default ResearcherLogin;
