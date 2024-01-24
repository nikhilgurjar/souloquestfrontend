import { NextResponse } from "next/server";

export function middleware(request) {
    const path = request.nextUrl.pathname;
  
    const privatePaths = ['/profile', '/profile/edit', '/chat']; // Add other private paths as needed
    const isPrivatePath = privatePaths.includes(path);
  
    const token = request.cookies.get('token')?.value || '';
  
    if (isPrivatePath && !token) {
      return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
  }
  
  // See "Matching Paths" below to learn more
  export const config = {
    matcher: [
      '/',
      '/login',
      '/signup',
      '/profile',
      '/profile/edit',
      '/chat'
    ]
  };