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
}

export default new CandidateProfileService();
