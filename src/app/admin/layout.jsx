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
      <SidebarComp />
      <div className="bg-gray-100 w-full">
        <Navbar titlePage={titlePage} />
        <main className="p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
