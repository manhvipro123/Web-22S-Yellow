const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
var key = require("./Keys/storebh-9be23-firebase-adminsdk-i0ufk-68a18d01aa.json");

admin.initializeApp({
    credential: admin.credential.cert(key),
})

// console.log(admin.appCheck());

const firestore = admin.firestore();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (request, response) => {
    response.send({
        message: "Hello World",
    });
});

//get item with params
app.get("/produce/:name", async function(request, response) {
    let params = request.params.name;
    let querySnapshot = await firestore.collection(params).get();
    let datas = await querySnapshot.docs.map((value) => {
        let temp = value.data();
        return temp;
    });
    response.send(datas);
    // console.log(datas);
});

app.get("/produce/", async function(request, response) {
    let temp = request.query.name;
    try {
        let querySnapshot = await (
            await firestore.collection(temp).get()
        ).docs.map((value) => {
            let temp = value.data();
            return temp;
        });
        response.send(querySnapshot);
    } catch (error) {
        console.log("Lỗi không lấy được data");
    }
});

app.post("/produce", async(request, response) => {
    let body = request.body;
    console.log(body);
    let docName =
        body.data.name + "-" + Math.round(Math.random() * 10).toString();
    let result = await firestore
        .collection(body.collectionName)
        .doc(docName)
        .set(body.data);
    response.send({
        message: "Successful!!!",
    });
});

app.listen(3000, () => {
    console.log("Sever is running!!!");
});