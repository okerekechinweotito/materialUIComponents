import React from "react";
import { Grid, Container, Box } from "@mui/material";

const style = {
  homeSection1: {
    background: "red",
  },
  homeSection1Child1: {},
};
const Home = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      component="article"
    >
      <Grid
        item
        xs={4}
        sm={8}
        md={12}
        style={style.homeSection1}
        sx={{ height: { xs: "25em", md: "40em" } }}
      >
        <Grid item xs={4} sm={8} md={12} style={style.homeSection1Child1}>
          <Box>Box1</Box>
          <Box>Box2</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
