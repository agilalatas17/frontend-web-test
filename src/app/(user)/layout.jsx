import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MemberLayout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
