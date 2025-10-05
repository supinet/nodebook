const fs = require("fs");

const currentData = JSON.parse(fs.readFileSync("books.json", "utf-8"));
const newData = { id: "3", name: "New Book" };
fs.writeFileSync(
  "books.json",
  JSON.stringify([...currentData, newData], "utf-8")
);
console.log(JSON.parse(fs.readFileSync("books.json", "utf-8")));
