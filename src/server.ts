import express, { Application, NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import { appRoutes } from './globals/routes/appRoutes';
import { StatusCodes } from 'http-status-codes';
import { CustomError, NotFoundException } from './globals/cores/error.core';

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

  private middlewares() {
    this.app.use(express.json());
  }

  private setupRoutes() {
    appRoutes(this.app);
  }

  private setupGlobalErrors() {
    //GET, POST, put patch, delete
    this.app.all('*', (req: Request, res: Response, next: NextFunction) => {
      next(
        new NotFoundException(
          `The Url ${req.originalUrl} not found with method ${req.method}`,
        ),
      );
    });

    this.app.use(
      (error: any, req: Request, res: Response, next: NextFunction) => {
        if (error instanceof CustomError) {
          res.status(error.statusCode).json({
            message: error.message,
          });
        }

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          message: error.message,
        });
      },
    );
  }

  private listenServer() {
    const port = process.env.PORT || 5050;
    this.app.listen(port, () => {
      console.log(`server is listening to the port ${port}`);
    });
  }
}
