import styled from "styled-components";
import { IconContainer } from "../../styles/components/IconContainer";

export const Container = styled.section`
  display: flex;
  gap: 3.5rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding-block: 6rem;

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;

    .hero-container {
      h1 {
        color: ${(props) => props.theme.colors["black-900"]};
        font-family: ${(props) => props.theme.fontFamily.baloo};
        font-size: ${(props) => props.theme.fontSize["5xl"]};
        font-weight: ${(props) => props.theme.fontWeight.extraBold};
        margin-block-end: 1rem;
      }

      p {
        color: ${(props) => props.theme.colors["black-800"]};
        font-size: ${(props) => props.theme.fontSize.xl};
      }
    }

    .hero-list {
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 1.25rem;
      list-style-type: none;
      width: 100%;

      li {
        align-items: center;
        color: ${(props) => props.theme.colors["black-700"]};
        display: flex;

        ${IconContainer} {
          margin-inline-end: 0.75rem;
        }

        &:nth-child(1) {
          ${IconContainer} {
            background-color: ${(props) => props.theme.colors["yellow-700"]};
          }
        }

        &:nth-child(2) {
          ${IconContainer} {
            background-color: ${(props) => props.theme.colors["yellow-400"]};
          }
        }

        &:nth-child(3) {
          ${IconContainer} {
            background-color: ${(props) => props.theme.colors["black-700"]};
          }
        }

        &:nth-child(4) {
          ${IconContainer} {
            background-color: ${(props) => props.theme.colors["purple-900"]};
          }
        }
      }
    }
  }
`;

export const MenuContainer = styled.section`
  padding-block: 2rem;

  h2 {
    font-family: ${(props) => props.theme.fontFamily.baloo};
    font-weight: ${(props) => props.theme.fontWeight.extraBold};
    font-size: ${(props) => props.theme.fontSize["3xl"]};
    color: ${(props) => props.theme.colors["black-800"]};
    padding-block-end: 2rem;
  }

  ul {
    display: grid;
    column-gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    row-gap: 2.5rem;
    list-style-type: none;
  }
`;