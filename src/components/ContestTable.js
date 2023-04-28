import React, { useEffect, useState } from "react";
import '../css/contest.css';
import axios from "axios";
export const ContestTable = (props) => {
    const {url, platformName} = props;
    const [contests, setContest] = useState([]);
    useEffect(() => {
        const fetchContest = async () => {
            const newurl = "http://localhost:3003/" + url;
            let newcontests = [];
            await axios.get(newurl).then((res)=>{
                // console.log(res.data)
                for(let i=0; i<6; i++){
                    newcontests.push(res.data.output[i]);
                }
            })
            setContest(newcontests);
            console.log("after", contests);
        }
        fetchContest();
    }, [])
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