import React from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { generalStyles } from "./login.styles";
import { CssTextField } from "./login.styles";
import logo from "../../assets/img/perfil.png";
import { getRandomUser } from "../../services/login.service";
import Result from "../../models/RandomUser/Result";

export default function Login() {
  const history = useHistory();
  const classes = generalStyles();

  const getUser = () => {
    getRandomUser()
      .then((resp: any) => {
        resp.data.results.map((item: Result) => {
          return console.log(item);
        });
      })
      .catch((error) => {
        console.log(error, "Error: ");
      })
      .finally(() => {
        history.push("/home");
      });
  };

  return (
    <Grid
      className={classes.base}
      container
      direction="row"
      justify="center"
      alignItems="center"
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
            <Grid item xs={12} className={classes.uspass}>
              <CssTextField
                key={1}
                id="outlined-basic"
                label="Usuario"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} className={classes.uspass}>
              <CssTextField
                key={2}
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} className={classes.uspass}>
              <Button
                onClick={() => getUser()}
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
