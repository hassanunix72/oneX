import { Box, Typography } from "@mui/material";
import React from "react";
import "./Section1Animation.css";

const SlidingText = ({ text }) => {
  return (
    <>
      <Box>
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
            width: "100%",
          }}>
          {text}
        </Typography>
      </Box>
    </>
  );
};

export default SlidingText;
