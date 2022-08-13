import styled from "styled-components";

export const CheckoutTitle = styled.h1`
  color: ${(props) => props.theme.colors["black-800"]};
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-family: ${(props) => props.theme.fontFamily.baloo};
  margin-block-end: 1rem;
`;
