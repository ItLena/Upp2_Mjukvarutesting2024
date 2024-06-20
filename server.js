const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs"); 

const app = new express();
const portNr = 8080;
const filePath = "./data.json"

app.use(express.static('./'));

// Start server
app.listen(portNr, () =>{
    console.log (`Port ${portNr} is on`)
})

// Payload tools
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routing 
app.get("", (req,res)=>{
    //console.log("Hello world")
    res.sendFile("register.html", {root: __dirname})
})

app.get("/login", (req,res)=>{ 
    res.sendFile("login.html", {root: __dirname})
})

app.get("/user", (req,res)=>{  
    if(req.loggedUser) {
      res.sendFile("user.html", {root: __dirname})  
    } 
    else{
        res.redirect("");
    }
    
})

// Register func
app.post("", (req, res) => {
    const data = req.body;
    const jsonStr = JSON.stringify(data, null, 2)
    fs.writeFile(filePath, jsonStr, (err) => {
        if (err) console.log(err)
    })

    //Return data to sender
    res.send(jsonStr)
})

//Login func 
app.post("/getlog", bodyParser.json(), (req, res) =>{
      
    fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) console.log(err) 
          
            res.send(JSON.stringify(data, null, 2))
        })      
    if(data){ 
        res.send("Login is success")  
        console.log("data rätt", data) 
    }   
    else{
        res.send("Wrong user name or password")
        console.log("data fel", data) 
    }
    
})
