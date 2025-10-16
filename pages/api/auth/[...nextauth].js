import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/utils/mongo";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
export default NextAuth({
   adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({

      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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

    async session({session,token,user}) {
        
        session.user.image = session.user.image;
        session.user.email = session.user.email;
        return session
    },
    pages: {
        signIn: "auth/Login"
    }
  },
});
