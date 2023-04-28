const express = require("express");
const cors = require("cors");
const request = require("request");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const port = 3003;


app.post("/submitcode", async (req, res) => {
    const {code, stdin, language} = req.body;
    console.log("code", code);
    if(stdin == null) stdin = "";
    const output = await submitCode(code, stdin, language);
    res.send({
        output
    })
})

app.get("/leetcode", async (req, res) => {

  const moment = require('moment-timezone');

  function getNextContestDates() {
    const ptTimezone = "Asia/Kolkata";
    const currentDateTime = moment().tz(ptTimezone);
    const contestStartTime = "08:00:00";
    const weeklyContestSchedule = "0 0 8 ? * 6";
    const biweeklyContestSchedule = "0 0 8 ? * 6/2";

    let nextWeeklyContestDates = [];
    for (let i = 0; i < 6; i++) {
      const nextContestDate = moment(currentDateTime).day(7).hour(8).minute(00).second(0).add(i * 7, 'days');
      const nextContestDateTime = nextContestDate.valueOf();
      const contestTimeDiff = (nextContestDateTime - currentDateTime.valueOf()) / 1000; // get the time difference in seconds
      nextWeeklyContestDates.push({
        date: nextContestDate.format('L'),
        time: nextContestDate.format('LT'),
        timeDiff: contestTimeDiff,
        name:"Weekly"
      });
    }
  
    let nextBiweeklyContestDates = [];
    for (let i = 0; i < 6; i++) {
      const nextContestDate = moment(currentDateTime).day(6).hour(20).minute(00).second(0).add(i * 14, 'days');
      const nextContestDateTime = nextContestDate.valueOf();
      const contestTimeDiff = (nextContestDateTime - currentDateTime.valueOf()) / 1000; // get the time difference in seconds
      nextBiweeklyContestDates.push({
        date: nextContestDate.format('L'),
        time: nextContestDate.format('LT'),
        timeDiff: contestTimeDiff,
        name:"Biweekly"
      });
    }

   let contestDates = nextWeeklyContestDates.concat(nextBiweeklyContestDates);
   contestDates.sort(function (a, b) {
     return moment(a.date + ' ' + a.time).diff(moment(b.date + ' ' + b.time));
   });
 
   return contestDates;
  }
  
  const contestDates = getNextContestDates();
  // console.log(contestDates);

  output=[]
  for(let i=0;i<contestDates.length;i++)
  {
    output.push({
      contest_name:contestDates[i].name,
      Date:contestDates[i].date,
      Time:contestDates[i].time,
      Duration:"1:30"
    })
  }
    // console.log(output);
    // const output = [{
    //     contest_name:name,
    //     Date:date,
    //     Time:time,
    //     Duration:duration
    // }]
    res.send({
output   })
})


app.get("/codechef", async (req, res) => {

  const moment = require('moment-timezone');

function getNextContestDates() {
  const istTimezone = "Asia/Kolkata";
  const currentDateTime = moment().tz(istTimezone);
  const contestStartTime = "20:00:00";
  const contestSchedule = "0 0 20 ? * 3";
  let nextContestDates = [];
  for (let i = 0; i < 6; i++) {
    const nextContestDate = moment(currentDateTime).day(3).hour(20).minute(0).second(0).add(i * 7, 'days');
    const nextContestDateTime = nextContestDate.valueOf();
    const contestTimeDiff = (nextContestDateTime - currentDateTime.valueOf()) / 1000;
    nextContestDates.push({
      date: nextContestDate.format('L'),
      time: nextContestDate.format('LT'),
      timeDiff: contestTimeDiff,
    });
  }

  return nextContestDates;
}
const nextContestDates = getNextContestDates();

output=[]
count=88
for(let i=0;i<nextContestDates.length;i++)
{
  output.push({
    contest_name:"Starter "+count,
    Date:nextContestDates[i].date,
    Time:nextContestDates[i].time,
    Duration:"2:00:00"
  })
  count+=1
}
// console.log(output);
  
  res.send({
      output
  })
})


let contests
app.get("/codeforces", async (req, res) => {
  await axios.get("https://codeforces.com/api/contest.list?gym=false").then((res)=>{
    contests=res.data.result
  })
  // console.log("contests length : ",contests.length);
  // console.log(contests);
  output=await getcontests()
  // console.log(output);
  res.send({
      output
  })
})

app.listen(port, ()=>{
    console.log(`App is listening on "http://localhost:${port}`)
})



async function secondsToHms(seconds) {
  let d = Number(seconds);
  if(d <= 0){
     return '00:00:00'
  }else{
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);
    let hDisplay = h <= 9 ? '0'+ h+':' : h+ ":";
    let mDisplay = m <= 9 ? '0'+ m+':' : m+ ":";
    let sDisplay = s <= 9 ? '0'+ s : s;
    return hDisplay + mDisplay + sDisplay;
  }}
async function getcontests(){
  // console.log("contests : ",contests.length);
  contestsData=[]
  for(let i=0;i<contests.length;i++){
    if(contests[i].phase=="BEFORE"){
      duration=contests[i].durationSeconds
      duration= await secondsToHms(duration)
      startTimeSeconds=contests[i].startTimeSeconds
      const myDate = new Date( startTimeSeconds*1000);
      dateTime = myDate.toLocaleString();
      dateTime=dateTime.split(",")

      contestsData.push({
        contest_name:contests[i].name,
        Date:dateTime[0],
        Time:dateTime[1],
        Duration:duration
      })
    }
  }
  // console.log("inside getcontests : \n",contestsData);
  return contestsData
}


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