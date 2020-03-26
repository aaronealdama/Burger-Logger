const connection = require("./connection.js");

// Functions
function printQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(obj) {
  let arr = [];

  for (let key in obj) {
    let value = obj[key];

    if (Object.hasOwnProperty.call(obj, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `'${value}'`;
      }

      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

// ORM
const orm = {
  selectAll: function(table, cb) {
    const queryString = `SELECT * FROM ${table}`;
    connection.query(queryString, function(err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(
      vals.length
    )})`;
    console.log(queryString);
    connection.query(queryString, vals, function(err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne: function(table, cols, condition, cb) {
    const queryString = `UPDATE ${table} SET ${objToSql(
      cols
    )} WHERE ${condition}`;
    console.log(queryString);
    connection.query(queryString, function(err, res) {
      if (err) throw err;
      cb(res);
    });
  }
};

// Exporting the ORM
module.exports = orm;
