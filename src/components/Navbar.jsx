import Profile from '@/components/Profile';
export default function Navbar({ titlePage }) {
  return (
    <>
      <nav className="flex flex-row justify-between items-center border-b bg-white px-6 py-2">
        <h2 className="text-xl font-semibold leading-7 text-slate-900 capitalize">
          {titlePage ?? 'Title Page'}
        </h2>

        <Profile />
      </nav>
    </>
  );
}
