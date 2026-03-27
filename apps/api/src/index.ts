import { app } from "./app.js";
import environment from "./environment.js";
import { connectDB } from "./services/db.service.js";

// * Connect to database
connectDB()
  .then(() => {
    console.log("Connected to database successfully");

    // * Server
    app.listen(environment.PORT, () => {
      console.log(`Server is up and running on port ${environment.PORT}`);
    });
  })
  .catch((error) => {
    if (error instanceof Error) {
      console.log(error.message);
      process.exit(1);
    }
  });
