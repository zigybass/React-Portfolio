const express = require("express")

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/test", (req, res) => {
  res.set('Content-Type', 'application/json');
  res.json({
    message: "Testing route"
  })
})

app.listen(PORT, function () {
    console.log("App listening on Port: " + PORT);
  });