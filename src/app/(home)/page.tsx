// import { ReactNode } from "react";
import SearchInput from "@/components/common/search-input";
import SelectInput from "@/components/common/select-input";
import ArticleCard from "@/components/feature/articles/article-card";
import DefaultContainer from "@/components/common/layout/DefaultContainer";
import HomeWrapper from "@/components/common/layout/HomeWrapper";

// interface HomeProps {
//   children?: ReactNode;
// }

export default function HomePage(
  // { children }: HomeProps
) {
  return (
    <HomeWrapper>
      <div className="home-bg text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-5 py-36 lg:py-20 space-y-4">
          <h1 className="font-bold">Blog genzet</h1>
          <p className="text-4xl lg:text-5xl">The Journal : Design Resources, Interviews, and Industry News</p>
          <p className="font-normal text-xl lg:text-2xl">Your daily dose of design insights!</p>
          <div className="p-2.5 rounded-xl bg-blue-500 block w-full md:w-auto lg:flex items-center space-y-2 lg:space-y-0 space-x-2">
            <div className="w-full lg:w-[180px]">
              <SelectInput />
            </div>
            <SearchInput />
          </div>
        </div>
      </div>
      <DefaultContainer className="px-5 py-10 space-y-5">
        <p className="text-slate-600">Showing : 20 of 240 articles</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.from({ length: 6 }, (_, index) => (
            <ArticleCard key={index} />
          ))}
        </div>
      </DefaultContainer>
    </HomeWrapper >
  );
}
