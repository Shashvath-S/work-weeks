import logo from "@/public/logo.png";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="bg-gradient-to-t from-green-600 to-blue-950 vh-100 container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="p-5 rounded-xl container-fluid d-flex flex-column justify-content-center align-items-center vh-75 w-1/2 bg-white">
        <div className="position-relative mb-5">
          <div
            className="rounded-circle bg-white shadow-lg d-flex justify-content-center align-items-center"
            style={{
              width: "15vw",
              height: "15vw",
              maxWidth: "375px",
              maxHeight: "375px",
              border: "1px solid #dee2e6",
            }}
          >
            <Image
              priority
              src={logo}
              alt="Work Weeks Logo"
            />
          </div>
        </div>
        <div className="container text-sm">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col text-center">
              <a
                href="/admin/login"
                className="btn btn-success btn-lg w-100 py-3 shadow bg-green-600"
              >
                Admin Login
              </a>
            </div>
            <div className="col text-center">
              <a
                href="/admin/register"
                className="btn btn-success btn-lg w-100 py-3 shadow bg-green-600"
              >
                Admin Register
              </a>
            </div>
            <div className="col text-center">
              <a
                href="/employee/login"
                className="btn btn-primary btn-lg w-100 py-3 shadow bg-green-600"
              >
                Returning Employee Login
              </a>
            </div>
            <div className="col text-center">
              <a
                href="/employee/register"
                className="btn btn-primary btn-lg w-100 py-3 shadow bg-green-600"
              >
                New Employee Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
