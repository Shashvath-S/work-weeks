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
      {title != "Work Weeks"&& <HomeButton />}
      <h1
        style={{
          fontSize: "200%",
          color: "white",
          fontWeight: "bold",
          marginLeft: 20,
        }}
      >
        {title}
      </h1>
      {link != "" && <a style={{borderRadius: "15px"}} className="btn btn-primary absolute bottom-5" href={link}>{link.charAt(0).toUpperCase() + link.substring(1)}</a>}
      <SignOutButton />
    </div>
  );
}
