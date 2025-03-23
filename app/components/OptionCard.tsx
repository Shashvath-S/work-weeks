export default function OptionCard({ title }: { title: string }) {
  return (
    <div style={{marginBottom: "20px"}}>
    <div
      className="flex flex-row"
      style={{
        borderRadius: "20px",
        width: "100%",
        height: "15vh",
        padding: "10px 0 10px 10px",
      }}
    >
      <div
        style={{
          width: "10%",
          height: "100%",
          backgroundColor: "rgb(185, 187, 190)",
          borderRadius: 20,
        }}
      ></div>
      <div className="flex flex-col" style={{width: "10%",}}>
        <h1 style={{ fontSize: "200%", fontWeight: "bold", marginLeft: 20 }}>
          {title}
        </h1>
        <div
          className="flex flex-row place-content-center mt-auto"
          style={{ marginBottom: 20 }}
        >
          <button style={{borderColor: "black"}} type="button" className="btn">
            Create
          </button>
          <button
            style={{ borderColor: "black" }}
            type="button"
            className="btn"
          >
            View
          </button>
        </div>
      </div>
    </div>
    <hr style={{height: "5px", color: "black"}} />
    </div>
  );
}
