import { PaginationItem, PaginationLink } from "@/components/ui/pagination";

interface PageNumberProps {
  page: number;
  isActive: boolean;
  searchParams: { [key: string]: string };
}

export default function PageNumber({
  page,
  isActive,
  searchParams,
}: PageNumberProps) {
  const searchQuery = searchParams.search || "";

  return (
    <PaginationItem>
      <PaginationLink
        href={`?search=${searchQuery}&page=${page}`}
        isActive={isActive}
      >
        {page}
      </PaginationLink>
    </PaginationItem>
  );
}
