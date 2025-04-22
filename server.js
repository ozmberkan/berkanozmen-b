const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const projectRoutes = require("./routes/projectRoutes.js");
const tagRoutes = require("./routes/tagRoutes.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api/projects", projectRoutes);
app.use("/api/tags", tagRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
