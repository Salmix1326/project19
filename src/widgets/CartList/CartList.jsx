import { useTranslation } from "react-i18next";
import { useGetUserCartQuery } from "../../entities/cartItem/api/cartItemApi";
import { CartItemCardWithActions } from "../CartItemCardWithActions/CartItemCardWithActions ";

export default function CartList({ userId }) {
  const { data: cart = {}, isLoading } = useGetUserCartQuery(userId);
  const items = Object.entries(cart).filter(([_, item]) => item);
  const { t } = useTranslation()
  const total = items.reduce(
    (sum, [_, item]) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  if (isLoading) return <div>{t("shared")}...</div>;

  return (
    <div>
      {items.length === 0 && <div>{t("cart.emptyCart")}</div>}
      {items.map(([productId, item]) => (
        <CartItemCardWithActions
          key={productId}
          product={item}
          userId={userId}
        />
      ))}
      {items.length > 0 && (
        <div style={{ marginTop: 16, fontWeight: "bold" }}>
          {t("cart.totalSum")}: {total}
        </div>
      )}
    </div>
  );
}
