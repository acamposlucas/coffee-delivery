import styled from "styled-components";
import { MapPin } from "phosphor-react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { ShoppingCart } from "./ShoppingCart";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const Header = () => {
  const { cartQuantity } = useShoppingCart();

  return (
    <header>
      <HeaderContainer>
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>
        <div className="inner-container">
          <span className="location">
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </span>
          {
            cartQuantity > 0 ? (
              <ShoppingCart />
            ) : (
              null
            )
          }
        </div>
      </HeaderContainer>
    </header>
  );
};

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-block: 2rem;
  margin-inline: auto;
  max-width: var(--maxWidth);
  width: 90%;

  .inner-container {
    align-items: center;
    display: flex;
    gap: 1rem;

    .location {
      align-items: center;
      background-color: ${(props) => props.theme.colors["purple-100"]};
      border-radius: 6px;
      color: ${(props) => props.theme.colors["purple-900"]};
      display: flex;
      font-size: ${(props) => props.theme.fontSize.xs};
      gap: 0.3rem;
      justify-content: center;
      padding-block: 0.5rem;
      padding-inline: 0.5rem;

      @media (max-width: 30em) {
        display: none;
      }
    }

    a {
      align-items: center;
      background-color: ${(props) => props.theme.colors["yellow-100"]};
      border-radius: 6px;
      display: flex;
      justify-content: center;
      padding-inline: 0.5rem;
      padding-block: 0.5rem;
      position: relative;

      span.cartItemAmount {
        align-items: center;
        aspect-ratio: 1;
        background-color: ${(props) => props.theme.colors["yellow-700"]};
        border-radius: 20px;
        color: ${(props) => props.theme.colors.white};
        display: flex;
        font-size: ${(props) => props.theme.fontSize.xs};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        justify-content: center;
        height: 20px;
        inset: -10px -10px auto auto;
        position: absolute;
      }
    }
  }
`;
