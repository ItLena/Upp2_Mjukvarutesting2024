class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  getUser() {
    return this.username, this.password;
  }
  getUserName() {
    return this.username;
  }
}

module.exports = User