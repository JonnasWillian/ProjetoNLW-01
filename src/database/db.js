// importa a depedencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar objeto de banco de dados
const db = new sqlite3.databse("./src/databse/database.db")