var express = require("express");
const axios = require("axios");
var router = express.Router();

/* GET users listing. */
router.post("/register", function (req, res, next) {
  console.log(req.body);
  axios
    .post("http://localhost:5500/admin/register", req.body)
    .then((result) => {
      res.send(result.data);
    });
});

module.exports = router;
