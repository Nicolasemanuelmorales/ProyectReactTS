export default class Picture {
  large: string;
  medium: string;
  thumbnail: string;

  constructor(params: Picture) {
    this.large = params.large;
    this.medium = params.medium;
    this.thumbnail = params.thumbnail;
  }
}
