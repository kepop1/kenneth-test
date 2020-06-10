const express = require("express");
const app = express();

const PORT = process.env.port || 3000;

app.all("/", (req, res) => {
  res.send(`
  <html>
    <div>Hi Everyone</div>
  </html>
  `);
});

app.listen(PORT);
