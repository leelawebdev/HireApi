import { Request, Response } from 'express';

class LanguageController {
  async getAll(req: Request, res: Response) {}

  async getSingleLanguage(req: Request, res: Response) {}

  async create(req: Request, res: Response) {}

  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}
}

export default new LanguageController();
