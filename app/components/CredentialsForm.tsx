'use client';

import {FormEvent, useState} from "react";
import {signIn, useSession} from "next-auth/react";
import {redirect} from "next/navigation";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function CredentialsForm({isLoginForm, isAdmin, backendSession}: {
    isLoginForm: boolean,
    isAdmin: boolean,
    backendSession: any
}) {
    const [error, setError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const {data: clientSession} = useSession();

    const session = clientSession || backendSession;

    if (session) {
        redirect(`home`)
    }

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const email = formData.get("email");
        const password = formData.get("password");
        const res = await signIn("credentials", {email, password, redirect: false});
        if (res && !res.ok) {
            setError(res.error as string)
        } else {
            setError('')
        }
    }

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const formData = new FormData(e.currentTarget)
        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const name = firstName.trim() + " " + lastName.trim();
        const email = formData.get("email");
        const password = formData.get("password");
        const checkPassword = formData.get("checkPassword");

        if (password != checkPassword) {
            setPasswordError("Passwords do not match")
        } else {
            const response = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify({name, email, password, isAdmin})
            })
    
            if (response.ok) {
                await signIn("credentials", {
                    email, password, redirect: false
                })
            }
        }
    }

    return (
        <div className="container-fluid">
        <div className="row">
          <div
            className={`col w-100 vh-100 d-flex flex-column align-items-center justify-content-center bg-gradient-to-r from-green-600 to-blue-950`}
          >
            <Image
              priority
              style={{ width: "90%", height: "auto" }}
              src={logo}
              alt="Work Weeks Logo"
            />
          </div>
          <div
            className={`col w-100 vh-100 d-flex flex-column align-items-center justify-content-center`}
          >
            <h3 style={{fontSize: "150%"}}>
              {!isLoginForm ? "Welcome to Work Weeks!" : "Welcome Back!"}
            </h3>
            <div className="customFormContainer">
              <form
                className="customFormFormat"
                onSubmit={!isLoginForm ? handleRegister : handleLogin}
              >
                {!isLoginForm && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="firstNameInput" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter First Name"
                        className="form-control"
                        id="firstNameInput"
                        name="firstName"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lastNameInput" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Last Name"
                        className="form-control"
                        id="lastNameInput"
                        name="lastName"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                  </>
                )}
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
                  />
                  {error != "" && (
                    <div
                      style={{ color: "red" }}
                      id="emailHelp"
                      className="form-text text-center"
                    >
                      {!isLoginForm
                        ? "Account already exists. Please Login"
                        : "Account does not exist. Please Register"}
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
                  />
                </div>
                {!isLoginForm && (
                    <div className="mb-3">
                    <label htmlFor="checkPasswordInput" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="form-control"
                      id="checkPasswordInput"
                      name="checkPassword"
                      required
                    />
                      {(passwordError != "" && !isLoginForm) && (
                      <div
                        style={{ color: "red" }}
                        id="emailHelp"
                        className="form-text text-center"
                      >
                          Passwords do not match
                      </div>
                    )}
                  </div>
                )}
                {!isLoginForm ? (
                  <>
                    <div id="loginHelp" className="form-text">
                      Already have an account? <a style={{color: "blue", textDecoration: "underline"}} href="login">Login</a>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary formBtn"
                    >
                      Register
                    </button>
                  </>
                ) : (
                  <>
                    <div id="registerHelp" className="form-text">
                      Don't have an account? <a style={{color: "blue", textDecoration: "underline"}} href="register">Register</a>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Login
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}
