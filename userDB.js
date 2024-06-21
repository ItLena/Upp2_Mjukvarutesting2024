class UserDB {

    constructor() {
       this.users = {}; // Mockad databas
    }

    saveUser(user) {
        this.users[user.getUser()] = user;
        return user        
    }

    getUser(username) {
        return this.users[username];        
    }

}
module.exports = UserDB