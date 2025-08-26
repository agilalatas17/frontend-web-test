'use client';

import Profile from '@/components/Profile';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({ titlePage }) {
  const role = localStorage.getItem('role');
  console.log('CEK ROLE NAVBAR : ', role);
  return (
    <>
      <nav className="flex flex-row justify-between items-center border-b bg-white px-5 md:px-16 py-2">
        {role === 'Admin' ? (
          <h2 className="text-xl font-semibold leading-7 text-slate-900 capitalize">
            {titlePage}
          </h2>
        ) : (
          <Link href="/articles">
            <Image
              src="/assets/images/logo.png"
              width={132}
              height={24}
              className="w-[122px] h-[22px] md:w-[132px] md:h-6"
            />
          </Link>
        )}

        <Profile />
      </nav>
    </>
  );
}
