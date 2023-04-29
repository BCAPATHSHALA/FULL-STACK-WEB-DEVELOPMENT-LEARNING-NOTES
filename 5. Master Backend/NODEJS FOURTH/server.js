import { app } from "./app.js";
import { database } from "./config/database.js";

// Environment Variables
const PORT = process.env.PORT || 4000;

// Database Connection
database();

// Listening The Server on PORT 4000
app.listen(PORT, () => {
  console.log(
    `Server is working on PORT::::::: ${PORT} in ${process.env.NODE_ENV} Mode`
  );
});
