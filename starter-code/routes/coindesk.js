"use strict";

var express = require("express");
var axios = require("axios");
var router = express.Router();

const URL = "http://api.coindesk.com/v1/bpi/historical/close.json";

// GET COINDESK DATA
router.get("/", (req, res, next) => {
  axios
    .get(URL)
    .then(response => {
      console.log(response);
      const data = {
        characters: response.data
      };
      res.render("data/dates", data);
    })
    .catch(error => console.log(error));
});

module.exports = router;
