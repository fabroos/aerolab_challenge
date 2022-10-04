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
    if (!canNext) return
    setPage(page + 1)
  }

  function prevPage () {
    if (!canPrev) return
    setPage(page - 1)
  }

  useEffect(() => {
    // first we check if can go to next page  ➡️
    if (page === maxPage) setCanNext(false)
    else setCanNext(true)
    // then we check if can go to prev page ⬅️
    if (page === 1) setCanPrev(false)
    else setCanPrev(true)
    // and finally we set the items to show 🚀
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
