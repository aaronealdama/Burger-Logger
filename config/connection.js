const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Acegunner145",
  database: "burgers_db"
});

// Connection being made

connection.connect(function(err) {
  if (err) {
    console.error(`Error connecting: ${connection.threadId}`);
    return;
  }
  console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;

module.exports = {
  HOST: "us-cdbr-iron-east-02.cleardb.net",
  USER: "b7e2437887xxxa",
  PASSWORD: "0200xxx6",
  DB: "heroku_7643ec736354xxx"
};
