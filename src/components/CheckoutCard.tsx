import { Trash } from "phosphor-react";
import styled from "styled-components";

export const CheckoutCard = ({ ...props }) => {
  return (
    <Container {...props}>
      <img src="public\assets\americano.png" alt="" />
      <div className="inner-container">
        <strong>Expresso Tradicional</strong>
        <div className="inner-container-cta">
          <div className="inner-container-counter">
            <button type="button">-</button>
            <span>1</span>
            <button type="button">+</button>
          </div>
          <button type="button">
            <Trash size={16} />
            Remover
          </button>
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
      .inner-container-counter {
        display: flex;
        gap: 12px;

        button {
          background-color: transparent;
          border: 0;
        }
      }
    }
  }
`;
