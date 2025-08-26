'use client';

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { destroyCookie } from '@/lib/cookies';
import { NAV_ITEMS } from '@/constants/nav-items';
import { toast } from 'sonner';

export default function SidebarComp() {
  const pathname = usePathname();
  const router = useRouter();
  let isActive;

  const onLogout = async () => {
    try {
      await destroyCookie('token');
      await destroyCookie('role');

      toast.success('Berhasil logout!');
      // router.push('/auth/login');
    } catch (err) {
      toast.error('Gagal logout');
    }
  };

  return (
    <>
      <Sidebar
        className="w-full max-w-64 text-white px-4 h-screen"
        collapsible="none"
      >
        <SidebarHeader className="my-6 py-0">
          <Image
            src="/assets/images/logo-white.png"
            alt="logo-brand"
            width={134}
            height={24}
          />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu className="gap-y-2">
            {NAV_ITEMS.map((item, index) => {
              isActive = pathname.startsWith(item.href);

              return (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    className={`text-base leading-6 font-medium px-4 py-2 text-white ${
                      isActive
                        ? 'bg-blue-500'
                        : 'hover:bg-blue-500 hover:text-white'
                    }`}
                  >
                    <Link href={item.href}>
                      <item.icon className="size-5" />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}

            <SidebarMenuItem>
              <Button
                type="submit"
                onClick={onLogout}
                className="text-base leading-6 font-medium px-4 py-2 text-white shadow-none hover:bg-blue-500 w-full justify-start"
              >
                <LogOut className="size-5" />
                Logout
              </Button>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
