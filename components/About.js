import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Python Certificate",
    imgPath: "./Images/pyCetification.png",
  },
  {
    label: "CSS Certificate",
    imgPath: "./Images/cssCertification.png",
  },
  {
    label: "JavaScript Certicate",
    imgPath: "./Images/javascriptCertification.png",
  },
  {
    label: "Html Cetificate",
    imgPath: "./Images/htmlCertification.png",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div id="about">
      <h1 style={{ fontSize: "3rem", textAlign: "center" }}>About Me</h1>
      <ul style={{ fontSize: "1.3rem" }}>
        <li>Hi, My name is Roshni Awasthi. </li>
        <li>
          I am an
          <span style={{ color: "#f06292" }}>
            Associate Engineer - Product Development
          </span>
          at Harman Conected Services with the experience of
          <span style={{ color: "#f06292" }}>1+ year</span>.
        </li>
        <li>
          I completed my graduation from Babu Banrasi Das Northern Indian
          Institute Of Technology with the specification of Information
          Technology.
        </li>
        <li>
          I completed my Bachelors of Technology in the year 2022 with the
          <span style={{ color: "#f06292" }}>CGPA of 8.7</span>.
        </li>
        <li>
          Technologies that I am interested in are
          <span style={{ color: "#f06292" }}>
            HTML5, CSS3, JavaScript and React Js
          </span>
          . My desire is to become a Frontend Engineer and ace my knowledge in
          it.
        </li>
        <li>
          My hobbies are Singing, in my college as well as school time I have
          performed many times solo and in choir as well.
        </li>
        <li>
          Where solo gave me a lot of confidence and choir gave me the ability
          to work in team.
        </li>
        <li>
          Travelling is also my interest because it gives peace, and to explore.
        </li>
        <li>
          Sometimes Travelling gives you a different vision which gives you out
          of the box ideas.
        </li>
        <li>
          I have earned <span style={{ color: "#f06292" }}>certification</span>
          in HTML5, CSS3, JavaScript .
        </li>
      </ul>
      <Box sx={{ maxWidth: 400, flexGrow: 1, margin: "auto" }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 0,
            pl: 2,
          }}
        ></Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 255,
                    display: "block",
                    maxWidth: 400,
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </div>
  );
}

export default SwipeableTextMobileStepper;
