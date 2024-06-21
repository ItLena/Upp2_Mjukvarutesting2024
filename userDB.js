const User = require("./user");

class UserDB {

    constructor() {
       this.users = {}; // Mockad databas
       this.users["Per"] = new User("Per", "456");
    }

    saveUser(user) {
        this.users[user.getUserName()] = user;
        console.log("UserDB: Create newuser:", user)
        //console.log("UserDB: What is getUser:", user.getUserName())       
    }

    getUserByName(username) {
        console.log("UserDB: Find user", username) 
        return this.users[username];        
    }

}
module.exports = UserDB