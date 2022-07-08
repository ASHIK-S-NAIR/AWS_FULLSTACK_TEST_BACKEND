const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Message = require("./model/message");

const port = 1337;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/aws_test_fullstack")
  .then(() => console.log("DB connected"))
  .catch(() => console.log("DB connection error"));

app.get("/", (req, res) => {
  res.json({
    message: "Hello backend",
  });
});

app.post("/message", async (req, res) => {
  try {
    const message = await Message.create({
      name: req.body.name,
      message: req.body.message,
    });

    return res.json({ message: "message submition successfull" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

app.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find({});
    return res.json(messages);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

app.listen(port, () => console.log(`Server is running at : ${port}`));
