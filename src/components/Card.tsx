import styled from "styled-components";
import { ShoppingCart } from "phosphor-react";
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
  return (
    <CardContainer>
      <img src={image} alt="" />
      <div className="container">
        <div className="tags">
          {tags.map((tag) => (
            <span className="tag">{tag}</span>
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
            <CounterButton />
            <button type="button" className="addToCart">
              <span className="visually-hidden">Adicionar no carrinho</span>
              <ShoppingCart size={22} color="#ffffff" weight="fill" />
            </button>
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
  width: 256px;

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

      strong {
        color: ${(props) => props.theme.colors["black-700"]};
        font-family: ${(props) => props.theme.fontFamily.baloo};
        font-size: ${(props) => props.theme.fontSize.xl};

        span {
          font-family: ${(props) => props.theme.fontFamily.roboto};
          font-size: ${(props) => props.theme.fontSize.xs};
          margin-inline-end: 4px;
        }
      }

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

        .addToCart {
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
        }
      }
    }
  }
`;
