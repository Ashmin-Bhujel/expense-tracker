import { app } from "./app.js";
import environment from "./environment.js";

// * Server
app.listen(environment.PORT, () => {
  console.log(`Server is up and running or port ${environment.PORT}`);
});
