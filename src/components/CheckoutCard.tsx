import { Minus, Plus, Trash } from "phosphor-react";
import styled from "styled-components";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { RemoveButton } from "./Buttons/RemoveButton";
import { ButtonContainer, IconButton } from "./Card";

interface Coffee {
  id: number;
  name: string;
  description: string;
  tags: string[];
  image: string;
  price: number;
}

export const CheckoutCard = ({ as, id, quantity }: { as?: string, id: number, quantity: number }) => {

  const { coffees, decreaseCartQuantity, removeFromCart, increaseCartQuantity, getItemQuantity} = useShoppingCart();

    let item = coffees.find((item) => item.id === id)
    if(item === null) return null;
 
  return (
    <Container as={as}>
      <img src={item.image} alt={item.name} />
      <div className="inner-container">
        <strong>{item.name}</strong>
        <div className="inner-container-cta">
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
          <button type="button" onClick={() => removeFromCart(id)}>
            <Trash size={16} color="#8047F8" />
            Remover
          </button>
        </div>
      </div>
      <strong className="item-price">{formatCurrency(item.price * quantity)}</strong>
    </Container>
  );
};

const Container = styled.div`
  background-color: transparent;
  display: flex;
  gap: 1.25rem;

  img {
    height: 64px;
    width: 64px;
  }

  strong.item-price {
    color: ${(props) => props.theme.colors["black-700"]};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }

  .inner-container {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    strong {
      color: ${(props) => props.theme.colors["black-800"]};
    }

    .inner-container-cta {
      align-items: center;
      display: flex;
      gap: 0.5rem;
    }
  }
`;
