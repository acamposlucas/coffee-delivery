import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-block: 2.5rem;
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 640px;

  h2 {
    color: ${(props) => props.theme.colors["black-900"]};
    font-family: ${(props) => props.theme.fontFamily.baloo};
    font-size: ${(props) => props.theme.fontSize.lg};
    margin-block-end: 1rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  --padding: 2.5rem;

  .address {
    display: block;
    border-radius: 6px;
    overflow: hidden;
    width: 100%;
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    border: 0;
    background-color: ${(props) => props.theme.colors["gray-200"]};
    padding-block: var(--padding);
    padding-inline: var(--padding);
    overflow: visible;

    fieldset[data-fieldset="address"] {
      appearance: none;
      display: contents;

      legend {
        align-items: flex-start;
        color: ${(props) => props.theme.colors["black-700"]};
        display: flex;
        font-size: ${(props) => props.theme.fontSize.sm};
        gap: 0.5rem;
        grid-column: span 6;
        margin-block-end: 1.5rem;

        strong {
          color: ${(props) => props.theme.colors["black-800"]};
          display: contents;
          font-size: ${(props) => props.theme.fontSize.base};
        }
      }

      label {
        &[for="cep"] {
          grid-column: span 2;
        }
        &[for="street"] {
          grid-column: span 6;
        }
        &[for="number"] {
          grid-column: span 2;
        }
        &[for="secondaryAddress"] {
          grid-column: span 4;
        }
        &[for="neighborhood"] {
          grid-column: span 2;
        }
        &[for="city"] {
          grid-column: span 3;
        }
        &[for="state"] {
          grid-column: span 1;
        }
        input {
          background-color: ${(props) => props.theme.colors["gray-300"]};
          border: 1px solid ${(props) => props.theme.colors["gray-400"]};
          border-radius: 4px;
          outline: none;
          padding-block: 0.75rem;
          padding-inline: 0.75rem;
          width: 100%;
        }
      }
    }
  }

  .payment {
    display: block;
    border-radius: 6px;
    overflow: hidden;
    width: 100%;
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    border: 0;
    background-color: ${(props) => props.theme.colors["gray-200"]};
    padding-block: var(--padding);
    padding-inline: var(--padding);
    overflow: visible;

    fieldset[data-fieldset="payment"] {
      appearance: none;
      display: contents;

      legend {
        align-items: flex-start;
        color: ${(props) => props.theme.colors["black-700"]};
        display: flex;
        font-size: ${(props) => props.theme.fontSize.sm};
        gap: 0.5rem;
        grid-column: span 6;
        margin-block-end: 1.5rem;

        strong {
          color: ${(props) => props.theme.colors["black-800"]};
          display: contents;
          font-size: ${(props) => props.theme.fontSize.base};
        }
      }

      label {
        align-items: center;
        background-color: ${(props) => props.theme.colors["gray-400"]};
        border: 1px solid transparent;
        border-radius: 6px;
        color: ${(props) => props.theme.colors["black-700"]};
        cursor: pointer;
        display: flex;
        justify-content: flex-start;
        padding-inline-start: 1.125rem;
        grid-column: span 2;
        height: 50px;

        &:hover {
          background-color: ${(props) => props.theme.colors["gray-500"]};
        }

        input[type="radio"] {
          appearance: none;

          &:checked + label {
            background-color: ${(props) => props.theme.colors["purple-100"]};
            border-color: ${(props) => props.theme.colors["purple-900"]};
          }
        }

        strong {
          color: ${(props) => props.theme.colors["black-700"]};
          font-size: ${(props) => props.theme.fontSize.sm};
          text-transform: uppercase;
          margin-inline-start: 12px;
        }
      }
    }
  }
`;
