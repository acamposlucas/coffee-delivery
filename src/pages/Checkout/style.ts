import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  padding-block: 2.5rem;
  width: 90%;
  margin-inline: auto;

  @media (min-width: 1440px) {
    grid-template-columns: repeat(2, auto);
  }

`;

const BaseForm = styled.form`
  box-sizing: border-box;
`;

export const AddressInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, 1fr);
  }

  label[for="cep"] {
    grid-column: span 5;

    @media (min-width: 1024px) {
      grid-column: span 8;
    }

    @media (min-width: 1440px) {
      grid-column: span 12;
    }
  }

  label[for="rua"] {
    grid-column: span 5;

    @media (min-width: 1024px) {
      grid-column: span 8;
    }
    
    @media (min-width: 1440px) {
     grid-column: span 12; 
    }
  }

  label[for="numero"] {
    grid-column: span 5;

    @media (min-width: 1024px) {
      grid-column: span 3;
    }

    @media (min-width: 1440px) {
     grid-column: span 4; 
    }
  }

  label[for="complemento"] {
    grid-column: span 5;

    @media (min-width: 1024px) {
      grid-column: span 5;
    }

    @media (min-width: 1440px) {
     grid-column: span 8; 
    }
  }

  label[for="bairro"] {
    grid-column: span 5;

    @media (min-width: 1024px) {
      grid-column: span 3;
    }

    @media (min-width: 1440px) {
     grid-column: span 3; 
    }
  }

  label[for="cidade"] {
    grid-column: span 5;

    @media (min-width: 1024px) {
      grid-column: span 3;
    }

    @media (min-width: 1440px) {
     grid-column: span 6; 
    }
  }

  label[for="uf"] {
    grid-column: span 5;

    @media (min-width: 1024px) {
      grid-column: span 2;
    }

    @media (min-width: 1440px) {
     grid-column: span 3; 
    }
  }
`;

export const InputLabel = styled.label`
  background-color: ${(props) => props.theme.colors["gray-400"]};
  border: 1px solid ${(props) => props.theme.colors["gray-500"]};
  border-radius: 4px;
  color: ${(props) => props.theme.colors["black-700"]};
  padding-block: 1rem;
  padding-inline: 1rem;
  width: 100%;
  position: relative;

  &:focus-within {
    border-color: ${(props) => props.theme.colors["yellow-700"]};
  }

  input {
    background-color: transparent;
    border: 0;
    outline: none;
    color: inherit;

    &::placeholder {
      color: ${(props) => props.theme.colors["black-800"]};
    }
  }

  span {
    font-style: italic;
    color: ${(props) => props.theme.colors["gray-700"]};
    position: absolute;
    right: 1.5rem;
  }
`;

export const RadioLabel = styled.label`
  align-items: center;
  background-color: ${(props) => props.theme.colors["gray-400"]};
  border: 1px solid transparent;
  border-radius: 6px;
  color: ${(props) => props.theme.colors["black-700"]};
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  padding-block: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.colors["gray-500"]};
  }

  &:focus-within {
    background-color: ${(props) => props.theme.colors["purple-100"]};
    border-color: ${(props) => props.theme.colors["purple-500"]};
  }

  input[type="radio"] {
    appearance: none;
  }

  span {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;

export const RadioGroupGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`;

export const FormHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-block-end: 2rem;

  strong {
    display: block;
    gap: 0.5rem;
    color: ${(props) => props.theme.colors["black-800"]};

    span {
      display: block;
      color: ${(props) => props.theme.colors["black-700"]};
      font-size: ${(props) => props.theme.fontSize.sm};
    }
  }
`;

export const CheckoutForm = styled(BaseForm)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const InnerFormContainer = styled.div`
  background-color: ${(props) => props.theme.colors["gray-200"]};
  border-radius: 6px;
  padding-inline: 2.5rem;
  padding-block: 2.5rem;
`;

export const ConfirmPaymentForm = styled(BaseForm)`
  background-color: ${(props) => props.theme.colors["gray-200"]};
  border-radius: 6px 44px 6px 44px;
  padding-block: 2.5rem;
  padding-inline: 2.5rem;
  width: 100%;

  ul {
    li {
      border-bottom: 1px solid ${(props) => props.theme.colors["gray-400"]};
      padding-block-end: 1.25rem;
      margin-block-end: 1.25rem;
    }
  }

  .bill {
    margin-block-end: 1.5rem;

    p {
      color: ${(props) => props.theme.colors["black-700"]};
      display: flex;
      font-size: ${(props) => props.theme.fontSize.sm};
      justify-content: space-between;
      margin-block-end: 0.75rem;

      span {
        font-size: ${(props) => props.theme.fontSize.base};
      }
    }

    strong {
      color: ${(props) => props.theme.colors["black-800"]};
      display: flex;
      font-size: ${(props) => props.theme.fontSize.lg};
      font-weight: ${(props) => props.theme.fontWeight.bold};
      justify-content: space-between;
    }
  }
`;

export const ConfirmButton = styled.button`
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