"use client";

import PersonIcon from "@mui/icons-material/Person";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import EventNoteIcon from "@mui/icons-material/EventNote";

export default function BootstrapOptionCard({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <div className="container-fluid">
    <div className="card" style={{ width: "100%", padding: 25, height: "72vh" }}>
      <div className="mx-auto align-middle">
        {title == "Employees" ? (
          <PersonIcon className="card-image-top" style={{ fontSize: 96 }} />
        ) : title == "Inventory" ? (
          <Inventory2Icon className="card-image-top" style={{ fontSize: 96 }} />
        ) : (
          <EventNoteIcon className="card-image-top" style={{ fontSize: 96 }} />
        )}
      </div>
      <div className="card-body mx-auto">
        <h5 style={{fontSize: "200%"}} className="card-title">{title}</h5>
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
  );
}
