import logo from "@/public/logo.png";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {

  return (
    <div
      className={
        "bg-center justify-center justify-items-center bg-[color()] text-center grid grid-flow-row auto-rows-max grow min-w-full items-center place-content-center h-dvh bg-cover"
      }
    >
      <Image
        style={{ width: "90%", height: "auto" }}
        src={logo}
        alt="Whole Health Logo"
      />
      <div className={"border-gray-500 rounded-lg max-w-5xl"}>
        <a href="/admin/login" className={"btn btn-primary ml-2 mr-2 p-2"}>
          Admin Login
        </a>
        <a href="/admin/register" className={"btn btn-primary ml-2 mr-2 p-2"}>
          Admin Register
        </a>
        <a href="/employee/login" className={"btn btn-primary ml-2 mr-2 p-2"}>
          Returning Employee Login
        </a>
        <a
          href="/employee/register"
          className={"btn btn-primary ml-2 mr-2 p-2"}
        >
          New Employee Register
        </a>
      </div>
    </div>
  );
}
