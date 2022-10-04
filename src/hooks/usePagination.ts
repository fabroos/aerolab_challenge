import { useEffect, useMemo, useState } from 'react'

export function usePagination<T> (initialArray: T[] = []) {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(16)
  const [itemsToShow, setItemsToShow] = useState(initialArray)

  const total = useMemo(() => initialArray.length, [initialArray])
  const maxPage = useMemo(() => Math.ceil(total / limit), [total, limit])
  const canPrev = useMemo(() => page > 1, [page])
  const canNext = useMemo(() => page < maxPage, [page, maxPage])

  useEffect(() => {
    setItemsToShow(initialArray.slice((page - 1) * limit, page * limit))
  }, [initialArray, page, limit])

  function nextPage () {
    if (!canNext) return
    setPage(page + 1)
  }

  function prevPage () {
    if (!canPrev) return
    setPage(page - 1)
  }

  return {
    page,
    setPage,
    limit,
    setLimit,
    total,

    itemsToShow,
    nextPage,
    prevPage,
    canNext,
    maxPage
  }
}
