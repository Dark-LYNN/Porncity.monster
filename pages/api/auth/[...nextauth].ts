import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import { saveUser } from './userService';

const authHandler: NextApiHandler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || '',
      clientSecret: process.env.DISCORD_CLIENT_SECRET || '',
      authorization: { params: { scope: 'identify email' } }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email }) {
      if (user.email) {  // Check if email exists to qualify as a new user check
        const isNewUser = await saveUser(user); // Adapt your saveUser to return if new user
        // Continue based on isNewUser if needed
      }
      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;  // Assuredly adding properties after existence check
        session.user.email = token.email;
      }
      return session;
    }
  }
});

export default authHandler;
