const crypto = require('crypto');
const request = require('request');

function generateApiRequest() {
  const key = '1f3f76c03e6a5e43e650c8b8487d48ce03791bca';
  const secretKey = '7ee9d2f57dc4b8f9fbdffeacb5d2424f8ffd4346';
  const currentTime = Math.floor(Date.now() / 1000).toString();
  const preHash = `${currentTime}/contest.list?apiKey=${key}`;
  const hashed = crypto.createHmac('sha512', secretKey).update(preHash).digest('hex');
  const apiRequest = `https://codeforces.com/api/contest.list?apiKey=${key}&time=${currentTime}&apiSig=${hashed}`;
  return apiRequest;
}

const apiRequest = generateApiRequest();
request.get(apiRequest, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.parse(body));
  }
});
