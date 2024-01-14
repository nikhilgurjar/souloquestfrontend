import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import { auth } from "@/utils/authConfig";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const session =  await auth();
    if(!session || !session?.user){
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }
    const {email} = session.user;
    const {facebook, instagram, linkedin, twitter} = await req.json();

    await connectMongoDB();
    
    const newSocialMedia = {
      facebook,
      instagram,
      linkedin,
      twitter
    };

    const existingUser = await User.findOneAndUpdate({ email }, { socialMedia: newSocialMedia },{ new: true });
    if (!existingUser) {
      return NextResponse.json(
        { message: "User not found." },
        { status: 409 }
      );
    }

    return NextResponse.json({ message: "Profile has been updated", user: existingUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}