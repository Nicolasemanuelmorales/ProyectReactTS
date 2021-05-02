import Coordinates from "./Coordinates";
import Timezone from "./Timezone";

export default class Location {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;

  constructor(params: Location) {
    this.street = params.street;
    this.city = params.city;
    this.postcode = params.postcode;
    this.state = params.state;
    this.coordinates = params.coordinates;
    this.timezone = params.timezone;
  }
}
