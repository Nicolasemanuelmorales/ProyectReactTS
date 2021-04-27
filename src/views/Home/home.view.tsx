import React from "react";
import { Grid } from "@material-ui/core";
import { generalStyles } from "./home.styles";

export default function Home() {
  const classes = generalStyles();

  return (
    <Grid
      className={classes.base}
      container
      direction="row"
      justify="center"
      alignItems="center"
      xs={12}
    >
      HOME
    </Grid>
  );
}
