import express from "express";
import apiRouter from "./routes/api.js";

const app = express();
app.set("view engine", "ejs");
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("SALUTATIONS");
});

app.use("/api", apiRouter);

app.get("/hello", (req, res) => {
  res.send("I am learning how to create a website.");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.get("/users/:userId/posts/:postId", (req, res) => {
  const { userId, postId } = req.params;
  res.send(`User ${userId}, post ${postId}`);
});

app.get("/search", (req, res) => {
  const term = req.query.term || "nothing";
  const limit = parseInt(req.query.limit) || 5;
  res.send(`Searching for "${term}", showing ${limit} results.`);
});

app.get("/count", (req, res) => {
  const from = req.query.from || 1;
  const to = req.query.to || 10;
  res.send(`Counting from ${from}, to ${to}.`);
});

app.use((req, res) => {
  res.status(404).send("Page not found.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
