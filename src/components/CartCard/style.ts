import styled from "styled-components";

export const CartCardContainer = styled.article`
  background-color: transparent;
  border-bottom: 1px solid ${props => props.theme.colors["gray-400"]};
  display: flex;
  margin-block-end: 1.5rem;
  padding-block-end: 1.5rem;
  width: 368px;
  
  .CartCard__Price {
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.colors["black-700"]};
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 1.25rem;
  
  img {
    display: block;
    height: 64px;
    width: 64px;
  }

  .InnerContainer__Content {

    strong {
      color: ${(props) => props.theme.colors["black-800"]};
    }

    .InnerContainer__CTA {
      align-items: center;
      display: flex;
      gap: 0.5rem;
    }
  }
`
