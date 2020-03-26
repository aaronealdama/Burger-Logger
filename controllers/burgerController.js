const express = require("express");

const router = express.Router();

// Importing the model
const burger = require("../models/burger.js");

// Routes
router.get("/", function(req, res) {
  burger.all(function(data) {
    const hbsObj = {
      burgers: data
    };
    console.log(hbsObj);
    res.render("index", hbsObj);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(["burger_name"], [req.body.name], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  const condition = `id = ${req.params.id}`;
  console.log("condition", condition);

  burger.update(
    {
      devoured: true
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// Exporting router
module.exports = router;
