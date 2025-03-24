export default function Home() {
  return (
    <div className={"bg-center justify-center justify-items-center bg-[color()] text-center grid grid-flow-row auto-rows-max grow min-w-full items-center place-content-center h-dvh bg-cover"}>
        <h1 className={"text-4xl mt-4 mb-4"}>Select an Authentication for WorkWeeks</h1>
        <div className={"border-gray-500 rounded-lg max-w-5xl"}>
            <a href="/admin/login" className={"btn btn-primary ml-2 mr-2 p-2"}>Admin Login</a>
            <a href="/admin/register" className={"btn btn-primary ml-2 mr-2 p-2"}>Admin Register</a>
            <a href="/employee/register" className={"btn btn-primary ml-2 mr-2 p-2"}>Employee Register</a>
            <a href="/employee/register" className={"btn btn-primary ml-2 mr-2 p-2"}>Employee Register</a>
        </div>
    </div>
);
}
