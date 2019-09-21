var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json())

app.post("/file", (req, res, next) => {
  console.log(req.body);
  res.send({challenge: req.body.challenge});
});
app.listen(port, () => {
  console.log("Server running on port " + port);
});