import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import styled from "styled-components";

export const CounterButton = () => {
  const [count, setCount] = useState<number>(0);

  if (count < 0) return setCount(0);

  const handleAddition = () => {
    setCount((state) => state + 1);
  };

  const handleSubtraction = () => {
    setCount((state) => state - 1);
  };

  return (
    <ButtonContainer>
      <button
        type="button"
        onClick={handleSubtraction}
        aria-label="subtrair item"
        aria-labelledby="counter"
      >
        <Minus size={12} color="#8047F8" />
      </button>
      <span id="counter">{count}</span>
      <button
        type="button"
        onClick={handleAddition}
        aria-label="adicionar item"
        aria-labelledby="counter"
      >
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

    svg {
      &:hover {
        fill: red;
      }
    }
  }
`;
