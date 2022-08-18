import styled from "styled-components";
import { RemoveButton } from "./Buttons/RemoveButton";

export const CheckoutCard = ({ as }: { as?: string }) => {
  return (
    <Container as={as}>
      <img src="public\assets\americano.png" alt="" />
      <div className="inner-container">
        <strong>Expresso Tradicional</strong>
        <div className="inner-container-cta">
          <RemoveButton />
        </div>
      </div>
      <strong className="item-price">R$ 9,90</strong>
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
