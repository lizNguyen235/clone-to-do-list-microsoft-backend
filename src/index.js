const express = require("express");
const app = express();
const db = require("./config/db");

db.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối đến cơ sở dữ liệu:", err);
    return;
  }
  console.log("Kết nối đến cơ sở dữ liệu thành công!");
});
