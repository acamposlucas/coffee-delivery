import { Trash } from "phosphor-react";
import styled from "styled-components";
import { useShoppingCart } from "../../context/ShoppingCartContext";

type RemoveButtonProps = {
  id: number;
}

export const RemoveButton = ({ id }: RemoveButtonProps) => {
  const { removeFromCart } = useShoppingCart();
  return (
    <Button type="button" onClick={() => removeFromCart(id)}>
      <Trash size={16} color="#8047F8" />
      Remover
    </Button>
  );
};

const Button = styled.button`
  align-items: center;
  background-color: ${(props) => props.theme.colors["gray-400"]};
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme.colors["black-700"]};
  display: flex;
  font-size: ${(props) => props.theme.fontSize.xs};
  gap: 4px;
  justify-content: center;
  padding-inline: 0.5rem;
  height: 40px;
  line-height: 40px;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: ${(props) => props.theme.colors["gray-500"]};
  }
`;
