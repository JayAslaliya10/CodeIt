const express = require("express");
const cors = require("cors");
const request = require("request");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;


app.post("/submitcode", async (req, res) => {
    const {code, stdin, language} = req.body;
    if(stdin == null) stdin = "";
    const output = await submitCode(code, stdin, language);
    res.send({
        output
    })
})

app.listen(port, ()=>{
    console.log(`App is listening on "http://localhost:${port}`)
})

const submitCode = async (code, stdin, language) => {
    let data;
    var program = {
        stdin,
        script : code,
        language,
        versionIndex: "0",
        clientId: "c4b8916e7b2d862091ce444454834f2b",
        clientSecret:"a483da154cd2d9ca2a5e533a35cee0601048b84ee3900419d732789f1b5fd56b"
    };
    await axios.post("https://api.jdoodle.com/v1/execute", program).then((responseData)=>{
        data = responseData.data;
    })
    return data;
}