import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

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
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;
      }
      return session;
    }
  }
  
});

export default authHandler;
