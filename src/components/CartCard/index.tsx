import { Minus, Plus, Trash } from "phosphor-react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import { RemoveButton } from "../Buttons/RemoveButton";
import { ButtonContainer } from "../Card";
import { CartCardContainer, InnerContainer } from "./style";

interface Coffee {
  id: number;
  name: string;
  description: string;
  tags: string[];
  image: string;
  price: number;
}

export const CartCard = ({ as, id, quantity }: { as?: string, id: number, quantity: number }) => {

  const { coffees, decreaseCartQuantity, removeFromCart, increaseCartQuantity, getItemQuantity} = useShoppingCart();

    let item: Coffee | undefined = coffees.find((item) => item.id === id)
    if(item === undefined) return null;
 
  return (
    <CartCardContainer>
      <InnerContainer>
        <img src={item.image} alt={item.name} />
        <div className="InnerContainer__Content">
          <strong>{item.name}</strong>
          <div className="InnerContainer__CTA">
            <ButtonContainer>
              <button
                type="button"
                onClick={() => decreaseCartQuantity(id)}
                aria-label="subtrair item"
                aria-labelledby="counter"
              >
                <Minus size={12} color="#8047F8" />
              </button>
              <span id="counter">{getItemQuantity(id)}</span>
              <button
                type="button"
                onClick={() => increaseCartQuantity(id)}
                aria-label="adicionar item"
                aria-labelledby="counter"
              >
                <Plus size={12} color="#8047F8" />
              </button>
            </ButtonContainer>
            <RemoveButton onClick={() => removeFromCart(id)} />
          </div>
        </div>
      </InnerContainer>
      <strong className="CartCard__Price">{formatCurrency(item.price * quantity)}</strong>
    </CartCardContainer>
  );
};