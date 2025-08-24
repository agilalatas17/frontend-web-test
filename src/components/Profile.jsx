import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';

export default function Profile() {
  return (
    <>
      <div className="flex flex-row items-center gap-x-1.5">
        <Avatar className="items-center font-semibold leading-7">
          <AvatarImage src="" />
          <AvatarFallback className="bg-blue-100 size-8">J</AvatarFallback>
        </Avatar>
        <Link
          href="/admin/profile"
          className="capitalize text-sm font-medium leading-5 text-slate-900 hover:underline hover:text-blue-500"
        >
          James Dean
        </Link>
      </div>
    </>
  );
}
