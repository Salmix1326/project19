import CartItemCard from "@/entities/cartItem/ui/CartItemCard";
import {
  CartDecreaseButton,
  CartIncreaseButton,
  CartRemoveButton,
} from "@/features/cart";

export function CartItemCardWithActions({ product, userId }) {
  return (
    <CartItemCard item={product}>
      <div className="mt-2 flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <CartDecreaseButton
            userId={userId}
            productId={product.id}
            className="px-2 py-1 bg-gray-200 dark:bg-slate-700 rounded hover:bg-gray-300 dark:hover:bg-slate-600 transition"
          />
          <span className="text-sm font-medium">{product.quantity || 1}</span>
          <CartIncreaseButton
            userId={userId}
            productId={product.id}
            product={product}
            className="px-2 py-1 bg-gray-200 dark:bg-slate-700 rounded hover:bg-gray-300 dark:hover:bg-slate-600 transition"
          />
        </div>
        <CartRemoveButton
          userId={userId}
          productId={product.id}
          className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition"
        />
      </div>
    </CartItemCard>
  );
}
