export default class Name {
  title: string;
  first: string;
  last: string;

  constructor(params: Name) {
    this.title = params.title;
    this.first = params.first;
    this.last = params.last;
  }
}
