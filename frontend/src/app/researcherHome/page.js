"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import Nav from "../components/Nav";

function ParticipantHome(props) {
  const [surveyChecked, setSurveyChecked] = useState(false);
  const [onlineChecked, setOnlineChecked] = useState(false);
  const [inPersonChecked, setInpersonChecked] = useState(false);

  const [UGChecked, setUGChecked] = useState(false);
  const [GradChecked, setGradChecked] = useState(false);
  const [phdChecked, setphdChecked] = useState(false);
  const [ProfessorChecked, setProfessorChecked] = useState(false);

  const eventsArr = [
    {
      title: "Residual Stress Measurement",
      des: "Additive manufacturing builds objects by stacking them layer by layer, and the combination with welding provides great flexibility in the creation of complex metallic components. However, the extreme thermal coupling process of welding/additive manufacturing leads to complex residual stress distribution. ",
    },
    {
      title: "Advances in Dynamics and Control of Smart Grids",
      des: "The concept of smart grid has been the focus of a extensive research in recent decades. With the potential to revolutionize power systems, particularly considering climate change, digitalization and sustainable transition, smart grids can intelligently incorporate and manage renewable energy sources, storage systems, and other system components in a unified and coordinated environment. ",
    },
  ];

  const CheckboxFilter = ({ label, onChange, checked }) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={onChange}
            style={{ color: checked ? "#F4B942" : "grey" }}
          />
        }
        label={label}
      />
    );
  };

  const handleSurveyChange = (event) => {
    setSurveyChecked(event.target.checked);
  };

  const handleOnlineChange = (event) => {
    setOnlineChecked(event.target.checked);
  };

  const handleInpersonChange = (event) => {
    setInpersonChecked(event.target.checked);
  };

  const handleUGChange = (event) => {
    setUGChecked(event.target.checked);
  };

  const handleGradChange = (event) => {
    setGradChecked(event.target.checked);
  };

  const handlephdChange = (event) => {
    setphdChecked(event.target.checked);
  };
  const handleProfessorChange = (event) => {
    setProfessorChecked(event.target.checked);
  };

  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 200,
    height: "100vh",
    ...theme.typography.body2,
    textAlign: "center",
    fontSize: 20,
  }));

  return (
    <>
      <Nav></Nav>
      
      <div className="newEventDiv">
        <a className="syb btn newEvent">Create New Event +</a>
      </div>
      <Box sx={{ display: "flex", alignItems: "start", marginTop: "10px" }}>

        <Box sx={{ flex: 1, padding: 2 }}>
          <Typography
            sx={{ fontSize: 25, paddingBottom: "10px", fontWeight: "bold" }}
            color="text.primary"
          >
            Your Events
          </Typography>

          {eventsArr.map((obj, i) => {
            return (
              <Card
                sx={{ minWidth: "60px", paddingTop: "10px", marginTop: "10px" }}
              >
                <CardContent>
                  <Typography sx={{ fontSize: 20 }} color="text.primary">
                    {obj.title}
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {obj.des}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={console.log(obj.title)}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Box>
        
      </Box>
    </>
  );
}

export default ParticipantHome;
