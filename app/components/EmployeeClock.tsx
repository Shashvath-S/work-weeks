"use client";

import {signOut} from 'next-auth/react';
import React, {useEffect, useState} from 'react';

export default function EmployeeClock({email}: { email: string }) {
    const [clockInTime, setClockInTime] = useState("");
    const [clockOutTime, setClockOutTime] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const fetchTimesheet = async () => {
            const response = await fetch("../../api/employees/get_timesheet", {
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
                if (fetchedClockInTime > new Date(new Date().getDate()-1)) {
                    setClockInTime(data.clockInTime);
                }
            }

            if (data.clockOutTime) {
                const fetchedClockOutTime = new Date(data.clockOutTime);
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
        const timesheetPost = await fetch("../../api/employees/timesheet", {
            method: "POST",
            body: JSON.stringify({
                clockInOutSubmit: "submit",
                time: (lco.getTime() - lci.getTime())/1000/60/60,
                email: email,
            }),
        })
        console.log(await timesheetPost.json())

    }

    async function postClockIn(time: string) {
        const lci = new Date(time)
        const clockInPost = await fetch("../../api/employees/timesheet", {
            method: "POST",
            body: JSON.stringify({
                clockInOutSubmit: "clockIn",
                time: lci,
                email: email,
            })
        })
        console.log(await clockInPost.json())
    }

    async function postClockOut(time: string) {
        const lco = new Date(time)
        const clockOutPost = await fetch("../../api/employees/timesheet", {
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
        <div className="flex items-center justify-center h-screen" style={{margin: "0 10px 0 10px"}}>
            <div className="w-full">
                <div className="text-center mb-4">
                    <h1 className="text-4xl font-bold">Work Weeks</h1>
                    <button onClick={() => signOut({callbackUrl: "/"})} className="btn btn-primary">Sign Out</button>
                </div>
                <div className="flex flex-col space-y-4 w-full">
                    <div className="flex space-x-4 justify-center">
                        <div className="bg-blue-500 text-white p-4 w-1/2 text-center rounded-lg">
                            <button
                                className="h-full w-full"
                                disabled={clockInTime != ""}
                                onClick={() => {console.log(new Date().toISOString()); setClockInTime(new Date().toISOString()); postClockIn(new Date().toISOString())}}>
                                Clock In
                            </button>
                        </div>
                        <div className="bg-green-500 text-white p-4 w-1/2 text-center rounded-lg">
                            <button
                                className="h-full w-full"
                                disabled={clockOutTime != "" || clockInTime == ""}
                                onClick={() => {setClockOutTime(new Date().toISOString()); postClockOut(new Date().toISOString())}}
                            >
                                Clock Out
                            </button>
                        </div>
                    </div>
                    <div className="flex space-x-4 justify-center">
                        <div
                            className="p-4 w-1/2 text-center rounded-lg"
                            style={{
                                backgroundColor: "#00b69d",
                                height: "50px",
                            }}
                        >
                            {clockInTime != "" && <p>Clocked In at {new Date(clockInTime).toLocaleTimeString()}</p>}
                        </div>
                        <div
                            className="p-4 w-1/2 text-center rounded-lg"
                            style={{
                                backgroundColor: "#00b69d",
                                height: "50px",
                            }}
                        >
                            {clockOutTime != "" && <p>Clocked Out at {new Date(clockOutTime).toLocaleTimeString()}</p>}
                        </div>
                    </div>
                    <div
                        className="bg-purple-500 text-white rounded-lg"
                        style={{
                            height: "50px",
                        }}
                    >
                        <button

                            onClick={() => {
                                postSubmit()
                            }}
                            disabled={submitted}
                            className="h-full w-full"
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