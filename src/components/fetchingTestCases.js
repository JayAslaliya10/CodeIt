const axios = require("axios");

const fetchingTestCases = async (url) => {
    const data = {
        qn_url: url
    }
    await axios.post("http://localhost:5000/api/getdata", data).then((res)=>{
        console.log(res.data.output);
    })
}

let url = "https://codeforces.com/contest/1820/problem/C"
fetchingTestCases(url);