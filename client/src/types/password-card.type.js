export class PasswordCard {
  constructor({
    id, name, url, userName, password,
  }) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.userName = userName;
    this.password = password;
  }

  static createDefaults() {
    return new PasswordCard({
      id: '',
      name: '',
      password: '',
      url: '',
      userName: '',
    });
  }
}
