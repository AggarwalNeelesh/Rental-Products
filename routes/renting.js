const express = require("express");
const router = express.Router();
const Rental = require("../model/Rental");

/////////// Route 1 /////////////////////////////
router.post("/rent",[],async (req, res) => {
    // If there are errors , return BAD request
    try {
      console.log("Got here");
      // creating user
      const data = await Rental.create({
        prname:req.body.prname,
        price:req.body.price,
        orderid:req.body.orderid,
        phno:req.body.phno,
        address:req.body.address,
        name: req.body.name,
        email: req.body.email
      });
      const saved = await data.save();
        res.json(saved);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error");
    }
  }
);

module.exports = router;
