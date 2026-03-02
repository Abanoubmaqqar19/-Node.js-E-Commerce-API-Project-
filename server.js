// lesting

//  init server
 //db connection


import app from "./app.js";
const port = 3000;

app.listen(port, () => {
  console.log(`Server runnig at  http://localhost:${port}`);
});