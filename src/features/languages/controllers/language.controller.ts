import { Request, Response } from 'express';
import languageService from '../services/language.service';
import { StatusCodes } from 'http-status-codes';

class LanguageController {
  async getAll(req: Request, res: Response) {
    const languages = await languageService.getAllLanguages();

    res.status(StatusCodes.OK).json({
      message: 'languages got successfully',
      data: languages,
    });
  }

  async getSingleLanguage(req: Request, res: Response) {
    const language = await languageService.getLanguageById(+req.params.id);
    res.status(StatusCodes.OK).json({
      message: 'language got successfully',
      data: language,
    });
  }

  async create(req: Request, res: Response) {
    const language = await languageService.create(req.body);
    res.status(StatusCodes.CREATED).json({
      message: 'language created successfully',
      data: language,
    });
  }

  async update(req: Request, res: Response) {
    const language = await languageService.update(+req.params.id, req.body);

    res.status(StatusCodes.OK).json({
      message: 'language Updated successfully',
      data: language,
    });
  }

  async delete(req: Request, res: Response) {
    await languageService.delete(+req.params.id);
    res.status(StatusCodes.OK).json({
      message: 'language deleted successfully',
    });
  }
}

export default new LanguageController();
