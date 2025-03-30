"use client";

import {signOut} from 'next-auth/react';
import React, {useState} from 'react';

export default function EmployeeClock({email}: { email: string }) {

    async function postTimesheet() {
        const lci = new Date(clockInTime)
        const lco = new Date(clockOutTime)
        if (submitted) {
            const timesheetPost = await fetch("../../api/employees/timesheet", {
                method: "POST",
                body: JSON.stringify({
                    latest_clock_in: lci,
                    latest_clock_out: lco,
                    total: lco.getTime() - lci.getTime(),
                    email: email,
                }),
            })
            console.log(timesheetPost)
        }
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
                                disabled={clockInTime != ""}
                                onClick={() => setClockInTime(new Date().toISOString())}
                            >
                                Clock In
                            </button>
                        </div>
                        <div className="bg-green-500 text-white p-4 w-1/2 text-center rounded-lg">
                            <button
                                className="h-full w-full"
                                disabled={clockOutTime != "" || clockInTime == ""}
                                onClick={() => setClockOutTime(new Date().toISOString())}
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
                            {clockInTime != "" && <p>Clocked In at {clockInTime}</p>}
                        </div>
                        <div
                            className="p-4 w-1/2 text-center rounded-lg"
                            style={{
                                backgroundColor: "#00b69d",
                                height: "50px",
                            }}
                        >
                            {clockOutTime != "" && <p>Clocked Out at {clockOutTime}</p>}
                        </div>
                    </div>
                    <div
                        className="bg-purple-500 text-white rounded-lg"
                        style={{
                            height: "50px",
                        }}
                    >
                        <button
                            disabled={submitted}
                            onClick={() => {
                                setSubmitted(true);
                                postTimesheet()
                            }}
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