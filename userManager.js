const user = require("./user");
const impUserDB = require("./userDB");

//const user = new impUser();

class UserManager {    

    constructor() {
        this.userDB = new impUserDB;
        this.loggedUser = null;
    }
    
     login(username, password){
        console.log("Jag försöker logga in")
        const user =  this.userDB.getUserByName(username);
    
        if (user.username === username && user.password === password) {
            console.log("Jag är inloggad")
            return true;
        } else {
            return false;
        }         
    }

    createUser(username, password) {
        const newUser = new user(username, password);
        //this.userDB.saveUser(newUser);
        this.userDB.saveUser(newUser)

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