import { Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

export default function Login() {
  const history = useHistory();

  return <Typography onClick={() => history.push("/home")}>Login</Typography>;
}
