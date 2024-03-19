import dataase from "better-sqlite3";
const db = new Database("database.de");

//star means all  .all creates
const players = db.prepare("SELECT * FROM players").all();

console.log(players);
