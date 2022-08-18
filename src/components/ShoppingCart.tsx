import { ShoppingCart as Cart } from "phosphor-react"
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const ShoppingCart = () => {
  const { cartQuantity } = useShoppingCart();
  return (
    <Link to={"/checkout"}>
      <span className="visually-hidden">Ver Carrinho</span>
      <Cart color="#C47F17" size={22} weight="fill" />
      {cartQuantity > 0 ? (
        <span
          className="cartItemAmount"
          aria-label="Quantidade de itens no carrinho"
        >
          {cartQuantity}
        </span>
      ) : null}
    </Link>
  )
}