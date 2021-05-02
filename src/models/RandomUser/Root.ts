import Info from "./Info";
import Result from "./Result";

export default class Root {
  results: Result[];
  info: Info;

  constructor(params: Root) {
    this.results = params.results;
    this.info = params.info;
  }
}
