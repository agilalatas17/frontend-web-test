import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className="border border-red-500 py-10 bg-primary text-white w-full text-center">
        <div className="flex gap-x-4 justify-center">
          <Image
            src="/assets/images/logo-white.png"
            alt="logo brand"
            width={132}
            height={24}
          />
          <p>© 2025 Blog genzet, made with ❤️. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
