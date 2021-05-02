export default class Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;

  constructor(params: Login) {
    this.uuid = params.uuid;
    this.username = params.username;
    this.password = params.password;
    this.salt = params.salt;
    this.md5 = params.md5;
    this.sha1 = params.sha1;
    this.sha256 = params.sha256;
  }
}
