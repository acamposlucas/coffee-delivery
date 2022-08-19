import styled from "styled-components";

export const Container = styled.section`
  margin-block-start: 5rem;

    h2 {
      color: ${props => props.theme.colors["yellow-700"]};
      font-family: ${props => props.theme.fontFamily.baloo};
      font-size: ${props => props.theme.fontSize["3xl"]};
    }

    p {
      font-size: ${props => props.theme.fontSize.lg};
      color: ${props => props.theme.colors["black-800"]};
    }

  section {
    display: flex;
    gap: 6.25rem;
    margin-block-start: 2.5rem;
    width: 100%;
  }
`;

export const DeliveryStatus = styled.div`
  background-color: ${props => props.theme.colors["gray-100"]};
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
  padding-block: 2.5rem;
  padding-inline: 2.5rem;
  max-width: 32rem;
  
  border-radius: 6px 36px 6px 36px;
  position: relative;

  &:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -1px;
  border-radius: inherit;
  background-image: linear-gradient(to left, #DBAC2C, #8047F8);
}

  article {
    align-items: center;
    display: flex;
    gap: 0.75rem;
    color: ${props => props.theme.colors["black-700"]};

    strong {
      font-weight: ${props => props.theme.fontWeight.bold};
    }
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
