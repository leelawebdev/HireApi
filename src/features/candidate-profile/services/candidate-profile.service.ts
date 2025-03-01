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
}

export default new CandidateProfileService();
