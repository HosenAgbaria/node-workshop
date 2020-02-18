const http = require("http");
const port = 3000;
var message = "I am so happy to be part of the Node Girls workshop!";

const fs = require("fs");

let handler = (req, res) => {
  let reqUrl = req.url;
  console.log("req url ", reqUrl);

  if (reqUrl === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    fs.readFile(__dirname + "/public/index.html", (err, file) => {
      if (err) {
        console.log(err);
        return;
      } else {
        res.end(file);
      }
    });
  } else if (reqUrl === "/node") {
    res.writeHead(200, { "content-type": "text/html" });

    res.write("you requseted node page");
    res.end();
  } else if (reqUrl === "/girls") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("girls end point");
    res.end();
  } else {
    let urlContentTye = toString(req.url).split(".")[1];
    console.log('urlContentTye',urlContentTye);
    
    let contentTypes = {
      html: "text/html",
      css: "text/css",
      jpeg: "image/jpeg",
      js: "text/javascript",
      jpg: "image/jpg",
      png: "image/png"
    };
    res.writeHead(200, { "content-type": `${contentTypes[urlContentTye]}` });
    fs.readFile(__dirname + `/public/${req.url}`, (err, file) => {
      if (err) {
        console.log(err);
        return;
      }
      res.end(file);
    });
  }
};
const server = http.createServer(handler);

server.listen(port, () => {
  console.log(
    `server is running successfully on localhost:${port} and ready to get requests `
  );
});
