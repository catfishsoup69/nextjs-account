import NextAuth from 'next-auth';
import {authConfig} from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import {z} from 'zod';
import bcrypt from 'bcrypt';
import {User} from "@/app/types/users";

const hardcodedUser: User = {email: 'user@nextmail.com', password: '123456'};

export const { signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({email: z.string().email(), password: z.string().min(6)})
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { password} = parsedCredentials.data;
          const passwordsMatch = await bcrypt.compare(password, bcrypt.hashSync(hardcodedUser.password, 10));

          if (passwordsMatch) return hardcodedUser;
        }

        console.error('Неверные данные');
        return null;
      },
    }),
  ],
});
