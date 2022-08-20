import { defaultTheme } from "../themes/default";
import styled, { css } from 'styled-components';

export type HeadingProps = {
  color?: keyof typeof defaultTheme.colors;
  size?: keyof typeof defaultTheme.fontSize;
  fontWeight?: keyof typeof defaultTheme.fontWeight;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  lineHeight: string | number;
};

export const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`
}))<HeadingProps>`
  ${({ color = 'white', size = 'base', fontWeight = 'regular', lineHeight = 1.5 }) => css`
    color: ${defaultTheme.colors[color]};
    font-family: ${props => props.theme.fontFamily.baloo};
    font-size: ${defaultTheme.fontSize[size]};
    font-weight: ${defaultTheme.fontWeight[fontWeight]};
    line-height: ${lineHeight};
  `}
`