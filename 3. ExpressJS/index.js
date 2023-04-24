const express = require("express");
const bodyParser = require("body-parser");
const mainRouts = require("./UserRouter");

const app = express();
const PORT = 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1",mainRouts)

app.listen(PORT, () => {
  console.log(`Server is working on PORT: ${PORT}`);
});
