import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Section4 = () => {
  return (
    <Container
      sx={{
        background:
          "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(195,32,81,1) 65%, rgba(2,0,36,1) 100%)",
        padding: "20px",
        borderRadius: "10px",
      }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={5}>
          <Typography variant="h6" color="textPrimary" align="center">
            Discover how oneXerp can transform your business
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            id="outlined-basic"
            label="Your Email"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: {
                bgcolor: "white",
                borderRadius: "50px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "white",
              color: "black",
              "&:hover": {
                bgcolor: "lightgray",
              },
            }}>
            Request Demo
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section4;
