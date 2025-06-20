import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface Props {
  currentPage: number
  prev_url: string | undefined
  next_url: string | undefined
  lastPage: number
}

export default function BlogPagination({ prev_url, next_url }: Props) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={prev_url}
            isActive={prev_url != undefined}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={next_url} isActive={next_url != undefined} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
