import { Server } from "./server.test";

const app: Server = new Server();
app.configureServer();

app.server.listen(8086, () => console.log("Server is live on port 8086"))