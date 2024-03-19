import { Box, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Box
      sx={{
        textAlign: "center",

        bgcolor: "green",
        padding: "30px",
        borderRadius: "10px",
      }}>
      <Typography>Navbar</Typography>
    </Box>
  );
};

export default Navbar;
