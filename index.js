const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const postRouter = require("./api/posts");

require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());
app.use("/api", postRouter);

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true },
  () => console.log("Connected to DB")
);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
