const fs = require("fs");

//Read File
// fs.readFile("employees.json", "utf8", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
// });

//Update File
// fs.appendFile("employees.json", "\n {New Text}", "utf8", (err) => {
//   if (err) console.log(err);
// });

//Delete File
fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
});
