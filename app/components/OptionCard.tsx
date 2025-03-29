export default function OptionCard({title, link}: { title: string, link: string }) {
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
                        width: "11%",
                        height: "100%",
                        backgroundColor: "rgb(185, 187, 190)",
                        borderRadius: 20,
                    }}
                ></div>
                <div className="flex flex-col" style={{width: "12%"}}>
                    <h1 style={{fontSize: "200%", fontWeight: "bold", marginLeft: 20}}>
                        {title}
                    </h1>
                    <div
                        className="flex flex-row place-content-center mt-auto"
                        style={{marginBottom: 20}}
                    >
                        <a
                            style={{borderColor: "black"}}
                            href="employees/create"
                            type="button"
                            className="btn"
                        >
                            Create
                        </a>
                        <a
                            style={{borderColor: "black", marginLeft: 8}}
                            type="button"
                            className="btn"
                            href={link}
                        >
                            View
                        </a>
                    </div>
                </div>
            </div>
            <hr style={{height: "5px", color: "black"}}/>
        </div>
    );
}
