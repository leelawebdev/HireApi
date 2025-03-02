import { BadRequestException } from 'src/globals/cores/error.core';
import prisma from 'src/globals/prisma';
import { ILanguage } from '../interfaces/language.interface';

class LanguageService {
  async getAllLanguages() {
    const languages = await prisma.language.findMany();

    return languages;
  }

  async getLanguageById(id: number) {
    const language = await prisma.language.findUnique({
      where: { id },
    });

    if (!language) throw new BadRequestException('language not found');
    return language;
  }

  async create(requestBody: ILanguage) {
    const { name } = requestBody;
    const language = await prisma.language.create({
      data: {
        name,
      },
    });
    return language;
  }

  async update(id: number, requestBody: ILanguage) {
    await this.getLanguageById(id);
    const { name } = requestBody;
    const language = await prisma.language.update({
      where: { id },
      data: { name },
    });

    return language;
  }

  async delete(id: number) {
    await this.getLanguageById(id);
    await prisma.language.delete({
      where: { id },
    });
  }
}

export default new LanguageService();
