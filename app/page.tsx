import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log(session)

  // if (session) {
  //   if (session.user.role == "employee") {
  //       redirect("/employee/home");
  //   } else if (session.user.role == "admin") {
  //       redirect("/admin/home");
  //   }
  // }

  return (
    <div
      className={
        "bg-center justify-center justify-items-center bg-[color()] text-center grid grid-flow-row auto-rows-max grow min-w-full items-center place-content-center h-dvh bg-cover"
      }
    >
      <h1 className={"text-4xl mt-4 mb-4"}>
        Welcome to WorkWeeks!
      </h1>
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
