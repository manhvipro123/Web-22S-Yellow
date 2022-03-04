const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
const path = require("path");
var serviceAccount = require("./keys/fir-angular-371b9-firebase-adminsdk-8k64c-2ab91bc80f.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const firestore = admin.firestore();

app.get("/",(request,response) => {
    // response.send({
    //     message: "Hello World",
    // });
    response.sendFile(path.join(__dirname,"./index.html"));
});

//get item with params
// params cần: "<path>:/<tên thuộc tính cần truyền>/" trong code back-end
// trên browser cần tuân thủ "<url/path/<tên thuộc tính>"

//query thì back-end k cần phải khai bao trước query params 
// trên browser thì tuân thủ "url/path?<tên thuộc tính>=<giá trị thuộc tính>"
//query nếu có nhiều hơn 1 thuộc tính thì cách nhau bằng ký tự "&"

// app.get("/item/:name", async function (request, response) {
//     let params = request.params.name;
//     let querySnapshot = await firestore.collection(params).get();
  
//     let datas = await querySnapshot.docs.map((value) => {
//       let temp = value.data();
//       return temp;
//     });
//     response.send(datas);
//   });
  
  // get with query
  app.get("/item", async function (request, response) {
    let temp = request.query.data;
    try{
        let querySnapshot = await firestore.collection(temp).get();
        let datas = await querySnapshot.docs.map((value) => {
            let temp = value.data();
            return temp;
          });
          response.send(datas);
    }catch(error){
        console.log("Kiên ký đầu mày !!!");
    }
  });
  
  app.post("/item", async (req, res) => {
    let body = req.body;
    console.log(body);
    try{
        let docName = body.data.name + "-" + Math.round(Math.random() * 10).toString();
        let result = await firestore
        .collection(body.collectionName)
        .doc(docName)
        .set(body.data);
      res.send({
        message: "Successful!!!",
      });
    }catch(error){
        console.log("SAi rồi chú em");
    }
  });

  //get with id 
  app.get("/item/:id", async function (request, response) {
    let params = request.params.id;
    let querySnapshot = await firestore.collection("items").doc(params);
    querySnapshot.forEach((doc) =>{
      console.log(doc.id, " => ", doc.data());
      let temp = doc;
      return temp;
    });
    // console.log(querySnapshot);
    // let datas = await getDoc(querySnapshot);
      response.send(temp);
  });

app.listen(3000, () => {
    console.log("Server is running !!");
});