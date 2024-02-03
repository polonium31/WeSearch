'use client'
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import previewImage from "/public/assets/people.png";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

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
              <b>Login or Signup with your University</b>
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "30px" }}>
              Participate in events and earn exciting rewards!
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: "orange",
                borderRadius: "30px",
                color: "white",
              }}
            >
              Login with Microsoft
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ParticipantLogin;