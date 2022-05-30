import bodyParser from "body-parser";
import 'dotenv/config';
import express from "express";

const app = express();
const port = process.env.PORT

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/hook", (req, res) => {
  console.log(req.body);
  res.status(200).end();
});
