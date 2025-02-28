import express, { Application } from 'express';
import 'dotenv/config';

export default class Server {
  app: Application;
  constructor() {
    this.app = express();
  }

  public start() {
    this.middlewares();
    this.setupRoutes();
    this.setupGlobalErrors();
    this.listenServer();
  }

  private middlewares() {}

  private setupRoutes() {}

  private setupGlobalErrors() {}

  private listenServer() {
    const port = process.env.PORT || 5050;
    this.app.listen(port, () => {
      console.log(`server is listening to the port ${port}`);
    });
  }
}
