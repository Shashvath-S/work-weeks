import {SignOutButton, HomeButton} from "./Buttons";


export default function AdminTopTitle({ title, link } : { title: string, link: string }) {
  return (
    <div
      className="relative flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-950"
      style={{
        borderRadius: "20px",
        width: "100%",
        height: "20vh",
        marginBottom: 30,
      }}
    >
      {title != "Work Weeks" && <HomeButton />}
      <h1
        style={{
          fontSize: "325%",
          color: "white",
          fontWeight: "bold",
          marginLeft: 20,
        }}
      >
        {title}
      </h1>

      <SignOutButton />
    </div>
  );
}
