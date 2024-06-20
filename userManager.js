



document.getElementById("#btn").addEventListener("click", ()=>{
    console.log("onclick start")
    const username = document.getElementById("#username").value
    const password = document.getElementById("#username").value
    login(username, password)
    console.log("onclick", username, password)
})

class UserManager {    

    constructor(userDatabase) {
        this.userDatabase = userDatabase;
        this.loggedUser = null;
    }
    
    async login() {
        console.log("Jag är inloggad")
        const user = await this.userDatabase.getUser(username, password);
        if (user.username == username && user.password === password) {
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
        this.userDatabase.saveUser(newUser);
    }

    getLoggedUser() {
        return this.loggedUser;
    }
}

module.exports = UserManager