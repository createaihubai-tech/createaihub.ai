app.use(express.static("public"));
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CreateAIHub.ai – Website under construction");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
