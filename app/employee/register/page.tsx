"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState({ isError: false, errorMessage: "" });

  const { data: session } = useSession();

  if (session) {
    redirect(`home`);
  }

  const handleEmployeeRegisterPassword = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (checkPassword != password) {
      setError({ isError: true, errorMessage: "Passwords do not match" });
    }

    const res = await fetch("api/employees/fetchOtp", {
      method: "POST",
      body: JSON.stringify({ email }),
    })
    if (res.ok) {
      const { myOTP } = await res.json();
      if (myOTP === otp) {
        const response = await fetch("/api/employees/register", {
          method: "PUT",
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          await signIn("credentials", { email, password, redirect: false });
        } else {
          const res = await response.json();
          setError({ isError: true, errorMessage: res.message });
        }
      } else {
        setError({
          isError: true, errorMessage: "OTP is incorrect",
        })
      }
    } else {
      const err = await res.json();
      setError({ isError: true, errorMessage: err.message });
    }
  };

  return (
    <div className="container-fluid">
        <div className="row">
          <div
            className={`col w-100 vh-100 d-flex flex-column align-items-center justify-content-center`}
          >
            <Image
              priority
              style={{ width: "90%", height: "auto" }}
              src={logo}
              alt="Whole Health Logo"
              onClick={() => redirect("/")}
            />
          </div>
          <div
            className={`col w-100 vh-100 d-flex flex-column align-items-center justify-content-center`}
          >
            <h3 style={{fontSize: "150%"}}>
              Welcome to Work Weeks!
            </h3>
            <div className="customFormContainer">
              <form
                className="customFormFormat"
                onSubmit={handleEmployeeRegisterPassword}
              >
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="form-control"
                    id="emailInput"
                    name="email"
                    aria-describedby="emailHelp"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error.isError && (
                    <div
                      style={{ color: "red" }}
                      id="emailHelp"
                      className="form-text text-center"
                    >
                      Account does not exist. Please contact admin.
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="form-control"
                    id="passwordInput"
                    name="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                    <div className="mb-3">
                    <label htmlFor="checkPasswordInput" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="form-control"
                      id="checkPasswordInput"
                      name="checkPassword"
                      required
                      onChange={(e) => setCheckPassword(e.target.value)}
                    />
                      {(error.isError && error.errorMessage.split(" ")[0] == "Passwords") && (
                      <div
                        style={{ color: "red" }}
                        id="emailHelp"
                        className="form-text text-center"
                      >
                          Passwords do not match
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                  <label htmlFor="otpInput" className="form-label">
                    Enter One Time Passcode (OTP):
                  </label>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="form-control"
                    id="otpInput"
                    name="password"
                    required
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                    <div id="loginHelp" className="form-text">
                      Already have an account? <a style={{color: "blue", textDecoration: "underline"}} href="login">Login</a>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary formBtn"
                    >
                      Register
                    </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
