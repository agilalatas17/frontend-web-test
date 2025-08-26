'use client';

import { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
import { userProfileAPI } from '@/lib/api/auth';
import { getCookie } from '@/lib/cookies';

export default function Profile() {
  const [user, setUser] = useState(null);

  const loadUser = async () => {
    try {
      const token = (await getCookie('token'))?.value;
      if (token) {
        const userProfileResponse = await userProfileAPI(token);
        localStorage.setItem('username', userProfileResponse.data?.username);
        setUser(userProfileResponse.data);
      }
    } catch (err) {
      return err.message;
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const getInitials = (name) => {
    if (!name) return '?';
    const words = name.trim().split(' ');
    if (words.length === 1) return words[0][0].toUpperCase();
    return words[0][0].toUpperCase() + words[words.length - 1][0].toUpperCase();
  };

  return (
    <>
      <div className="flex flex-row items-center gap-x-1.5">
        <Avatar className="items-center font-semibold leading-7">
          <AvatarImage src="" />
          <AvatarFallback className="bg-blue-100 size-8">
            {getInitials(user?.username)}
          </AvatarFallback>
        </Avatar>
        <Link
          href="#"
          className="hidden md:block capitalize text-sm font-medium leading-5 text-slate-900 hover:underline hover:text-blue-500"
        >
          {user?.username || 'Loading ...'}
        </Link>
      </div>
    </>
  );
}
