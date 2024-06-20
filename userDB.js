class UserDB {

    constructor(axios) {
        this.axios = axios
    }

    saveUser(username, password) {
        let resp = this.axios.post(" ")
        return resp.data
    }

    getUser(username, password) {
        let resp = this.axios.get(" ")
        return resp.data
    }

}
module.exports = UserDB