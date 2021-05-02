export default class Timezone {
  offset: string;
  description: string;

  constructor(params: Timezone) {
    this.offset = params.offset;
    this.description = params.description;
  }
}
