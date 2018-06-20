import { Room, Client } from "colyseus";

export class MyRoom extends Room {
  // When room is initialized
  onInit(options: any) {
    console.log("room created");
  }

  // When client successfully join the room
  onJoin(client: Client) {
    console.log(`${client.sessionId} just joined the room !`);
  }

  // When a client leaves the room
  onLeave(client: Client) {
    console.log(`${client.sessionId} just left the room !`);
  }

  // When a client sends a message
  onMessage(client, data) {
    console.log("BasicRoom received message from", client.sessionId, ":", data);
  }
  // Cleanup callback, called after there are no more clients in the room. (see `autoDispose`)
  onDispose() {
    console.log("Dispose BasicRoom");
  }
}
