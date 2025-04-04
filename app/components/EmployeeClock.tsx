"use client";

import {signOut} from 'next-auth/react';
import React, {useEffect, useState} from 'react';

export default function EmployeeClock({email}: { email: string }) {
    const [clockInTime, setClockInTime] = useState("");
    const [clockOutTime, setClockOutTime] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const fetchTimesheet = async () => {
            const response = await fetch("/api/employees/get_timesheet", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch timesheet data");
            }

                const data = await response.json();
                console.log("Fetched timesheet data:", data);

                // Check if there are clock times from today
            if (data.clockInTime) {
                const fetchedClockInTime = new Date(data.clockInTime);
                console.log("Fetched clockInTime:", fetchedClockInTime);
                if (fetchedClockInTime > new Date(new Date().getDate()-1)) {
                    setClockInTime(data.clockInTime);
                }
            }

            if (data.clockOutTime) {
                const fetchedClockOutTime = new Date(data.clockOutTime);
                console.log("Fetched clockOutTime:", fetchedClockOutTime);
                if (fetchedClockOutTime > new Date(new Date().getDate()-1)) {
                    setClockOutTime(data.clockOutTime);
                }
            }
        }
        fetchTimesheet();


    })



    async function postSubmit() {
        setSubmitted(true)
        const lci = new Date(clockInTime)
        const lco = new Date(clockOutTime)
        console.log("lci:", lci)
        console.log("lco:", lco)
        console.log("lco:", lco.getTime())
        console.log("total hours", Math.round((lco.getTime() - lci.getTime())/1000/60/60))
        const timesheetPost = await fetch("/api/employees/timesheet", {
            method: "POST",
            body: JSON.stringify({
                clockInOutSubmit: "submit",
                time: Math.round((lco.getTime() - lci.getTime())/1000/60/60),
                email: email,
            }),
        })
        console.log(await timesheetPost.json())

    }

    async function postClockIn() {
        const lci = new Date().toISOString();
        console.log("LCIIII: ", lci)
        const clockInPost = await fetch("/api/employees/timesheet", {
            method: "POST",
            body: JSON.stringify({
                clockInOutSubmit: "clockIn",
                time: lci,
                email: email,
            })
        })
        console.log(await clockInPost.json())
    }

    async function postClockOut() {
        const lco = new Date().toISOString()
        const clockOutPost = await fetch("/api/employees/timesheet", {
            method: "POST",
            body: JSON.stringify({
                clockInOutSubmit: "clockOut",
                time: lco,
                email: email,
            })
        })
        console.log(await clockOutPost.json())
    }



    return (
        <div className="flex items-center justify-center" style={{marginTop: "50px"}}>
            <div className="w-full align-items-center">
                <div className="flex flex-col space-y-4 w-full">
                    <div className="flex space-x-4 justify-center">
                        <div className="bg-green-600 text-white p-4 w-1/2 text-center rounded-lg">
                            <button
                                className="h-full w-full font-bold"

                                onClick={() => {setClockInTime(new Date().toISOString()); postClockIn()}}>
                                Clock In
                            </button>
                            {/*disabled={clockInTime != ""}*/}
                        </div>
                        <div className="bg-blue-950 text-white p-4 w-1/2 text-center rounded-lg">
                            <button
                                className="h-full w-full font-bold"

                                onClick={() => {setClockOutTime(new Date().toISOString()); postClockOut()}}
                            >
                                {/*disabled={clockOutTime != "" || clockInTime == ""}*/}
                                Clock Out
                            </button>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div
                            className="p-4 w-1/2 text-center rounded-lg bg-green-600 text-white"
                            style={{
                                height: "70px",
                            }}
                        >
                            {clockInTime != "" && <p>Clocked In at {new Date(clockInTime).toLocaleTimeString()}</p>}
                        </div>
                        <div
                            className="p-4 w-1/2 text-center rounded-lg bg-blue-950 text-white"
                            style={{
                                height: "70px",
                            }}
                        >
                            {clockOutTime != "" && <p>Clocked Out at {new Date(clockOutTime).toLocaleTimeString()}</p>}
                        </div>
                    </div>
                    <div
                        className="text-white rounded-lg"
                        style={{
                            height: "50px",
                        }}
                    >
                        <button

                            onClick={() => {
                                postSubmit()
                            }}
                            disabled={clockInTime == "" || clockOutTime == ""}
                            className="h-full w-full bg-gradient-to-r from-green-600 to-blue-950 rounded-lg"
                        >
                            Submit Timesheet for Day
                        </button>
                    </div>
                    <div className="text-center">
                        <p>{submitted && "Successfully Submitted Timesheet!"}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}