//Imports
const express = require('express');
const burgers = require('../models/burger.js');
const router = express.Router();


//Redirect user to /burgers
router.get("/", function(req, res) {
    res.redirect("burgers");
  });

//Burgers GET route
router.get("/burgers", function(req, res) {
    burgers.selectAll(function(data) {
      let hbsObject = {
        burgers: data
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
        devoured: req.body.devoured
      },
      condition,
      function(result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
  });

  //Burgers DELETE route
  router.delete("/burgers/:id", function(req, res){
    let condition = "id = " + req.params.id;
    burgers.delete(condition, function(result){
      if (result.affectedRows == 0){
        return res.status(404).end();
      }else {
        res.status(200).end();
      }
    });
  });
  
  // Export routes for server.js to use
module.exports = router;