import { useEffect, useState } from 'react'

export function usePagination<T> (initialArray: T[] = []) {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(16)
  const [total, setTotal] = useState(initialArray.length)
  const [itemsToShow, setItemsToShow] = useState(initialArray)
  const [maxPage, setMaxPage] = useState(1)
  const [canNext, setCanNext] = useState(false)
  const [canPrev, setCanPrev] = useState(false)

  function nextPage () {
    if (page + 1 > maxPage) return
    setPage(page + 1)
  }

  function prevPage () {
    if (page === 1) return
    setPage(page - 1)
  }

  useEffect(() => {
    if (page === maxPage) setCanNext(false)
    else setCanNext(true)
    if (page === 1) setCanPrev(false)
    else setCanPrev(true)
    setItemsToShow(initialArray.slice((page - 1) * limit, page * limit))
  }, [page, initialArray, limit])

  useEffect(() => {
    setTotal(initialArray.length)
    setMaxPage(Math.ceil(initialArray.length / limit))
  }, [initialArray])

  return {
    page,
    setPage,
    limit,
    setLimit,
    total,
    setTotal,
    itemsToShow,
    nextPage,
    prevPage,
    canNext,
    maxPage
  }
}
