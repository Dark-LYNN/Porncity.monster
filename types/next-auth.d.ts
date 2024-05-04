import 'next-auth';

declare module 'next-auth' {
  /**
   * Extends the built-in session and user types
   */
  interface Session {
    user?: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    }
  }
}
