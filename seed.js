// Import the Database class from "better-sqlite3"
import Database from "better-sqlite3";

// Create a new instance of the Database class with the specified file name
const db = new Database("database.db");

// Use exec to execute a SQL statement to create a table named "players"
db.exec(`
  CREATE TABLE players ( name TEXT, number INT )
`);

db.exec(`INSERT INTO players (name, number) VALUES ('Mullen', 10)`);

// Use exec to insert a record into the "players" table
db.prepare("INSERT INTO players (name, number) VALUES (?, ?) ").run("Reed", 3);
