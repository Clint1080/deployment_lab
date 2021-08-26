const express = require('express')
const path = require('path')

const app = express()

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/index.html"))
})

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/main.js"));
});

app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/main.css"));
});

// app.use("/client/assets", express.static(path.join(__dirname, "../public")));

const port = process.env.PORT || 4005


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})