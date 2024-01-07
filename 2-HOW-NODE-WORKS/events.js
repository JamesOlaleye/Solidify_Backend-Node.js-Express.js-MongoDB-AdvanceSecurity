const EventEmitter = require("events");
const http = require("http")

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: James");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock`);
});

myEmitter.emit("newSale", 9);

///////////////////////////////////////////////

const server = http.createServer()

server.on("request", (req, res) => {
    console.log("Request received!")
    res.end("Request recieved")
})

server.on("request", (req, res) => {
    res.end("Another request 😎")
})
