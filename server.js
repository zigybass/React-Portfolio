const express = require("express")

const app = express();

const PORT = process.env.PORT || 5000;



app.listen(PORT, function () {
    console.log("App listening on Port: " + PORT);
  });