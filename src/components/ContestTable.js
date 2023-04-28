import React from "react";
import '../css/contest.css';
import axios from "axios";
export const ContestTable = (props) => {
    const {url, platformName} = props;
    let contests = []
    const fetchContest = async () => {
        await axios.get("http://localhost:3001/" + url).then((res)=>{
            console.log(res.data)
        })
    }
    fetchContest();
    return (
        <>
            <div className="box">
                    <h2>{platformName}</h2> <br />
                    <table className="codeforces">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Duration</th>
                        </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Weekly Contest 343</td>
                        <td>Sunday,April 30</td>
                        <td>8:00 A.M IST</td>
                        <td>01:30 hrs</td>
                    </tr>
                    {contests.map((contest) => (
                            <tr>
                            <td>{contest.contest_name}</td>
                            <td>{contest.Date}</td>
                            <td>{contest.Time}</td>
                            <td>{contest.Duration}</td>
                            </tr>
                    ))}
                </tbody>
                
            </table>
            </div>
        </>
    )
}