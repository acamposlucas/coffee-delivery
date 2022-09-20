import styled from "styled-components";
import { IconContainer } from "../../styles/components/IconContainer";
import { Heading } from "../../styles/components/Typography";

export const Container = styled.section`
  display: flex;
  gap: 3.5rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding-block: 6rem;
  width: 90%;
  margin-inline: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;

    @media (max-width: 768px) {
      order: 2;
    }

    .hero-container {
      ${Heading} {
        /* color: ${(props) => props.theme.colors["black-900"]};
        font-family: ${(props) => props.theme.fontFamily.baloo};
        font-size: ${(props) => props.theme.fontSize["5xl"]};
        font-weight: ${(props) => props.theme.fontWeight.extraBold}; */
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

      @media (max-width: 1024px) {
        grid-template-columns: repeat(1, 1fr);
      }

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

  img {
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
      order: 1;
    }
  }
`;

export const MenuContainer = styled.section`
  padding-block: 2rem;
  width: 90%;
  margin-inline: auto;

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
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    place-items: center;
    row-gap: 2.5rem;
    list-style-type: none;
    margin-inline: auto;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 3fr);
    }

    @media (min-width: 1440px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;