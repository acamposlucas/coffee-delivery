import styled from "styled-components";
import { ShoppingCart, Trash } from "phosphor-react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CounterButton } from "./Buttons/CounterButton";
interface Coffee {
  id: number;
  name: string;
  description: string;
  tags: string[];
  image: string;
  price: number;
}
interface CardProps extends Coffee {}

export const Card = ({
  id,
  image,
  name,
  description,
  tags,
  price,
}: CardProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <CardContainer>
      <img src={image} alt={name} />
      <div className="container">
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag} className="tag" aria-hidden="true">{tag}</span>
          ))}
        </div>
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="inner-container">
          <strong>
            <span>R$</span>
            {price.toFixed(2)}
          </strong>
          <div className="actions">
            {
              quantity > 0 ? (
                <>
                  <IconButton type="button" onClick={() => removeFromCart(id)}>
                    <span className="visually-hidden">Remover do carrinho</span>
                    <Trash size={22} color="#ffffff" weight="fill"/>
                  </IconButton>
                  <CounterButton quantity={quantity} id={id} />
                </>
              ) : (
                <IconButton type="button" onClick={() => increaseCartQuantity(id)}>
                  <span className="visually-hidden">Adicionar no carrinho</span>
                  <ShoppingCart size={22} color="#ffffff" weight="fill" />
                </IconButton>
              )
            }
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.li`
  background-color: ${(props) => props.theme.colors["gray-200"]};
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-block: 1.25rem;
  padding-inline: 1.25rem;
  position: relative;
  height: 310px;
  width: 100%;
  max-width: 368px;

  img {
    aspect-ratio: 1;
    position: absolute;
    width: 120px;
    inset-inline: 50%;
    inset-block: -20px;
    transform: translateX(-50%);
  }

  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;

    .tags {
      align-items: center;
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin-block-end: 1rem;

      span.tag {
        background-color: ${(props) => props.theme.colors["yellow-100"]};
        border-radius: 100px;
        color: ${(props) => props.theme.colors["yellow-700"]};
        font-size: ${(props) => props.theme.fontSize.xs};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        padding-block: 4px;
        padding-inline: 8px;
        text-transform: uppercase;
      }
    }

    h3 {
      color: ${(props) => props.theme.colors["black-800"]};
      font-family: ${(props) => props.theme.fontFamily.baloo};
      font-size: ${(props) => props.theme.fontSize.xl};
      margin-block-end: 0.5rem;
    }

    p {
      color: ${(props) => props.theme.colors["gray-700"]};
      font-size: ${(props) => props.theme.fontSize.sm};
    }

    .inner-container {
      align-items: end;
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      margin-block-start: 1rem;
      width: 100%;

      .actions {
        align-items: center;
        display: flex;
        gap: 0.5rem;
        justify-content: space-between;

        .counter {
          align-items: center;
          background-color: ${(props) => props.theme.colors["gray-400"]};
          border-radius: 6px;
          display: flex;
          gap: 0.5rem;
          padding-block: 0.5rem;
          padding-inline: 0.5rem;
        }
      }
    }
  }
`;

export const ButtonContainer = styled.div`
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

  button {
    align-items: center;
    border: 0;
    display: flex;
    justify-content: center;

    svg {
      &:hover {
        fill: red;
      }
    }
  }
`;

export const IconButton = styled.button`
  align-items: center;
  background-color: ${(props) => props.theme.colors["purple-900"]};
  border: 0;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  height: 40px;
  line-height: 40px;
  padding-inline: 0.5rem;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: ${(props) => props.theme.colors["purple-500"]};
  }
`;

