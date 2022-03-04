import React from "react";
import { Grid, Box } from "@mui/material";

const style = {
  backgroundImageBox: {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://wallpaperaccess.com/full/3732250.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
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
        style={style.backgroundImageBox}
        sx={{ height: { xs: "25em", md: "40em" } }}
      ></Grid>
    </Grid>
  );
};

export default Home;
