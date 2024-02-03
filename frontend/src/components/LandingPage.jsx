import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Container,
} from "@mui/material";
import logo from "../assets/logo.png";

const LandingPage = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              mr: 2,
              flexGrow: 1,
              textAlign: "left",
              fontWeight: "bold",
              color: "black",
              fontSize: "1.5rem",
              marginTop: "0px",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "50px",
                marginRight: "10px",
                marginTop: "5px",
              }}
            />
            WeSearch
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "orange" }}
          >
            Page1
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "orange" }}
          >
            Page2
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default LandingPage;
