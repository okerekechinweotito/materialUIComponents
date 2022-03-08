import React from "react";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      component="article"
      sx={{ justifyContent: "center" }}
    >
      <Grid
        container
        item
        xs={4}
        sm={8}
        md={10}
        sx={{
          height: { xs: "25em", md: "40em" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          background: "red",
        }}
      >
        <section>Side 1</section>
        <section>Side 2</section>
      </Grid>
    </Grid>
  );
};

export default Home;
