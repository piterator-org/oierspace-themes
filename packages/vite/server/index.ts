import createServer from "./app";

startServer();

async function startServer() {
  const app = await createServer();

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}
