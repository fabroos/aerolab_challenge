import { Product } from '@/models'
import { SortOptions } from '@/models/SortOptions'
import { getProducts } from '@/services'
import { useCallback, useEffect, useState } from 'react'

export function useProducts (initialLimit: number = 16) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [sort, setSort] = useState(SortOptions.NEWEST)

  const fetchProducts = useCallback(() => {
    setLoading(true)
    setError('')
    getProducts()
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    setProducts(sortProducts(products))
  }, [sort])

  const sortProducts = useCallback(
    (products: Product[]) => {
      let sortedProducts = [...products]
      if (sort === SortOptions.HIGH_PRICE) {
        sortedProducts.sort((a, b) => a.price - b.price)
      } else if (sort === SortOptions.LOW_PRICE) {
        sortedProducts.sort((a, b) => b.price - a.price)
      } else {
        sortedProducts.sort((a, b) => b._id.localeCompare(a._id))
      }
      return sortedProducts
    },
    [sort]
  )

  return {
    products,
    loading,
    error,
    sort,
    setSort
  }
}
