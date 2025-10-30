import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/utils/mongo";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import User from "@/models/User";
import { dbConnect } from "@/utils/db";
import { signIn } from "next-auth/react";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'

dbConnect()

export default NextAuth({
    // adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({

      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({ email: email });
        if (!user) {
          throw new Error("You haven't registered yet!");
        }
        if (user) {
          return signInUser({ user, password });
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        // Eğer sadece doğrulanmış Gmail adreslerine izin vereceksen:
        return profile.email_verified;

        // Veya sadece belirli domain’lere izin vermek istersen:
        // return profile.email_verified && profile.email.endsWith("@mycompany.com");
      }
      return true;
    },

    async redirect({url,baseUrl}) {
        return baseUrl + "/"
    },

    async session({session,user}) {
        
        session.user.image = session.user.image;
        session.user.email = session.user.email;
        return session
    },
    
    pages: {
        signIn: "auth/Login"
    },
    database: process.env.MONGODB_URI,
    secret: "secret",
  },
});


const signInUser = async ({ user, password }) => {
  const isMAtch = await bcrypt.compare(password, user.password);
  if (!isMAtch) {
    throw new Error("Incorrect password!");
  }
  return user;
};