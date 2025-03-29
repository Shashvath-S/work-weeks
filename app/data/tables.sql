CREATE TABLE employees
(
    id               INTEGER PRIMARY KEY AUTOINCREMENT,
    email            TEXT UNIQUE,
    role             TEXT,
    password         TEXT,
    name             TEXT,
    latest_clock_in  DATE,
    latest_clock_out DATE,
    total_hours      INTEGER
);

CREATE TABLE admin
(
    id       INTEGER PRIMARY KEY AUTOINCREMENT,
    email    TEXT UNIQUE,
    password TEXT,
    name     TEXT
);