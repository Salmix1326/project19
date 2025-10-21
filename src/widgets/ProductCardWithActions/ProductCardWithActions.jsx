import ProductCard from "@/entities/product/ui/ProductCard";
import CartAddButton from "@/features/cart/cart-add/CartAddButton";
import FavoriteAddButton from "@/features/favorite/favorite-add/ui/FavoriteAddButton";
import { ProductEditButton, ProductDeleteButton } from "@/features/products";
import { roles } from "@/shared/config/roles";

export function ProductCardWithActions({ product, user, role, onDeleted }) {
  const isOwner = user && product.ownerId === user.uid;
  const canEdit = role === roles.admin || (role === roles.manager && isOwner);
  const canDelete = role === roles.admin || (role === roles.manager && isOwner);
  const canAddToCart = role === roles.user;
  const canAddToFavorites = role === roles.user;

  return (
    <ProductCard product={product}>
      <div className="mt-3 flex w-full  items-center justify-center gap-2">
        <div className="flex gap-5">
          {canAddToCart && (
            <CartAddButton
              product={product}
              userId={user?.uid}
              className="rounded-lg flex-1/2 bg-indigo-600 px-3 h-full py-1.5 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          )}
          {canAddToFavorites && (
            <FavoriteAddButton
              userId={user?.uid}
              productId={product.id}
              product={product}
              className="rounded-lg flex-1/2 bg-pink-500 px-3 h-auto py-1.5 text-sm font-medium text-white shadow hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          )}
          {canEdit && (
            <ProductEditButton
              productId={product.id}
              className="rounded-lg flex-1/2 bg-amber-500 px-3 h-auto py-1.5 text-sm font-medium text-white shadow hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          )}
          {canDelete && (
            <ProductDeleteButton
              productId={product.id}
              onDeleted={onDeleted}
              className="rounded-lg flex-1/2 bg-red-500 px-3 h-auto py-1.5 text-sm font-medium text-white shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          )}
        </div>
      </div>
    </ProductCard>
  );
}
