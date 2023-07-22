import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import router from "./routes/route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("static"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/", router);

app.listen(PORT, () =>
  console.log(`server started on http://localhost:${PORT}`)
);
