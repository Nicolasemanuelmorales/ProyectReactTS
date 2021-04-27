import { makeStyles } from "@material-ui/core/styles";

export const generalStyles = makeStyles((theme) => ({
  principal: {
    backgroundColor: "#313131",
    padding: 30,
  },
  logo: {
    width: 50,
    height: "auto",
  },
  base: {
    backgroundColor: "#171717",
    height: "100vh",
  },
  titulo: {
    fontSize: 20,
    color: "#40c1ac",
    fontWeight: 800,
    fontFamily: "unset",
  },
  usuario: {
    marginTop: 30,
  },
  password: {
    marginTop: 30,
  },
  borde: {
    color: "#fff",
  },
  relleno: {
    backgroundColor: "#313131",
    borderColor: "#fff",
  },
}));
