const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const admin = require("firebase-admin");
var key = require("../keys/firebase-admin.json");

admin.initializeApp({
  credential: admin.credential.cert(key),
});

const firestore = admin.firestore();
// (async ()=> {
//     let Snapshot = await firestore.collection("items")
//     .doc("0TecPozjTcdOTnEMFrFb").get();
//     console.log(Snapshot);
// })();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (request, response) => {
  response.sendFile(
    path.join(__dirname, `index.html`));

});


// app.get("/item/:name", async function (request, response) {
//   let params = request.params.name;
//   console.log("API 1 " + params);
//   let querySnapshot = await firestore.collection(params).get();

//   let datas = await querySnapshot.docs.map((value) => {
//     let temp = value.data();
//     return temp;
//   });
//   response.send(datas);
// });
app.get("/item/:id", async function (request, response) {
    let params = request.params.id;
    let querySnapshot = await firestore.collection("items").doc(params);
    let datas = await querySnapshot.get();
        response.send(datas);
  });

//get item with query
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
    console.log("Lỗi không lấy được data");
  }
});




app.post("/item", async (req, res) => {
  let body = req.body;
  console.log(body);
try{
    let docName =
    body.data.name + "-" + Math.round(Math.random() * 10).toString();

  let result = await firestore
    .collection(body.collectionName)
    .doc(docName)
    .set(body.data);

  res.send({
    message: "Successful!!!",
  });
}catch(error){
    console.log("Error");
}
  
});

app.listen(3000, () => {
  console.log("Server is running!!");
});
