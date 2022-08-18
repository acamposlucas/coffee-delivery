import styled from "styled-components";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import Banner from "../../assets/banner.png";
import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";

interface Coffee {
  id: number;
  name: string;
  description: string;
  tags: string[];
  image: string;
  price: number;
}

export const Index = () => {
  const { coffees } = useShoppingCart();

  return (
    <main>
      <Container>
        <div className="hero">
          <div className="hero-container">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora.
            </p>
          </div>
          <ul className="hero-list" role="list">
            <li>
              <span>
                <ShoppingCart size={16} color="#ffffff" weight="fill" />
              </span>
              Compra simples e segura
            </li>

            <li>
              <span>
                <Package size={16} color="#ffffff" weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </li>
            <li>
              <span>
                <Timer size={16} color="#ffffff" weight="fill" />
              </span>
              Entrega rápida e rastreada
            </li>
            <li>
              <span>
                <Coffee size={16} color="#ffffff" weight="fill" />
              </span>
              O café chega fresquinho até você
            </li>
          </ul>
        </div>
        <img src={Banner} alt="" />
      </Container>
      <MenuContainer>
        <h2>Nossos cafés</h2>
        <ul role="list">
          {coffees.map((coffee) => (
            <Card
              key={coffee.id}
              image={coffee.image}
              id={coffee.id}
              description={coffee.description}
              name={coffee.name}
              tags={coffee.tags}
              price={coffee.price}
            />
          ))}
        </ul>
      </MenuContainer>
    </main>
  );
};

const Container = styled.section`
  display: flex;
  gap: 3.5rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding-block: 6rem;

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;

    .hero-container {
      h1 {
        color: ${(props) => props.theme.colors["black-900"]};
        font-family: ${(props) => props.theme.fontFamily.baloo};
        font-size: ${(props) => props.theme.fontSize["5xl"]};
        font-weight: ${(props) => props.theme.fontWeight.extraBold};
        margin-block-end: 1rem;
      }

      p {
        color: ${(props) => props.theme.colors["black-800"]};
        font-size: ${(props) => props.theme.fontSize.xl};
      }
    }

    .hero-list {
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 1.25rem;
      list-style-type: none;
      width: 100%;

      li {
        align-items: center;
        color: ${(props) => props.theme.colors["black-700"]};
        display: flex;

        span {
          align-items: center;
          border-radius: 32px;
          display: flex;
          justify-content: center;
          height: 32px;
          margin-inline-end: 0.75rem;
          width: 32px;

          &:nth-child(1) {
            background-color: ${(props) => props.theme.colors["yellow-700"]};
          }

          &:nth-child(2) {
            background-color: ${(props) => props.theme.colors["yellow-400"]};
          }

          &:nth-child(3) {
            background-color: ${(props) => props.theme.colors["black-700"]};
          }

          &:nth-child(4) {
            background-color: ${(props) => props.theme.colors["purple-900"]};
          }
        }
      }
    }
  }
`;

const MenuContainer = styled.section`
  padding-block: 2rem;

  h2 {
    font-family: ${(props) => props.theme.fontFamily.baloo};
    font-weight: ${(props) => props.theme.fontWeight.extraBold};
    font-size: ${(props) => props.theme.fontSize["3xl"]};
    color: ${(props) => props.theme.colors["black-800"]};
    padding-block-end: 2rem;
  }

  ul {
    display: grid;
    column-gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    row-gap: 2.5rem;
    list-style-type: none;
  }
`;
