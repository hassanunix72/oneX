import { Box, Typography } from "@mui/material";
import React from "react";
import property1 from "../onex Assets/Property 1=Frame 337.svg";
import PandL from "../onex Assets/P&L Analysis 1.svg";
const Section3 = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          margin: "80px",
        }}>
        {" "}
        <Typography
          variant="h3"
          sx={{
            background:
              "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(195,32,81,1) 65%, rgba(2,0,36,1) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontWeight: "800",
            fontSize: { xs: "30px", sm: "35px", lg: "50px" },
            marginBottom: "20px",
          }}>
          How It Works
        </Typography>
        <img src={property1} width="100%" height="100%" />
      </Box>
      <Box sx={{ margin: "30px 0", textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            background:
              "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(195,32,81,1) 65%, rgba(2,0,36,1) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontWeight: "700",
            fontSize: { xs: "30px", sm: "35px", lg: "50px" },
          }}>
          <Typography variant="span" sx={{ color: "#1F1F1F" }}>
            What It
          </Typography>{" "}
          Unlocks
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "300", marginBottom: "25px" }}>
          Uncover the Financial Health of your business. Understand your profit
          & loss at the project level.
        </Typography>
        <img src={PandL} width="75%" height="70%" />
      </Box>
    </>
  );
};

export default Section3;
