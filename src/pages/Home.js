import React from "react";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      direction="column"
    ></Grid>
  );
};

export default Home;
