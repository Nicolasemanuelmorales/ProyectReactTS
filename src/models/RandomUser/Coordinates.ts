export default class Coordinates {
  latitude: string;
  longitude: string;

  constructor(params: Coordinates) {
    this.latitude = params.latitude;
    this.longitude = params.longitude;
  }
}
