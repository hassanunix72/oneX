import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import HeroSection from "../onex Assets/HeroSection 1.svg";

const Section1 = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6} lg={4} xl={4}>
        <Box textAlign="center" p={{ xs: 2, sm: 4 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "900",
              fontSize: { xs: "30px", sm: "50px", lg: "70px" },
            }}>
            Seamlessly <br />
            <span>Integrating AI into</span>
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "900",
              fontSize: { xs: "30px", sm: "50px", lg: "70px" },
              background:
                "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(195,32,81,1) 65%, rgba(2,0,36,1) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}>
            Accounting
          </Typography>
        </Box>
      </Grid>
      <img src={HeroSection} alt="Hero Section" width="100%" height="100%" />
    </Grid>
  );
};

export default Section1;
