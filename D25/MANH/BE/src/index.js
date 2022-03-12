const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
const path = require("path");
var serviceAccount = require("./keys/key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const firestore = admin.firestore();

app.get("/", (request, response) => {
  response.send({
    message: "Hello T1 Huy Bòi",
  });
  // response.sendFile(path.join(__dirname,"./index.html"));
});

//get item with params
// params cần: "<path>:/<tên thuộc tính cần truyền>/" trong code back-end
// trên browser cần tuân thủ "<url/path/<tên thuộc tính>"

//query thì back-end k cần phải khai bao trước query params 
// trên browser thì tuân thủ "url/path?<tên thuộc tính>=<giá trị thuộc tính>"
//query nếu có nhiều hơn 1 thuộc tính thì cách nhau bằng ký tự "&"

app.get("/api/:name", async function (request, response) {
  try {
    let params = request.params.name
    console.log(params);
    let querySnapshot = await firestore.collection(params).get();
    let datas = await querySnapshot.docs.map((value) => {
      let id = value.id;
      let temp = value.data();
      temp = { ...temp, id: id }
      return temp;
    });
    console.log(datas);
    response.send(datas);
  } catch (err) {
    console.log(err)
    response.json(err)
  }

});

// get with query
app.get("/api", async function (request, response) {
  let temp = request.query.data;
  try {
    let querySnapshot = await firestore.collection(temp).get();
    let datas = await querySnapshot.docs.map((value) => {
      let temp = value.data();
      return temp;
    });
    console.log(datas);
    response.send(datas);
  } catch (error) {
    console.log("Kiên ký đầu mày !!!");
  }
});

app.post("/api", async (req, res) => {
  let body = req.body;
  console.log(body);
  try {
    // let docName1=body.data.name.split(" ").join("");
    // console.log(docName1)
    let docName = body.data.name.split(" ").join(""); + "-" + Math.round(Math.random() * 10).toString();
    let result = await firestore
      .collection(body.collectionName)
      .doc(docName)
      .set(body.data);
    res.send({
      message: "Oh Yeha",
    });
  } catch (error) {
    console.log("SAi rồi chú em");
  }
});

//get with id 
app.get("/api/:collection/:docId", async function (request, response) {
  let collectionName = request.params.collection;
  let docId = request.params.docId;
  console.log(collectionName, docId);
  let querySnapshot = await firestore.collection(collectionName).doc(docId).get();
  let temp = querySnapshot.data();
  console.log(temp);
  response.send(temp);
});

//update-delete
// app.delete("/api/delete-id-field",async (request, response) => {
//   let collectionName = request.body.collectionName;
//   let docId = request.body.docId;

//   try{
//     firestore.collection(collectionName).doc(docId).update({
//       best : admin.firestore.FieldValue.delete(),
//     });
//     response.send({
//       message: "Eyo Kimochi!",
//     });
//   }catch(error){
//     response.send({
//       message: error.toString(),
//     });
//   }
// });

// update hoàn toàn dữ liệu mới
app.put("/api/set", async (request, response) => {
  let collectionName = request.body.collectionName;
  let docId = request.body.docId;
  try {
    let result = await firestore.collection(collectionName)
      .doc(docId)
      .set(request.body.data);
    response.send({
      message: "Update successful!!",
      updateTime: result.writeTime,
    })
  } catch (error) {
    response.send({
      error: error.toString(),
    });
  }
});

//update 1 fields
app.put("/api/update", async (request, response) => {
  let collectionName = request.body.collectionName;
  let docId = request.body.docId;
  console.log(request.body);
  console.log(docId);
  try {
    let result = await firestore.collection(collectionName).doc(docId).update(request.body.data);
    console.log(result);
    response.send({
      message: "Eyo Kimochi!",
      updateTime: result.writeTime,
    });
  } catch (error) {
    console.log(error);
    response.send({
      message: error.toString(),

    });
  }
});

//update by delete fields cũ trong doc và update fields mới từ body
app.delete("/api/delete-fields", (request, response) => {
  let collectionName = request.body.collectionName;
  let docId = request.body.docId;
  let fields = request.body.fields;
  console.log(fields);
  try {
    for (let field of fields) {
      firestore
        .collection(collectionName)
        .doc(docId)
        .update({
          [field]: admin.firestore.FieldValue.delete(),
        });
      console.log("deleted field " + field);
      console.log("==========================");
    }
    response.send({
      message: "Thành công!",
      // updateTime:fields.writeTime,
    });
  } catch (error) {
    response.send({
      message: error.toString(),

    });
  }

});

//xóa một doc bất kỳ
app.delete("/api/delete-doc", (request, response) => {
  let collectionName = request.body.collectionName;
  let docId = request.body.docId;
  try {
    firestore.collection(collectionName).doc(docId).delete();
    response.send({
      message: "Thành công!",
      // updateTime: docId.writeTime,
    });
  } catch (error) {
    response.send({
      message: error.toString(),
    });
  }
});

//xóa một doc bất kỳ
app.delete("/api/delete-docs", (request, response) => {
  let collectionName = request.body.collectionName;
  let docs = [...request.body.docs];
  try {
    for (let docId of docs) {
      firestore.collection(collectionName).doc(docId).delete();
    }

    response.send({
      message: "Thành công!",
      // updateTime: docs.writeTime,
    });
  } catch (error) {
    response.send({
      message: error.toString(),
    });
  }
});



// delete tất cả documents đang có trong collection
app.delete("/api/deletedocuments/:name", async (request, response) => {
  let params = request.params.name;
  let querySnapshot = firestore.collection(params).get().then(response => {
    response.forEach(element => {
      element.ref.delete();
    });
  });
  response.send(querySnapshot);
});


let PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});