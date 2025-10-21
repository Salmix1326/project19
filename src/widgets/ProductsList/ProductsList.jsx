import { useGetAllProductsQuery } from '@/entities/product/api/productApi'
import { ProductCardWithActions } from '../ProductCardWithActions'

export default function ProductsList({ user, role }) {
  const { data: products = [], isLoading } = useGetAllProductsQuery()

  if (isLoading)
    return (
      <div className="text-center text-lg text-slate-500 py-8">
        Завантаження...
      </div>
    )

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCardWithActions
          key={p.id}
          product={p}
          user={user}
          role={role}
        />
      ))}
    </div>
  )
}
