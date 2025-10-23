import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { type: "text", name: "Username" },
        password: { type: "password", name: "Password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
          });

          const data = await res.json();
          if (res.ok && data.user){
            return {...data.user, token: data.token};
            
          }

          return null;

        } catch (error) {
            console.log("Error occured ", err);
            return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt(token, user){
        if (user){
            token.id = user.id;
            token.username = user.username;
            token.password = user.password;
        }

        return token;
    },
    async session(session, token){
        session.user.id = token.id;
        session.user.username = token.username
        session.user.token = token.token
        return session;
    }
  }
});

export {handler as GET, handler as POST}
