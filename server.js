const bodyParser = require("body-parser");
const express = require("express");
const impUserManager = require("./userManager.js");
const userManager = new impUserManager();
const app = new express();
const portNr = 8080;


// DB hardcoded
const users = {
    user1: {
      username: 'jon',
      password: '123',
    },
    user2: {
      username: 'doe',
      password: '456',
    },
  };
app.use(express.static('./'));

// Start server
app.listen(portNr, () =>{
    console.log (`Port ${portNr} is on`)
})

// Payload tools
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routing 
app.get('/favicon.ico', (req, res) => {
  res.sendFile("favicon.ico", {root: __dirname});
});

app.get("", (req,res)=>{
    //console.log("Hello world")
    res.sendFile("register.html", {root: __dirname})
})

app.get("/login", (req,res)=>{ 
    res.sendFile("login.html", {root: __dirname})
})

app.get("/user", (req,res)=>{ 
  res.sendFile("user.html", {root: __dirname}) 
    // if (userManager.getLoggedUser()) {

    //     res.send("Welcome to user page");
    //   } else {
    //     res.send("Not authorized")
    //   }
    
})

// Register func
app.post("/", bodyParser.json(), (req, res) => {
    const { username, password } = req.body;
    if (users[username]) {
        res.send("User name is already taken");
        return;
      }
    
      userManager.createUser(username, password);
      res.send("User have been registred");
})

//Login func 
app.post("/login", bodyParser.json(), (req, res) =>{
    const { username, password } = req.body;  
    //res.send('You are logged in'); 
    // if (userManager.login(username, password))  
    if (userManager.login(username, password) ){
        res.send('You are logged in');
      } else {
        res.send('Wrong user name or pasword');
      }
    
})
