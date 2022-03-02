const express = require("express");
const server = express();
const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

let arr = [];

server.get("/",(request,response)=>{
    response.send({
        message: "Hello World"
    });
});

server.get("/api",(request,response)=>{ 
    let name = request.query.name;
    let age = request.query.age;
    // console.log(name,age);
    if(parseInt(age)<=20){
        response.status(200).send({
            message: `Chào nhóc ${name}, nhóc còn non lắm!!!`,
        });
    }else{
        response.status(200).send({
            message: `Chào cụ ${name}, cụ đã ngoài ${age}`,
        });
    }
});

server.post("/api",(request,response) => {
    console.log(request.body);
});

server.listen(3000,() => {
    console.log("Server iss running");
});