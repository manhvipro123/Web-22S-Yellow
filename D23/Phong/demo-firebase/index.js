const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
var key = require("./Keys/fir-98d06-firebase-adminsdk-2hqe6-5ae2d5a6a4.json");

admin.initializeApp({
    credential: admin.credential.cert(key),
})
const firestore = admin.firestore();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (request, response) => {
    response.send({
        message: "Hello World",
    });
});

app.get("/items/:name", async function(request, response) {
    let params = request.params.name;
    let querySnapshot = await firestore.collection(params).get();

    let datas = await querySnapshot.docs.map((value) => {
        let temp = value.data();
        return temp;
    });
    response.send(datas);
});

app.get("/items/", async function(request, response) {
    let temp = request.query.name;
    let querySnapshot = await (
        await firestore.collection(temp).get()
    ).docs.map((value) => {
        let temp = value.data();
        return temp;
    });
    response.send(querySnapshot);
});

app.post("/items", async(req, res) => {
    let body = req.body;
    console.log(body);
    let docName =
        body.data.name + "-" + Math.round(Math.random() * 10).toString();
    let result = await firestore
        .collection(body.collectionName)
        .doc(docName)
        .set(body.data);
    res.send({
        message: "Successful!!!",
    });
});

app.listen(3000, () => {
    console.log("Sever is running!!!");
});