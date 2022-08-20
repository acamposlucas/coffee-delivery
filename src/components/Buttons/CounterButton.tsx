import { Minus, Plus } from "phosphor-react";
import styled from "styled-components";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Text } from "../../styles/components/Typography";

interface CounterContainer {
  quantity: number;
  id: number;
}

export const CounterButton = ({quantity, id}: CounterContainer) => {
  const { decreaseCartQuantity, increaseCartQuantity} = useShoppingCart();
  return (
    <Container>
      <button type="button" onClick={() => decreaseCartQuantity(id)}>
        <span className="visually-hidden">Subtrair item</span>
        <Minus size={12} color="#8047F8"/>
      </button>
      <Text id="" variant="strong" textColor="black-900" size="base">{quantity}</Text>
      <button type="button" onClick={() => increaseCartQuantity(id)}>
        <span className="visually-hidden">Adicionar item</span>
        <Plus size={12} color="#8047F8" />
      </button>
    </Container>
  )
};

const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors["gray-400"]};
  border-radius: 6px;
  color: ${(props) => props.theme.colors["black-900"]};
  display: flex;
  font-size: ${(props) => props.theme.fontSize.xs};
  gap: 0.5rem;
  justify-content: center;
  padding-inline: 0.75rem;
  height: 40px;
  line-height: 40px;
  text-transform: uppercase;

  /* &:hover {
    background-color: ${(props) => props.theme.colors["gray-500"]};
  } */

  button {
    align-items: center;
    border: 0;
    display: flex;
    justify-content: center;
  }
`

