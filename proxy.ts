import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const session = request.cookies.get('session');
  const { pathname } = request.nextUrl;

  // Protect /planning route
  if (pathname.startsWith('/planning')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Redirect from login if already logged in
  if (pathname === '/login') {
    if (session) {
      return NextResponse.redirect(new URL('/planning', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/planning/:path*', '/login'],
};
