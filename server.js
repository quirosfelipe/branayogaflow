const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// const path = require("path");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

require("dotenv").config();
// bring routes
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const tagRoutes = require("./routes/tag");
const formRoutes = require("./routes/form");

// app
// const app = express();

// routes middleware
app.prepare().then(() => {
  const server = express();
  //db
  mongoose // atlas database set up
    .connect(process.env.MONGODB_URI || process.env.DATABASE, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected"))
    .catch((err) => {
      console.log(err);
    });

  // middlewares
  server.use(morgan("dev"));
  server.use(bodyParser.json());
  server.use(cookieParser());
  // cors

  if (process.env.NODE_ENV === "production") {
    server.use(cors({ origin: `${process.env.CLIENT_URL}` }));
  }

  server.use("/api", blogRoutes);
  server.use("/api", authRoutes);
  server.use("/api", userRoutes);
  server.use("/api", categoryRoutes);
  server.use("/api", tagRoutes);
  server.use("/api", formRoutes);

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // port
  const port = process.env.PORT || 8000;

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
