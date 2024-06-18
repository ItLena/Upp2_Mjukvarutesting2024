
document.getElementById("btnSubmit").addEventListener("click", login)

function login (userName, password) {

    if (userName && password){
        location.href = "/user"   
        return  {logged: true, message: 'Inloggad'} 
        
    }
    else{
        location.href = ""   
        return {logged: false, message: 'Felaktig input'}
        
    }
}

module.exports = login