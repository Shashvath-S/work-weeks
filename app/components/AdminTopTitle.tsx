import SignOutButton from "./SignOutButton";

export default function AdminTopTitle({ title, link } : { title: string, link: string }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        borderRadius: "20px",
        backgroundColor: "rgb(185, 187, 190)",
        width: "100%",
        height: "20vh",
        marginBottom: 30,
      }}
    >
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
      {link != "" && <a className="btn btn-primary absolute bottom-5" href={link}>{link.charAt(0).toUpperCase() + link.substring(1)}</a>}
      <SignOutButton />
    </div>
  );
}
