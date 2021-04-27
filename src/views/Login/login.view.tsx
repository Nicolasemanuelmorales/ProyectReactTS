import React from "react";
import {
  Button,
  Grid,
  InputAdornment,
  Paper,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { generalStyles } from "./login.styles";
import { CssTextField } from "./login.styles";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
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
      xs={12}
    >
      <Grid item xs={9} sm={6} md={3}>
        <Paper elevation={4} className={classes.principal}>
          <Grid container direction="column" alignItems="center">
            <Grid>
              <img src={logo} alt="Logo" className={classes.logo} />
            </Grid>
            <Grid>
              <Typography className={classes.titulo}>VALHALLA</Typography>
            </Grid>
            <Grid className={classes.uspass}>
              <CssTextField
                id="outlined-basic"
                label="Usuario"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} className={classes.uspass}>
              <CssTextField
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} className={classes.uspass}>
              <Button
                onClick={() => history.push("/home")}
                variant="outlined"
                style={{
                  borderColor: "#40c1ac",
                  color: "#fff",
                  width: "100%",
                }}
              >
                Iniciar Sesión
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
