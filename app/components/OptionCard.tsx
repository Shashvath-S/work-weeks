"use client";

import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import EventNoteIcon from '@mui/icons-material/EventNote';

export default function OptionCard({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <div style={{ marginBottom: "20px" }}>
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {title == "Employees" ? <PersonIcon style={{ fontSize: 96, color: "white" }} /> : title == "Inventory" ? <Inventory2Icon style={{ fontSize: 96, color: "white" }} /> : <EventNoteIcon style={{ fontSize: 96, color: "white" }} /> }
        </div>
        <div className="flex flex-col" style={{ width: "12%" }}>
          <h1 style={{ fontSize: "200%", fontWeight: "bold", marginLeft: 20 }}>
            {title}
          </h1>
          <div
            className="flex flex-row place-content-center mt-auto"
            style={{ marginBottom: 20 }}
          >
            {title === "Timesheets" ? (
              <a
                style={{ borderColor: "black" }}
                type="button"
                className="btn"
                href={`${link}/view`}
              >
                View
              </a>
            ) : (
              <>
                <a
                  style={{ borderColor: "black" }}
                  href={`${link}/create`}
                  type="button"
                  className="btn"
                >
                  Create
                </a>
                <a
                  style={{ borderColor: "black", marginLeft: 8 }}
                  type="button"
                  className="btn"
                  href={`${link}/view`}
                >
                  View
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      <hr style={{ height: "5px", color: "black" }} />
    </div>
  );
}
