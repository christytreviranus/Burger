//Imports
const express = require('express');
const model = require('../models/burger.js');
const router = express.Router();


/////////////// NEED TO EDIT BELOW CODE //////////////////////////////////

//Redirect user to /burgers
router.get("/", function(req, res) {
    res.redirect("burgers");
  });

//Burgers GET route
router.get("/burgers", function(req, res) {
    burgers.selectAll(function(data) {
      var hbsObject = {
        burgers : data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
//Burgers POST route 
router.post("/burgers/create", function(req, res) {
    burgers.insertOne(["burger_name"], [req.body.burger_name], function(data) {
      res.redirect("/burgers");
    });
  });
//Burgers PUT route
router.put("/burgers/update/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);
    burgers.updateOne(
      {
        "devoured": req.body.devoured
      },
      condition,
      function(data) {
        res.redirect("/burgers");
      });
  });
  
  // Export routes for server.js to use
module.exports = router;