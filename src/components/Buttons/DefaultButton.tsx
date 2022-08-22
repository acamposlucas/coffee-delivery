import { ReactNode } from "react";
import styled from "styled-components";

export const DefaultButton = ({ children }: { children: ReactNode, onClick: any }) => {
  return <Button type="button">{children}</Button>;
};

const Button = styled.button`
  align-items: center;
  background-color: ${(props) => props.theme.colors["yellow-400"]};
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  display: flex;
  height: 48px;
  line-height: 48px;
  justify-content: center;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.colors["yellow-700"]};
  }
`;
