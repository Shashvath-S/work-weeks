"use client";

import {signOut} from 'next-auth/react';
import React, {useState} from 'react';

export default function EmployeeClock({email}: { email: string }) {

    async function postSubmit() {
        setSubmitted(true)
        const lci = new Date(clockInTime)
        const lco = new Date(clockOutTime)
        const timesheetPost = await fetch("../../api/employees/timesheet", {
            method: "POST",
            body: JSON.stringify({
                clockInOutSubmit: "submit",
                time: (lco.getTime() - lci.getTime())/1000,
                email: email,
            }),
        })
        console.log(timesheetPost)
    }

    async function postClockIn() {
        console.log("post clockIn")
        setClockInTime(new Date().toISOString())
        const lci = new Date(clockInTime)
        const clockInPost = await fetch("../../api/employees/timesheet", {
            method: "POST",
            body: JSON.stringify({
                clockInOutSubmit: "clockIn",
                time: lci,
                email: email,
            })
        })
        console.log(clockInPost)
    }

    async function postClockOut() {
        setClockOutTime(new Date().toISOString())
        const lco = new Date(clockOutTime)
        const clockOutPost = await fetch("../../api/employees/timesheet", {
            method: "POST",
            body: JSON.stringify({
                clockInOutSubmit: "clockOut",
                time: lco,
                email: email,
            })
        })
        console.log(clockOutPost)
    }

    const [clockInTime, setClockInTime] = useState("");
    const [clockOutTime, setClockOutTime] = useState("");
    const [submitted, setSubmitted] = useState(false);

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

                                onClick={() => postClockIn}
                            >
                                {/*disabled={clockInTime != ""}*/}
                                Clock In
                            </button>
                        </div>
                        <div className="bg-green-500 text-white p-4 w-1/2 text-center rounded-lg">
                            <button
                                className="h-full w-full"
                                onClick={() => postClockOut}
                            >
                                {/*disabled={clockOutTime != "" || clockInTime == ""}*/}
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

                            className="h-full w-full"
                        >
                            {/*disabled={submitted}*/}
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