/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
const STATIC_DIR = path.resolve(__dirname, "./dist/");

// Priority serve any static files.
app.use(express.static(STATIC_DIR));

app.get("*", function (_request, response) {
  response.sendFile(path.resolve(STATIC_DIR, "index.html"));
});
