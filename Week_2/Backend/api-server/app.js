const express = require("express");
const app = express();
const port = 4000;

app.get("/textmessage", (req, res) => {
  res.send("Text message!");
});

app.get("/jsonmessage", (req, res) => {
  res.json({ message: "JSON message!" });
});

app.get("/htmlmessage", (req, res) => {
  const htmlMessage = `
    <html>
        <body>
            <h1>HTML message!</h1>
        </body>
    </html>
    `;

  res.send(htmlMessage);
});

app.get("/info", (req, res) => {
  const htmlInfo = `
    <html>
        <body>
            <h1>Info page</h1>
            <p>Hello user.</p>
            <p>The time is: ${new Date().toLocaleString()}</p>
        </body>
    </html>
    `;

  res.send(htmlInfo);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
