export default class Info {
  seed: string;
  results: number;
  page: number;
  version: string;

  constructor(params: Info) {
    this.seed = params.seed;
    this.results = params.results;
    this.page = params.page;
    this.version = params.version;
  }
}
