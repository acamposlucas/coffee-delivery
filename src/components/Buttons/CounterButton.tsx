import { Minus, Plus } from "phosphor-react";
import styled from "styled-components";

export const CounterButton = () => {
  return (
    <ButtonContainer>
      <button type="button">
        <Minus size={12} color="#8047F8" />
      </button>
      <span>1</span>
      <button type="button">
        <Plus size={12} color="#8047F8" />
      </button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors["gray-400"]};
  border-radius: 6px;
  color: ${(props) => props.theme.colors["black-900"]};
  display: flex;
  font-size: ${(props) => props.theme.fontSize.xs};
  gap: 4px;
  justify-content: center;
  padding-inline: 0.5rem;
  height: 32px;
  line-height: 32px;
  text-transform: uppercase;

  button {
    align-items: center;
    border: 0;
    display: flex;
    justify-content: center;
  }
`;
