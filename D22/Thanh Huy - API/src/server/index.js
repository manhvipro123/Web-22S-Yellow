const { response } = require("express");
const express = require("express");
const { request } = require("http");
const server = express();

server.get("/", (request, response) => {
  response.send({
    message: "Hello world",
  });
});

server.get("/api", (request, response) => {
  let name = request.query.name;
  let age = request.query.age;
  if (parseInt(age <= 20)) {
    response.status(200).send({
      message: `Chào cu ${name}, mày còn non lém !!!`,
    });
  } else {
    response.status(200).send({
      message: `Chào chú ${name} đến vs hội người già !!`,
    });
  }

  console.log(name, age);
  response.status(200).send({
    message: "This is API",
  });
});

server.listen(3000, () => {
  console.log("server is running");
});
