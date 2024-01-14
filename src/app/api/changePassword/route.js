import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { auth } from "@/utils/authConfig";

export async function POST(req) {
  try {
    const session =  await auth();

    if(!session || !session?.user){
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }
   const {oldPassword, password} = await req.json();
    const userId = session?.user?._id

    await connectMongoDB();
    
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return NextResponse.json(
        { message: "User not found." },
        { status: 409 }
      );
    }

    const isPasswordValid = await bcrypt.compare(oldPassword, existingUser.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid password." },
        { status: 401 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    existingUser.password = hashedPassword;
    await existingUser.save();

    return NextResponse.json({ message: "password updated successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}