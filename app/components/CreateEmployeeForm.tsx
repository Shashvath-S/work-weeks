"use client";

import {FormEvent, useState} from "react";

export default function CreateEmployeeForm({id}: { id: number }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [otp, setOtp] = useState("");

    const createEmployee = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const myOtp = (Math.random() * 1000000 - 1) as unknown as string;
        setOtp(myOtp);

        console.log(name, email, role);
        await fetch("/api/employees/create", {
            method: "POST",
            body: JSON.stringify({name, email, role, id, myOtp}),
        });
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="card shadow-lg border-0 " style={{width: "500px"}}>
                <div className="card-header bg-primary text-white text-center py-3">
                    <h2>Create New Employee</h2>
                </div>
                <div className="card-body p-4">
                    <form onSubmit={createEmployee}>
                        <div className="mb-3">
                            <label htmlFor="nameInput" className="form-label fw-bold">Employee Name</label>
                            <input
                                id="nameInput"
                                aria-label="nameInput"
                                type="text"
                                value={name}
                                className="form-control"
                                onChange={(event) => setName(event.target.value)}
                                placeholder="Enter employee name"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="emailInput" className="form-label fw-bold">Employee Email</label>
                            <input
                                id="emailInput"
                                aria-label="userNameInput"
                                value={email}
                                type="email"
                                className="form-control"
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="Enter email address"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-bold">Employee Position</label>
                            <div className="dropdown w-100">
                                <button
                                    className="btn btn-outline-secondary dropdown-toggle w-100 d-flex justify-content-between align-items-center"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span>{role == "" ? "Select Position" : role}</span>
                                    <i className="bi bi-chevron-down"></i>
                                </button>
                                <ul className="dropdown-menu w-100">
                                    <li>
                                        <button className="dropdown-item" type="button"
                                                onClick={() => setRole("Employee Type 1")}>
                                            Employee Type 1
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" type="button"
                                                onClick={() => setRole("Employee Type 2")}>
                                            Employee Type 2
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" type="button"
                                                onClick={() => setRole("Employee Type 3")}>
                                            Employee Type 3
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="d-grid gap-2">
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg"
                                disabled={!name || !email || !role}
                            >
                                Create Employee
                            </button>
                        </div>

                        {otp && (
                            <div className="alert alert-success mt-3 text-center" role="alert">
                                Your OTP is <strong>{otp}</strong>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}