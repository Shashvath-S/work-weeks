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
      <div
        className="flex items-center justify-center shadow-lg border-lg"
        style={{ width: "100%", height: "72vh" }}
      >
        <div className="grid-cols-1 text-center">
          <h1 style={{ fontSize: "300%" }}>{title}</h1>
          <div>
            {title == "Employees" ? (
              <PersonIcon className="m-6" style={{ fontSize: "9rem" }} />
            ) : title == "Inventory" ? (
              <Inventory2Icon className="m-6" style={{ fontSize: "9rem" }} />
            ) : (
              <EventNoteIcon className="m-6" style={{ fontSize: "9rem" }} />
            )}
          </div>
          <div>
            {title === "Timesheets" ? (
              <a
                type="button"
                className="btn bg-green-600 text-white"
                href={`${link}/view`}
              >
                View
              </a>
            ) : (
              <>
                <a
                  href={`${link}/create`}
                  type="button"
                  className="btn bg-green-600 hover:bg-green-700 text-white"
                >
                  Create
                </a>
                <a
                  style={{ marginLeft: 8 }}
                  type="button"
                  className="btn bg-green-600 hover:bg-green-700 text-white"
                  href={`${link}/view`}
                >
                  View
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
