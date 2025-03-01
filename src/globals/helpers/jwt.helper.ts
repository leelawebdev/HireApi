import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';

export async function generateToken(user: User) {
  const accessToken = await jwt.sign(
    { name: user.name, email: user.email, id: user.id, role: user.role },
    process.env.JWT_SECRET!,
    {
      expiresIn: '1d',
    },
  );
  return accessToken;
}
