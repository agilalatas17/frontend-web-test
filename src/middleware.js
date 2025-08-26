import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token')?.value;
  const role = req.cookies.get('role')?.value;
  const { pathname } = req.nextUrl;

  if (!token && pathname.startsWith(pathname)) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  if (pathname === '/' && token && role) {
    if (role === 'Admin') {
      return NextResponse.redirect(new URL('/admin/articles', req.url));
    } else if (role === 'User') {
      return NextResponse.redirect(new URL('/articles', req.url));
    }
  }

  try {
    if (pathname.startsWith('/admin') && role !== 'Admin') {
      return NextResponse.redirect(new URL('/articles', req.url));
    }

    if (pathname.startsWith('/articles') && role !== 'User') {
      return NextResponse.redirect(new URL('/admin/articles', req.url));
    }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }
}

export const config = {
  matcher: ['/', '/admin/:path*', '/articles/:path*'],
};
