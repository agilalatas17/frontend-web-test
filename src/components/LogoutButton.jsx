import { destroyCookie } from '@/lib/cookies';
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { destroyCookie } from '@/lib/cookies';

export default function LogoutButton({ className }) {
  const router = useRouter();

  const onLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      await destroyCookie('token');
      await destroyCookie('role');
      localStorage.clear();

      toast.success('Berhasil logout!');
      router.push('/auth/login');
    } catch (err) {
      toast.error('Gagal logout!');
    }
  };

  return (
    <>
      <Button
        onClick={onLogout}
        className={`text-base leading-6 font-medium px-4 py-2 text-white w-full justify-start ${className}`}
      >
        <LogOut className="size-5" />
        Logout
      </Button>
    </>
  );
}
