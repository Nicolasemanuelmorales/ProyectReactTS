import Picture from "../Picture";
import Dob from "./Dob";
import Id from "./Id";
import Login from "./Login";
import Name from "./Name";
import Registered from "./Registered";

export default class Result {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;

  constructor(params: Result) {
    this.gender = params.gender;
    this.name = params.name;
    this.location = params.location;
    this.email = params.email;
    this.login = params.login;
    this.dob = params.dob;
    this.registered = params.registered;
    this.phone = params.phone;
    this.cell = params.cell;
    this.id = params.id;
    this.picture = params.picture;
    this.nat = params.nat;
  }
}
