"use client";

import React, { useState } from "react";
import {Form, Input, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@heroui/react";

export default function page() {
  const [action, setAction] = useState("");
  const [position, setPosition] = useState("");

  return (
    <div className="flex justify-center items-center h-screen" style={{color: "black"}}>
    <Form
      className="w-full max-w-xs flex flex-col gap-4"
      validationBehavior="native"
      onReset={() => setAction("reset")}
      onSubmit={(e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));

        setAction(`submit ${JSON.stringify(data)}`);
      }}
    >
      <Input
        isRequired
        errorMessage="Please enter a valid first name"
        label="Employee First Name"
        labelPlacement="outside"
        name="first name"
        placeholder="Enter Employee's First Name"
        type="text"
      />

      <Input
        isRequired
        errorMessage="Please enter a valid last name"
        label="Employee Last Name"
        labelPlacement="outside"
        name="last name"
        placeholder="Enter Employee's Last Name"
        type="text"
      />

    <p>Employee Position</p>
    <Dropdown>
      <DropdownTrigger>
        <Button style={{width: "100%"}} variant="bordered">{position == "" ? "Positions" : position}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" selectionMode="single" onSelectionChange={(selectedPosition) => {
        if (selectedPosition && typeof selectedPosition === "object") {
          setPosition(String(Array.from(selectedPosition)[0]))
        }
      }}>
        <DropdownItem key="Assistant">Assistant</DropdownItem>
        <DropdownItem key="Customer Service">Customer Service</DropdownItem>
        <DropdownItem key="Human Resources">Human Resources</DropdownItem>
        <DropdownItem key="Sales Representative">Sales Representative</DropdownItem>
        <DropdownItem key="IT Support">IT Support</DropdownItem>
      </DropdownMenu>
    </Dropdown>
      <div className="flex gap-2">
        <Button color="primary" type="submit">
          Submit
        </Button>
        <Button type="reset" variant="flat">
          Reset
        </Button>
      </div>
    </Form>
    </div>
  );
}

