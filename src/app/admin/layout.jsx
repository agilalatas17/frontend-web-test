import { SidebarProvider } from '@/components/ui/sidebar';
import SidebarComp from '@/components/SidebarComp';
import Navbar from '@/components/Navbar';

export default function AdminLayout({ children }) {
  return (
    <SidebarProvider>
      <SidebarComp />
      <div className="bg-gray-100 w-full">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
