import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import Image from 'next/image';

export default function AuthLayout({ children }) {
  return (
    <>
      <div className="w-screen h-screen px-4 bg-white md:bg-gray-100 flex items-center justify-center">
        <Card className="w-full max-w-[400px] rounded-xl px-4 py-10">
          <CardHeader className="p-0 mb-6">
            <Image
              src="/assets/images/logo.png"
              alt="logo-brand"
              width={134}
              height={24}
              className="mx-auto"
            />
          </CardHeader>
          <CardContent className="p-0">{children}</CardContent>
        </Card>
      </div>
    </>
  );
}
