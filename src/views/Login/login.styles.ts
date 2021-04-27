import { TextField } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

export const generalStyles = makeStyles((theme) => ({
  principal: {
    backgroundColor: "#313131",
    padding: 30,
    boxShadow: "0px 0px 0px 1px  #40c1ac",
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
  uspass: {
    marginTop: 30,
    width: "100%",
  },
  borde: {
    color: "#fff",
  },
  relleno: {
    backgroundColor: "#313131",
    borderColor: "#fff",
  },
  focused: {
    borderColor: "#fff",
  },
}));
export const CssTextField = withStyles({
  root: {
    width: "100%",

    "& input": {
      color: "white",
      backgroundColor: "#272727",
      borderRadius: 5,
    },
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#40c1ac",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);
