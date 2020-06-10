const express = require("express");
const app = express();

app.all("/", (req, res) => {
  res.send(`
  <html>
    <div>Hi Everyone</div>
  </html>
  `);
});

app.listen(3000);
