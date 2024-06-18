const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs"); 

const app = new express();
const portNr = 8080;
const filePath = "./data.json"

// Start server
app.listen(portNr, () =>{
    console.log (`Port ${portNr} is on`)
})

// Payload tools
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Endpoints 
app.get("", (req,res)=>{
    //console.log("Hello world")
    res.sendFile("login.html", {root: __dirname})
})

app.get("/register", (req,res)=>{    
    res.sendFile("register.html", {root: __dirname})
})

app.get("/user", (req,res)=>{    
    res.sendFile("user.html", {root: __dirname})
})