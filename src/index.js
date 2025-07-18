const express = require("express");
const app = express();
const db = require("./config/db");
const routes = require("./routes/index");

const sequelize = require("./config/db"); // đường dẫn tùy vào vị trí file

sequelize
  .authenticate()
  .then(() => console.log("✅ Kết nối cơ sở dữ liệu thành công!"))
  .catch((err) => console.error("❌ Kết nối thất bại:", err));

app.use("/api/v1/", routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
