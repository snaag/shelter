const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const port = 4000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(
  cors({
    origin: [`*`],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.set("port", port);
app.listen(app.get("port"), () => {
  console.log(`app is litening in PORT ${app.get("port")}`);
});
