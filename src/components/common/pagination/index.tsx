import PageNumber from "./PageNumber";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ThemePaginationProps {
  currentPage: number;
  lastPage: number;
  searchParams: { [key: string]: string };
}

export default function ThemePagination({
  currentPage,
  lastPage,
  searchParams,
}: ThemePaginationProps) {
  const pages = Array.from({ length: lastPage }, (_, i) => i + 1);
  const searchQuery = searchParams.search || "";

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`?search=${searchQuery}&page=${currentPage - 1}`}
            />
          </PaginationItem>
        )}
        {lastPage <= 3 ? (
          pages.map((page) => (
            <PageNumber
              key={page}
              page={page}
              isActive={page === currentPage}
              searchParams={searchParams}
            />
          ))
        ) : (
          <>
            <PageNumber
              page={1}
              isActive={currentPage === 1}
              searchParams={searchParams}
            />
            {currentPage > 3 && <PaginationEllipsis />}
            {currentPage > 2 && (
              <PageNumber
                page={currentPage - 1}
                isActive={false}
                searchParams={searchParams}
              />
            )}
            {currentPage !== 1 && currentPage !== lastPage && (
              <PageNumber
                page={currentPage}
                isActive={true}
                searchParams={searchParams}
              />
            )}
            {currentPage < lastPage - 1 && (
              <PageNumber
                page={currentPage + 1}
                isActive={false}
                searchParams={searchParams}
              />
            )}
            {currentPage < lastPage - 2 && <PaginationEllipsis />}
            <PageNumber
              page={lastPage}
              isActive={currentPage === lastPage}
              searchParams={searchParams}
            />
          </>
        )}
        {currentPage < lastPage && (
          <PaginationItem>
            <PaginationNext
              href={`?search=${searchQuery}&page=${currentPage + 1}`}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
