import { Grid, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { generalStyles } from "./login.styles";
import logo from "../../assets/img/perfil.png";
export default function Login() {
  const history = useHistory();
  const classes = generalStyles();

  return (
    <Grid
      className={classes.base}
      container
      direction="row"
      justify="center"
      alignItems="center"
      //onClick={() => history.push("/home")}
      xs={12}
    >
      <Grid item xs={9} sm={6} md={3}>
        <Paper elevation={4} className={classes.principal}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={12}
          >
            <Grid item xs={12}>
              <img src={logo} alt="Logo" className={classes.logo} />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.titulo}>VALHALLA</Typography>
            </Grid>
            <Grid item xs={12} className={classes.usuario}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} className={classes.password}>
              <TextField
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  classes: {
                    root: classes.borde,
                  },
                }}
                InputProps={{
                  classes: {
                    notchedOutline: classes.relleno,
                  },
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
