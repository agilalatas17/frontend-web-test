import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className="py-6 md:py-10 bg-primary text-white w-full text-center">
        <div className="flex flex-col md:flex-row text-center gap-y-2 md:gap-x-4 justify-center items-center">
          <Image
            src="/assets/images/logo-white.png"
            alt="logo brand"
            width={132}
            height={24}
          />
          <p>© 2025 Blog genzet. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
