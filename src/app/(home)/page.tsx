// import { ReactNode } from "react";
import TransparentHeader from "@/components/common/headers/TransparentHeader"
import BlueFooter from "@/components/common/footers/BlueFooter"
import SearchInput from "@/components/common/search-input";
import SelectInput from "@/components/common/select-input";
import ArticleCard from "@/components/articles/ArticleCard";

// interface HomeProps {
//   children?: ReactNode;
// }

export default function Home(
  // { children }: HomeProps
) {
  return (
    <div className="flex min-h-screen flex-col">
      <TransparentHeader />
      <main className="flex-grow">
        <div className="home-bg text-white">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center py-20 space-y-4">
            <h1 className="font-bold">Blog genzet</h1>
            <p className="text-5xl">The Journal : Design Resources, Interviews, and Industry News</p>
            <p className="font-normal text-2xl">Your daily dose of design insights!</p>
            <div className="p-2.5 rounded-xl bg-blue-500 flex items-center space-x-2">
              <SelectInput />
              <SearchInput />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-10 space-y-5">
          <p className="text-slate-600">Showing : 20 of 240 articles</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Array.from({ length: 6 }, (_, index) => (
              <ArticleCard key={index} />
            ))}
          </div>
        </div>
      </main>
      <BlueFooter />
    </div >
  );
}
