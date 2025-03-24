import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "app", "data", "work_weeks.db");
const tableCreationQueriesPath = path.join(
  process.cwd(),
  "app",
  "data",
  "tables.sql"
);

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

const checkIfTablesCreated = db
  .prepare("SELECT name FROM sqlite_master WHERE type='table'")
  .all();

if (checkIfTablesCreated.length == 0) {
  const tableCreationQueries = fs.readFileSync(
    tableCreationQueriesPath,
    "utf8"
  );
  db.exec(tableCreationQueries)
}

export default db;
