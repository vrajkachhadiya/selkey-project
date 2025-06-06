// Task Manager API
// Concepts Covered: Express.js, REST API, CRUD, JSON handling, routing, middleware

const express = require("express");
const app = express();
app.use(express.json());

let tasks = [];
let id = 1;

app.post("/tasks", (req, res) => {
  const { title, description, status } = req.body;
  const task = { id: id++, title, description, status };
  tasks.push(task);
  res.status(201).json(task);
});

app.get("/tasks", (req, res) => res.json(tasks));

app.put("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id == req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  task.status = req.body.status;
  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter((t) => t.id != req.params.id);
  res.json({ message: "Task deleted" });
});
