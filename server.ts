import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  return console.log(`Express is listening at http://localhost:${port}`);
});
