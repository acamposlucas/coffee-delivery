import styled from "styled-components";
import { CounterButton } from "./Buttons/CounterButton";
import { RemoveButton } from "./Buttons/RemoveButton";

export const CheckoutCard = ({ ...props }) => {
  return (
    <Container {...props}>
      <img src="public\assets\americano.png" alt="" />
      <div className="inner-container">
        <strong>Expresso Tradicional</strong>
        <div className="inner-container-cta">
          <CounterButton />
          <RemoveButton />
        </div>
      </div>
      <strong>R$ 9,90</strong>
    </Container>
  );
};

const Container = styled.div`
  background-color: transparent;
  display: flex;
  gap: 1.25rem;

  .inner-container {
    display: flex;
    flex-direction: column;

    .inner-container-cta {
      align-items: center;
      display: flex;
      gap: 0.5rem;
    }
  }
`;
