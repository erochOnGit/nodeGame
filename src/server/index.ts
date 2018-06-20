const colyseus = require("colyseus");
const http = require("http");
const DefaultRoom = require("./defaultRoom.ts");


const gameServer = new colyseus.Server({
    server: http.createServer()
});

gameServer.register("room", DefaultRoom);

gameServer.listen(4000)

console.log("server started on port 4000");
