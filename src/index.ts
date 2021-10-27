import "reflect-metadata";
import app from "./app";

const port = process.env.PORT || 8082;

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
