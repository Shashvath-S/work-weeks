import OptionCard from "../components/OptionCard";

export default function Home () {
    return (
        <>
        <div>
          <div style={{backgroundColor: "rgb(246, 250, 240)", width: "100%", height: "5vh"}}>
            hi
            <hr />
          </div>
          <div style={{padding: "20px", width: "100%", height: "95vh"}}>
            <div className="place-content-center" style={{borderRadius: "20px", backgroundColor: "rgb(185, 187, 190)", width: "100%", height: "20vh", marginBottom: 30}}>
                <h1 style={{fontSize: "200%", color: "white", fontWeight:"bold", marginLeft: 20}}>Work Weeks</h1>
            </div>
            <OptionCard title="Employees" />
            <OptionCard title="Inventory" />
            <OptionCard title="Timesheets" />
          </div>
        </div>
        </>
    )
}