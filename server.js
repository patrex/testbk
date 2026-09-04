const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Temporary data
const users = [
  {
    _id: "1",
    username: "John",
  },
  {
    _id: "2",
    username: "Mary",
  },
  {
    _id: "3",
    username: "Segun",
  },
];

// Routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/api/v1/users", (req, res) => {
  res.status(200).json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});