import express, { Application } from 'express';

export default class Server {
  app: Application;
  constructor() {
    this.app = express();
  }

  listenServer() {
    const port = 5000;
    this.app.listen(port, () => {
      console.log(`server is listsening to the port ${port}`);
    });
  }
}
