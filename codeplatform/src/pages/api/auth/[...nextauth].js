/*import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
import { headers } from "next/headers";
import NextAuth from "next-auth";
console.log("Loaded [...nextauth].js");
export const authOptions = {
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "quest" },
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
                
            },
            
            async authorize(credentials, req) {
                console.log("in authorize");
                const { username, email, password } = credentials;

                if(!credentials){
                    console.log("no cred in nextauth");
                    return {
                        id: "quest",
                        username: "Quest",
                        email: "eample@example.com",
                        password: "temp23",
                        role: "quest",
                    }
                }
                try {
                    if (!username || !email || !password) {
                        throw new Error("Need all fields in auth");
                    }
                    console.log("From nextauthOptions", username, email, password);
                    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/login`, {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: { "Content-Type": "application/json" }
                    });
                    const user = await res.json()

                    if (res.ok && user) {
                        return user
                    } else {
                        throw new Error("Invalid credentials or server error.");
                        //return null
                    }
                } catch (error) {
                    console.log("auth errori: ", error);
                }
            }
        }),
        /*GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }), //
    ],
    /*callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token;
            return session;
        },
    },
}  //
callbacks: {
    async jwt({ token, user }) {
      // Add user data to the token
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role || "user";
      }
      return token;
    },
    async session({ session, token }) {
      // Include token data in the session
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
        role: token.role,
      };

      // Provide a default guest session for unauthenticated users
      if (!session.user.id || session.user.role === "guest") {
        session.user = {
          id: "guest",
          name: "Guest User",
          email: "guest@example.com",
          role: "guest",
          tempData: {
            accessLevel: "read-only",
            notes: "This is a temporary guest session.",
          },
        };
      }

      return session;
    },
  },
};

export default NextAuth(authOptions)

*/
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, email, password } = credentials || {};

        // If no credentials provided, return a guest session
        if (!username || !email || !password) {
          return {
            id: "guest",
            name: "Guest User",
            email: "guest@example.com",
            role: "guest",
          };
        }

        // Logic for authenticating a real user
        try {
          console.log("Creds got, ", credentials);
          const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          });
          const user = await res.json();

          if (res.ok && user) {
            return user;
          }
          throw new Error("Invalid credentials");
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role || "user";
        console.log("token from callback, ", token);
      }
      return token;
    },
    async session({ session, token }) {
      if (token.role === "guest") {
        session.user = {
          id: "guest",
          name: "Guest User",
          email: "guest@example.com",
          role: "guest",
          
        };
        console.log("token from guest session in authOptions, ", token.role, "and quest info, ", session.user);
      } else {
        session.user = {
          id: token.id,
          name: token.name,
          email: token.email,
          role: token.role || "user",

        };
        console.log("from user.session in authOptions, ", session.user);
      }
      return session;
    },
  },
};

export default NextAuth(authOptions)