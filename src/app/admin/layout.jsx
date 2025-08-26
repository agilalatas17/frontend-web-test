'use client';

import { SidebarProvider } from '@/components/ui/sidebar';
import SidebarComp from '@/components/SidebarComp';
import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/constants/nav-items';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const activeItem = NAV_ITEMS.find((item) => pathname.startsWith(item.href));
  const titlePage = activeItem ? activeItem.title : 'Title Page';

  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen">
        <SidebarComp />
        <div className="bg-gray-100 flex flex-col flex-1">
          <Navbar titlePage={titlePage} />
          <main className="p-6 flex-1 overflow-y-auto w-full">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
