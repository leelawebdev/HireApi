import { BadRequestException } from 'src/globals/cores/error.core';
import prisma from 'src/globals/prisma';

class CandidateProfileService {
  async create(requestBody: any, currentUser: UserPayload) {
    const { address, birth_date, cv, full_name, gender, phone } = requestBody;

    const candidateProfile = await prisma.candidateProfile.create({
      data: {
        address,
        birth_date: new Date(birth_date),
        cv,
        full_name,
        gender,
        phone,
        userId: currentUser.id,
      },
    });

    return candidateProfile;
  }

  async getAll() {
    const candidateProfiles = await prisma.candidateProfile.findMany();

    return candidateProfiles;
  }

  async getCandidateById(id: number) {
    const candidateProfile = await prisma.candidateProfile.findUnique({
      where: { id },
    });

    if (!candidateProfile)
      throw new BadRequestException(`Candidate with id ${id} doesnt exists`);

    return candidateProfile;
  }

  async update(id: number, requestBody: any) {
    await this.getCandidateById(id);

    const { address, birth_date, cv, full_name, gender, phone } = requestBody;

    const candidate = await prisma.candidateProfile.update({
      where: { id },
      data: {
        address,
        birth_date: birth_date ? new Date(birth_date) : undefined,
        cv,
        full_name,
        gender,
        phone,
      },
    });
    return candidate;
  }
}

export default new CandidateProfileService();
