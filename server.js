const express = require ("express");

const app = new express();
const portNr = 8080;

app.listen(portNr, () =>{
    console.log (`Port ${portNr} is on`)
})

