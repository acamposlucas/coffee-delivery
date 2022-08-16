import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export const Container = styled.section``;

export const DeliveryStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block: 2.5rem;
  padding-inline: 2.5rem;

  article {
    display: flex;
    gap: 0.75rem;
  }
`;

export const IconContainer = styled.div`
  align-items: center;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  height: 32px;
  width: 32px;

  background-color: ${(props) => props.theme.colors["purple-500"]};
`;
