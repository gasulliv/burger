var express = require("express");

var router = express.Router();

//Import the model burger .js

var burger = require ("../models/burger.js");

//rendering the current table
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//posting new burger
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

//updating the system
  burger.update({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;