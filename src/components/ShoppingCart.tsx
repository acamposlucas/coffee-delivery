import { ShoppingCart as Cart } from "phosphor-react"
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
  const cartItemAmount = 0;
  return (
    <Link to={"/checkout"}>
      <span className="visually-hidden">Ver Carrinho</span>
      <Cart color="#C47F17" size={22} weight="fill" />
      {cartItemAmount > 0 ? (
        <span
          className="cartItemAmount"
          aria-label="Quantidade de itens no carrinho"
        >
          {cartItemAmount}
        </span>
      ) : null}
    </Link>
  )
}