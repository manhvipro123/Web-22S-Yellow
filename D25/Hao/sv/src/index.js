const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const admin = require("firebase-admin");
var key = require("../keys/firebase-admin.json");
const { request } = require("http");
const { response } = require("express");

admin.initializeApp({
  credential: admin.credential.cert(key),
});

const firestore = admin.firestore();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (request, response) => {
  response.send({
    message : "Hello World"
  })
  // response.sendFile(
  //   path.join(__dirname, `index.html`));

});


app.get("/api/:name", async function (request, response) {
  let params = request.params.name;
  console.log("API 1 " + params);
  let querySnapshot = await firestore.collection(params).get();

  let datas = await querySnapshot.docs.map((value) => {
    let temp = value.data();
    return temp;
  });
  response.send(datas);
});
app.get("/api/:id", async function (request, response) {
    let params= request.params.id;
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

app.post("/api", async (request, response) => {
  let body = request.body;
  console.log(body);
try{
    let docName =
    body.data.name + "-" + Math.round(Math.random() * 10).toString();

  let result = await firestore.collection(body.collectionName).doc(docName)
    .set(body.data);

  response.send(
    {
    message: "Successful!!!",
  }
  
  
  );
}catch(error){
    console.log("Error");
}
  
});
//put updata 
// app.put("/api",async (request, response)=>{
//   let collectionName = request.body.collectionId;
//   let docId = request.body.docId;

//   let result= await firestore.collection(collectionName).doc(docId).update({
//     best: admin.firestore.FieldValue.delete()
//   });

//  console.log(result);

// }) ;

// //xóa phần tử đang có trong dữ liệu đã có
// app.put("/api/delete-field", (request, response)=>{
//   let collectionName = request.body.collectionId;
//   let docId = request.body.docId;
//   let fields = request.body.fields;
//   console.log(fields);
//   for(let field of fields){
//     firestore
//     .collection(collectionName)
//     .doc(docId)
//     .update({
//       [field]: admin.firestore.FieldValue.delete(),
//     });
//     console.log("deleted filed " + field);
//     console.log("==========================");
//   }
// })

//update toàn bộ
app.put("/item/update",async (request, response)=>{
  let collectionName = request.body.collectionName;
  let docId = request.body.docId;
  console.log(collectionName,docId);
try{
  let result= await firestore.collection(collectionName)
  .doc(docId)
  .update(request.body.data);
 console.log(result);
 response.send({
   message: "Update successful!!",
   updateTime: result.writeTime,
 })
}catch (error){
  response.send({
    error: error.toString(),
  });
}
}) ;

// set
app.put("/item/set",async (request, response)=>{
  let collectionName = request.body.collectionName;
  let docId = request.body.docId;
try{
  let result= await firestore.collection(collectionName)
  .doc(docId)
  .set(request.body.data);
 response.send({
   message: "Update successful!!",
   updateTime: result.writeTime,
 })
}catch (error){
  response.send({
    error: error.toString(),
  });
}
}) ;

//delete 1 filed 
app.delete("/item/delete-field", (request, response)=>{
  let collectionName = request.body.collectionName;
  let docId = request.body.docId;
  let fields = request.body.fields;
  console.log(fields);
  for(let field of fields){
    firestore
    .collection(collectionName)
    .doc(docId)
    .update({
      [field]: admin.firestore.FieldValue.delete(),
    });
    console.log("deleted filed " + field);
    console.log("==========================");
    response.send({
      message : "Delete successful!!"
    })
  }
})
// delete 1 document
app.delete("/item/delete",async(request,response)=>{
  let collectionName = request.body.collectionName;
  let docId = request.body.docId;
  firestore.collection(collectionName).doc(docId).delete()
  response.send({
    message : "Delete successful!!"
  })
});

// delete nhiều documents
app.delete("/item/deletes",async(request,response)=>{
  let collectionName = request.body.collectionName;
  let docs = [...request.body.docs];
  for(let docId of docs){
     await firestore.collection(collectionName).doc(docId).delete()
  }
   response.send({
    message : "Delete successful!!"
  })
 
});

// delete tất cả documents
app.delete("/item/deletedocuments/:name",async(request,response)=>{
  let params = request.params.name;
  
  let querySnapshot = firestore.collection(params).get().then(response => {response.forEach(element => {element.ref.delete();
});
  });
  response.send(querySnapshot);
});
 
const  PORT = 3000;
app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
