export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center h-96">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Work Weeks</h1>
      </div>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">

    <div className="bg-white shadow-lg rounded-lg p-4 group">
      <h2 className="text-xl font-bold">Employees</h2>
      <p className="text-gray-600 group-hover:hidden">Organize your list of employees and their personal information, like their name, contact information, and position.</p>
      <div className="hidden group-hover:flex space-x-2 mt-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <a href="/admin/employees">Create</a>
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        <a href="/admin/employees">View</a>
        </button>
      </div>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-4 group">
      <h2 className="text-xl font-bold">Wages</h2>
      <p className="text-gray-600 group-hover:hidden">Calculate and manipulate wage/pay for added employees based on their time worked.</p>
      <div className="hidden group-hover:flex space-x-2 mt-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        <a href="/admin/wages">Create</a>
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        <a href="/admin/wages">View</a>
        </button>
      </div>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-4 group">
      <h2 className="text-xl font-bold">Timesheets</h2>
      <p className="text-gray-600 group-hover:hidden">Generate a sheet for summarizing hours worked by each of your employees for a pay period.</p>
      <div className="hidden group-hover:flex space-x-2 mt-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        <a href="/admin/timesheets">Create</a>
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        <a href="/admin/timesheets">View</a>
        </button>
      </div>
    </div>

  </div>
    </div>
  );
}
