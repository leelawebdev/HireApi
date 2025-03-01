import prisma from '../../../globals/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { BadRequestException } from '../../../globals/cores/error.core';
import { generateToken } from '../../../globals/helpers/jwt.helper';

class AuthService {
  async signup(requestBody: any) {
    const { name, email, password } = requestBody;

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
        role: 'CANDIDATE',
      },
    });

    const accessToken = await generateToken(user);
    return accessToken;
  }

  async signin(requestBody: any) {
    const { email, password } = requestBody;

    //check email exists
    const user = await this.findUserByEmail(email);
    if (!user) throw new BadRequestException(`email ${email} doest exists`);

    //check password match
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw new BadRequestException(`Invalid Password`);

    //create token
    const accessToken = generateToken(user);
    return accessToken;
  }

  async findUserByEmail(email: string) {
    return await prisma.user.findFirst({
      where: { email },
    });
  }
}

export default new AuthService();
