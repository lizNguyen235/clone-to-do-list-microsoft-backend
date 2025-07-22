const express = require("express");
const app = express();
const routes = require("./routes/index.router.js");
const db = require("./models/index.model.js");
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Database reset & synced.");
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/", routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
