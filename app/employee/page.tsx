"use client";

import React, { ChangeEvent, useState } from 'react';

export default function page () {

    const [clockInTime, setClockInTime] = useState("");
    const [clockOutTime, setClockOutTime] = useState("");

    const setClockInTimeValue = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setClockInTime(event.target.value);
    }

    const setClockOutTimeValue = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setClockOutTime(event.target.value);
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Employee worked from ", clockInTime, "to", clockOutTime)
    }


    return (
        <div style={{margin:"10px"}}>
            <div className='grid grid-cols-5 gap-4'>
                <h1>Monday</h1>
                <form defaultValue="12:00">
                    <div className='grid grid-rows-2 gap-1'>
                        <div>
                            <label>Select Clock-In Time:</label>
                            <div>
                                <input onChange={setClockInTimeValue} type="time" id="time"  min="09:00" max="18:00" value={clockInTime} required />
                            </div>
                        </div>
                        <div>
                            <label>Select Clock-Out Time:</label>
                            <div>
                                <input onChange={setClockOutTimeValue} type="time" id="time"  min="09:00" max="18:00" value={clockOutTime} required />
                            </div>
                        </div>
                    </div>
                </form>
                <h1>Tuesday</h1>
                <form defaultValue="12:00">
                    <div className='grid grid-rows-2 gap-1'>
                        <div>
                            <label>Select Clock-In Time:</label>
                            <div>
                                <input onChange={setClockInTimeValue} type="time" id="time"  min="09:00" max="18:00" value={clockInTime} required />
                            </div>
                        </div>
                        <div>
                            <label>Select Clock-Out Time:</label>
                            <div>
                                <input onChange={setClockOutTimeValue} type="time" id="time"  min="09:00" max="18:00" value={clockOutTime} required />
                            </div>
                        </div>
                    </div>
                </form>
                <h1>Wednesday</h1>
                <form defaultValue="12:00">
                    <div className='grid grid-rows-2 gap-1'>
                        <div>
                            <label>Select Clock-In Time:</label>
                            <div>
                                <input onChange={setClockInTimeValue} type="time" id="time"  min="09:00" max="18:00" value={clockInTime} required />
                            </div>
                        </div>
                        <div>
                            <label>Select Clock-Out Time:</label>
                            <div>
                                <input onChange={setClockOutTimeValue} type="time" id="time"  min="09:00" max="18:00" value={clockOutTime} required />
                            </div>
                        </div>
                    </div>
                </form>
                <h1>Thursday</h1>
                <form defaultValue="12:00">
                    <div className='grid grid-rows-2 gap-1'>
                        <div>
                            <label>Select Clock-In Time:</label>
                            <div>
                                <input onChange={setClockInTimeValue} type="time" id="time"  min="09:00" max="18:00" value={clockInTime} required />
                            </div>
                        </div>
                        <div>
                            <label>Select Clock-Out Time:</label>
                            <div>
                                <input onChange={setClockOutTimeValue} type="time" id="time"  min="09:00" max="18:00" value={clockOutTime} required />
                            </div>
                        </div>
                    </div>
                </form>
                <h1>Friday</h1>
                <form defaultValue="12:00">
                    <div className='grid grid-rows-2 gap-1'>
                        <div>
                            <label>Select Clock-In Time:</label>
                            <div>
                                <input onChange={setClockInTimeValue} type="time" id="time"  min="09:00" max="18:00" value={clockInTime} required />
                            </div>
                        </div>
                        <div>
                            <label>Select Clock-Out Time:</label>
                            <div>
                                <input onChange={setClockOutTimeValue} type="time" id="time"  min="09:00" max="18:00" value={clockOutTime} required />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <button onClick={handleClick}>
                <p>Submit Timesheet</p>
            </button>
        </div>
    )
}