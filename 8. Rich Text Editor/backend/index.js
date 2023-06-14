import { Server } from "socket.io";
import Connection from "./database/db.js";
import {
  getDocument,
  updateDocument,
} from "./controller/document-controller.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

// Call connectionDB
Connection();

const PORT = 9000;

// Create Server Using Only NodeJs
const io = new Server(PORT, {
  cors: {
    origin: "https://spectacular-licorice-34118d.netlify.app",
    methods: ["GET", "POST"],
  },
});

// connection: It is a server name on socket.io
io.on("connection", (socket) => {
  console.log("Client and Server connected.");

  // Jab ek particular document ki id match karegi to ham realtime changes kar payenge same document par
  socket.on("get-document", async (documentId) => {
    console.log(documentId);

    const document = await getDocument(documentId);
    socket.join(documentId);

    // Data ko emmit ki help se document ko frontend me load kar doonga
    socket.emit("load-document", document.data);

    //  Yanha Frontend se Data Backend me Aaya Hai emmit ki help se
    socket.on("send-changes", (delta) => {
      console.log(delta);
      // Backend me aaya hua data ab Sabhi user ko ek sath dikhana hai
      // socket.broadcast.emit("receive-changes", delta);

      // Backend me aaya hua data ab ek particular document id par sabhi user ko ek sath dikhana hai
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    // Update data on database
    socket.on("save-document", async (data) => {
      await updateDocument(documentId, data);
    });
  });
});
