const User = require("./user");

class UserManager {    

    constructor(userDB) {
        this.userDB = userDB;
        this.loggedUser = null;
    }
    
     login(username, password) {
        console.log("Jag är inloggad")
        const user =  this.userDB.getUser(username, password);
        if (user.username === "jon" && user.password === "123") {
            this.loggedUser = user;
            location.href = "/user"
            return true;
        } else {
            location.href = ""
            return false;
        }         
    }

    createUser(username, password) {
        const newUser = new User(username, password);
        this.userDB.saveUser(newUser);
    }

    getLoggedUser() {
        return this.loggedUser;
    }
}

module.exports = UserManager