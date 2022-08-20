import styled from "styled-components";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import Banner from "../../assets/banner.png";
import { Card } from "../../components/Card";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Container, MenuContainer } from "./style";
import { IconContainer } from "../../styles/components/IconContainer";
import { Heading, Text } from "../../styles/components/Typography";

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
            <Heading level={1} textColor="black-900" weight="extraBold" size="5xl" lineHeight={1.3}>Encontre o café perfeito para qualquer hora do dia</Heading>
            <Text variant="p" textColor="black-800" weight="regular" lineHeight={1.3} size="lg">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora.
            </Text>
          </div>
          <ul className="hero-list" role="list">
            <li>
              <IconContainer>
                <ShoppingCart size={16} color="#ffffff" weight="fill" />
              </IconContainer>
              Compra simples e segura
            </li>
            <li>
              <IconContainer>
                <Package size={16} color="#ffffff" weight="fill" />
              </IconContainer>
              Embalagem mantém o café intacto
            </li>
            <li>
              <IconContainer>
                <Timer size={16} color="#ffffff" weight="fill" />
              </IconContainer>
              Entrega rápida e rastreada
            </li>
            <li>
              <IconContainer>
                <Coffee size={16} color="#ffffff" weight="fill" />
              </IconContainer>
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
