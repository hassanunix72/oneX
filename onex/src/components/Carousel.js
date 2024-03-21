import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import property1 from "../onex Assets/Property 1=Frame 337.svg";
import HeroSection from "../onex Assets/HeroSection 1.svg";
import { Grid, IconButton, Typography } from "@mui/material";
import SouthArrow from "../onex Assets/Arrow 1.svg";
import NorthArrow from "../onex Assets/Arrow 2.svg";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: "property1",
    imgPath: [property1],
  },

  {
    label: "HeroSection",
    imgPath: [HeroSection],
  },
];
const Carousel = () => {
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
    <Box>
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item lg={11}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents>
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: "auto",
                      maxWidth: "100%",
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
        </Grid>
        {/* For Desktop */}
        <Grid item lg={1} sx={{ display: { xs: "none", lg: "block" } }}>
          <Box sx={{ mt: 2 }}>
            <Typography
              component={"button"}
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ bgcolor: "transparent", border: "none" }}>
              {" "}
              <img
                src={SouthArrow}
                style={{ transform: "rotate(180deg)" }}
                height={"auto"}
                width={"50%"}
              />
            </Typography>
            <br />
            <Typography
              component={"button"}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{ bgcolor: "transparent", border: "none" }}>
              <img src={SouthArrow} height={"auto"} width={"50%"} />
            </Typography>
          </Box>
        </Grid>

        {/* For Mobile  */}
        <Grid item lg={1} sx={{ display: { sm: "block", lg: "none" } }}>
          <Box sx={{ mt: 2 }}>
            <Button onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
            </Button>

            <Button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              <KeyboardArrowRight />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Carousel;
