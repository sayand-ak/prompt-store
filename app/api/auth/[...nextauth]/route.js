import User from "@model/user";
import { connectDB } from "@utils/database";
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET_ID,
        })
    ],
    callbacks: {
        async session({ session }) {
          // store the user id from MongoDB to session
          const sessionUser = await User.findOne({ email: session.user.email });
          session.user.id = sessionUser._id.toString();
    
          return session;
        },
        async signIn({ profile }) {
            try {
                
                await connectDB();                

                const userExist = await User.findOne({email: profile.email});

                if(!userExist) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }

                return true

            } catch (error) {
                console.log("error in auth sign in : ", error);
                return false;
                
            }
        }
    }
});

export { handler as GET, handler as POST}