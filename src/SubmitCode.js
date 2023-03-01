var request = require('request');
code = `#include<iostream>
using namespace std;
int main(){
  int n;
  cin >> n;
  cout << "value :" << n << endl;
  return 0;
}`
var program = {
    stdin : "5",
    script : code,
    language: "cpp",
    versionIndex: "0",
    clientId: "c4b8916e7b2d862091ce444454834f2b",
    clientSecret:"a483da154cd2d9ca2a5e533a35cee0601048b84ee3900419d732789f1b5fd56b"
};
request({
    url: 'https://api.jdoodle.com/v1/execute',
    method: "POST",
    json: program
},
function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body.output);
})