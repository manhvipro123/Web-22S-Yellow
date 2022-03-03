const express = require("express");
const bodyParser = require("body-Parser");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
const path = require("path");
var key = require("../keys/key.json");

admin.initializeApp({
  credential: admin.credential.cert(key),
});

const firestore = admin.firestore();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (request, response) => {
  //   response.send({
  //     message: "Hello World!!!",
  //   });
  console.log(path.join(__dirname, "index.html"));
  response.sendFile(path.join(__dirname, "index.html"));
});

// //get item with params
//postman: localhost:3000/item/Game
app.get("/item/:name", async function (request, response) {
  let params = request.params.name;
  console.log("API 1 " + params);
  let querySnapshot = await firestore.collection(params).get();

  let data = await querySnapshot.docs.map((value) => {
    let temp = value.data();
    return temp;
  });
  response.send(data);
});

// //params cần "<path>/:<tên thuộc tính cần truyền>/" trong code back-end
// // trên browser thì tuân thủ "<url/path/<tên thuộc tính>"

// //query thì back-end k cần khai báo trước thuộc tính query
// // trên browser thì tuân thủ "url/path?<tên thuộc tính>=<giá trị thuộc tính>"
// //query nếu có nhiều hơn 1 thuộc tính thì cách nhau bằng ký tự "&"

// //Get with query
//postman: localhost:3000/item?data=Game
app.get("/item", async function (request, response) {
  let temp = request.query;
  console.log("API 2 " + JSON.stringify(temp));
  try {
    let querySnapshot = await (
      await firestore.collection(temp.data).get()
    ).docs.map((value) => {
      let temp = value.data();
      return temp;
    });
    response.send(querySnapshot);
  } catch (error) {
    console.log("Có cứt lấy được data");
  }
});

//get data with id
// app.get("/item/:id", async function (request, response) {
//   let params = request.params.id;
//   let querySnapshot = await firestore.collection("Game").doc(params);
//   let data = await querySnapshot.get();
//   response.send(data);
// });

app.post("/item", async (req, res) => {
  let body = req.body;
  console.log(body);

  let docName = body.data.id + "-" + Math.round(Math.random() * 10).toString();

  let result = await firestore
    .collection(body.collectionName)
    .doc(docName)
    .set(body.data);

  res.send({
    message: "Loot đồ thành công!!!",
  });
});

app.listen(3000, () => {
  console.log("Server is running!!");
});
