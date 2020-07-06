const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const shelterRouter = require("./routes/shelters");
const userRouter = require("./routes/user");
const cookieParser = require("cookie-parser");

const app = express();
const port = 4000;

app.use(cookieParser());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(
  cors({
    origin: [`*`],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use("/shelter", shelterRouter);
app.use("/user", userRouter);

app.set("port", port);
app.listen(app.get("port"), () => {
  console.log(`app is litening in PORT ${app.get("port")}`);
});
