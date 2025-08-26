import { NextResponse } from 'next/server';

export async function POST() {
  const res = NextResponse.json({ message: 'Logout success' });

  // hapus cookie dengan cara set expired
  res.cookies.set('token', '', {
    httpOnly: true,
    secure: true, // aman di production
    sameSite: 'strict',
    expires: new Date(0), // langsung kadaluarsa
    path: '/',
  });

  res.cookies.set('role', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    expires: new Date(0),
    path: '/',
  });

  return res;
}
