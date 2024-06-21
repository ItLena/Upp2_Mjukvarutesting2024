const User = require("./user");

class UserManager {    

    constructor(userDB) {
        this.userDB = userDB;
        this.loggedUser = null;
    }
    
     login(username, password) {
        console.log("Jag är inloggad")
        const user =  this.userDB.getUserByName(username);
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

    findUserByName(username){
        let returnUser = this.userDB.getUserByName(username)
        if(!returnUser){
            returnUser = null;
            console.log("UserManager: If undefined returnUser:",returnUser);
        }
        //console.log("UserManager: returnUser:",returnUser);

        return returnUser;
    }

    getLoggedUser() {
        return this.loggedUser;
    }
}

module.exports = UserManager