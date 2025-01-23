import { NextResponse } from 'next/server';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function middleware(req) {
  const session = await getKindeServerSession(req);

  if (!session || !session.getUser()) {
    // Redirect to the login page if the user is not authenticated
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Allow access if authenticated
  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*'],
};
