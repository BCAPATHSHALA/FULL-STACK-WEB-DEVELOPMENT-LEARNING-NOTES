//File Base Module
//Build in Module
//Third Party Module

//!Create Server Using Build In Module "http"
import { readFileSync } from "fs";
import { createServer } from "http";

const PORT = 4000;
const hostname = "localhost";
const home = readFileSync("./index.html");
const about = readFileSync("./about.html");

const server = createServer((req, res) => {
  if (req.url === "/") {
    return res.end(home);
  }
  if (req.url === "/about") {
    return res.end(`${about}`);
  } else {
    return res.end(`<h1>401 Page Not Found!</h1>`);
  }
});

server.listen(PORT, hostname, () => {
  console.log(`Server is working on http://${hostname}:${PORT}`);
});
