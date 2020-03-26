const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(cols, condition, cb) {
    orm.updateOne("burgers", cols, condition, function(res) {
      cb(res);
    });
  }
};

// Export database functions
module.exports = burger;
