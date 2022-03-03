const express = require("express");
const bodyParser = require("body-Parser");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
var serviceAccount = require("../keys/firebase-admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (request, response) => {
  response.send({
    message: "Hello World!!!",
  });
});

app.listen(3000, () => {
  console.log("Server is running!!");
});
