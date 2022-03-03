const express = require("express");
const BodyParser = require("body-parser");
const server = express();
server.use(BodyParser());
let arr = [
    {
        "name": "Huy",
        "age": 18
    },
    {
        "name": "Huy",
        "age": 18
    },
    {
        "name": "Xôi",
        "age": 25
    },
    {
        "name": "Xôi",
        "age": 25
    },
    {
        "name": "Chí",
        "age": 3
    }
];
server.get("/",(request,response)=>{
    response.send({
        message: "Hello World",
    })
})
server.get("/api",(request,response)=>{
    let name = request.query.name;
    let age = request.query.age;
    if(parseInt(age)<=20){
        response.status(200).send({
            message:`Chào bạn ${name},bạn còn trẻ vãi luôn`
        });
    }else{
        response.status(200).send({
            message:`Chào bạn ${name},bạn đã ${age}`
        });
    }
    
})
server.post("/api",(request,response)=>{
   let temp = request.body;
   let name = request.query.name;
   let age = request.query.age;
   if(parseInt(age)<=20){
       arr.push(temp)
    response.status(200).send({
        message:`Chào bạn ${name},bạn còn trẻ vãi luôn`,
        array : arr,
    });
}else{
    response.status(200).send({
        message:`Chào bạn ${name},bạn đã ${age}`
    });
}

})
server.listen(3000,()=>{
    console.log("Server is running!");
})