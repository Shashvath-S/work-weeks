CREATE TABLE employees
(
    id               INTEGER PRIMARY KEY AUTOINCREMENT,
    email            TEXT UNIQUE,
    role             TEXT,
    password         TEXT,
    name             TEXT,
    latest_clock_in  DATE,
    latest_clock_out DATE,
    total_hours      INTEGER,
    admin_id INTEGER,
    FOREIGN KEY (admin_id) REFERENCES admin(id) ON DELETE CASCADE
);

CREATE TABLE admin
(
    id       INTEGER PRIMARY KEY AUTOINCREMENT,
    email    TEXT UNIQUE,
    password TEXT,
    name     TEXT
);

CREATE TABLE inventory (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    reorder INTEGER NOT NULL,
    price REAL NOT NULL,
    supplier INTEGER,
    lastupdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);