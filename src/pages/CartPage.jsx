import { useTranslation } from 'react-i18next'
import CartList from '../widgets/CartList/CartList'
import { useSelector } from 'react-redux'

export default function CartPage() {
  const { t } = useTranslation()
  const user = useSelector((state) => state.auth.user)
  if (!user) return <div>{t("cart.regCart")}</div>
  return (
    <div>
      <h1>{t("cart.title")}</h1>
      <CartList userId={user.uid} />
    </div>
  )
}
