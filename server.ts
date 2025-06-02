
import app from "./src/app";
// import { envConfig } from "./src/config/config";
import("./src/database/connection")

function startServer() {
  const port = process.env.PORT || 3000;
  app.listen(port, function () {
    console.log(`Server has started at port http://localhost:${port}`);
  });
}


startServer();
