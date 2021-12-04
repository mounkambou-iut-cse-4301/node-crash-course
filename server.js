const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "about.html";
      res.statusCode=200;
      break;
    case "/about":
        res.statusCode=301;
      res.setHeader("Location", "/");
      res.end();
      break;
    case "/forms":
      path += "forms.html";
      res.statusCode=200;
      break;
    default:
      path += "404.html";
      res.statusCode=404;
      break;
  }
  res.setHeader("Content-Type", "text/html");
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
