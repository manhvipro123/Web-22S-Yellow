const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const { request, response } = require("express");
const path = require("path");
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

let arr = [];

server.get("/",(request,response)=>{
    // response.send({
    //     message: "Hello World"
    // });
    response.sendFile(path.join(__dirname,"./index.html"));
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
    let temp = request.body;
    let age = temp.age;
    let name = temp.name;
    if(parseInt(age)<=20){
        arr.push(temp);
        response.status(200).send({
            message: `Chào nhóc ${name}, nhóc còn non lắm!!!`,
            array: arr,
        });
    }else{
        response.status(200).send({
            message: `Chào cụ ${name}, cụ đã ngoài ${age}`,
        });
    }
});

server.put("/api",(request,response) => {
    let temp = request.body;
    let name = temp.name;
    let age = temp.age;
    for(let i = 0; i < arr.length; i++){
        if(name == arr[i].name){
            arr[i] = { ...temp };
        }
    }
    response.send({
        response: arr,
    });
});

server.delete("/api",(request,response) => {
    let temp = request.body;
    let name = temp.name;
    let age = temp.age;
    for(let i = 0; i < arr.length; i++){
        if(name == arr[i].name){
            arr.splice(i,1);
        }
    }
    response.send({
        response: arr,
    });
});



server.listen(3000,() => {
    console.log("Server iss running");
});