//File Base Module
//Build in Module
//Third Party Module

//!Create Server Using Build In Module "http"
import { readFileSync } from "fs";
import { createServer } from "http";

const PORT = process.env.PORT;
const home = readFileSync("./index.html");
const about = readFileSync("./about.html");
const notPage = readFileSync("./404page.html");

const server = createServer((req, res) => {
  if (req.url === "/") {
    return res.end(home);
  }
  if (req.url === "/about") {
    return res.end(`${about}`);
  } else {
    return res.end(notPage);
  }
});

server.listen(PORT, () => {
  console.log(`Server is working on http://${hostname}:${PORT}`);
});
