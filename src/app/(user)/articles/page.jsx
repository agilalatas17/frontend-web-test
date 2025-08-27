import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SearchInput } from '@/components/SearchInput';
import ArticleList from '@/components/user/ArticleList';

export default function ArticlesPage() {
  return (
    <>
      <section
        className="h-[500px] bg-cover"
        style={{ backgroundImage: "url('/assets/images/hero-image.jpg')" }}
      >
        <div className="text-center text-white bg-blue-600 opacity-85 h-full flex flex-col justify-center items-center px-4">
          <p className="text-sm md:text-base font-bold">Blog genzet</p>
          <h1 className="text-4xl md:text-5xl font-medium my-3 tracking-normal">
            The Journal : Design Resources,
            <br />
            Interviews, and Industry News
          </h1>
          <h3 className="text-xl md:text-2xl">
            Your daily dose of design insights!
          </h3>

          <div className="flex flex-col md:flex-row bg-blue-500 w-full md:w-auto rounded-xl gap-2 p-2.5 mt-10">
            <Select>
              <SelectTrigger className="bg-white text-slate-900 md:w-[180px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="User">User</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
              </SelectContent>
            </Select>

            <SearchInput
              className="bg-white text-slate-900 md:min-w-[400px]"
              placeholder="Search articles"
            />
          </div>
        </div>
      </section>

      <section className="bg-white mx-auto max-w-[1249px] px-5 md:px-0 my-10">
        <ArticleList />
      </section>
    </>
  );
}
