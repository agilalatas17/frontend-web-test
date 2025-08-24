'use client';

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { Newspaper, Tag, LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function SidebarComp() {
  const pathname = usePathname();
  let isActive;

  const NAV_ITEMS = [
    {
      title: 'Articles',
      href: '/admin/articles',
      icon: Newspaper,
    },
    {
      title: 'Category',
      href: '/admin/category',
      icon: Tag,
    },
    {
      title: 'Logout',
      href: '#',
      icon: LogOut,
    },
  ];

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
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
