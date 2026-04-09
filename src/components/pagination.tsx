import type { Page } from "astro"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface Props {
  page: Page
  category: string
}

function PostPagination({ page, category }: Props) {
  const { currentPage, lastPage } = page

  const getPageNumbers = () => {
    const maxVisible = 3

    if (lastPage <= maxVisible) {
      return Array.from({ length: lastPage }, (_, i) => i + 1)
    }

    if (currentPage <= 2) {
      return [1, 2, 3, "ellipsis"]
    } else if (currentPage >= lastPage - 1) {
      return ["ellipsis", lastPage - 2, lastPage - 1, lastPage]
    } else {
      return [
        "ellipsis",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "ellipsis",
      ]
    }
  }

  const pageNumbers = getPageNumbers()

  return (
    <Pagination>
      <PaginationContent className="flex-wrap gap-1">
        <PaginationItem>
          <PaginationPrevious
            text="上一页"
            href={page.url.prev ?? "#"}
            aria-disabled={!page.url.prev}
            className={!page.url.prev ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {pageNumbers.map((item, index) =>
          item === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={item}>
              <PaginationLink
                href={`/${category}/${item}`}
                isActive={item === currentPage}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem>
          <PaginationNext
            text="下一页"
            href={page.url.next ?? "#"}
            aria-disabled={!page.url.next}
            className={!page.url.next ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export { PostPagination }
