var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json())

app.post("/file", (req, res, next) => {
  console.log(req.body);
  res.send({challenge: req.body.challenge});
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});