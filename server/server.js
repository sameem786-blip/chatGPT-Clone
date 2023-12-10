const app = require("./app");
const http = require("http");

const normalizePort = (val) => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "4000");
app.set("port", port);

app.get("/", function (req, res) {
  res.send("Server is working and CI/CD is implemented....");
});
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);