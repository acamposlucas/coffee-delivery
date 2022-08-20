import { defaultTheme } from "../themes/default";
import styled, { css } from 'styled-components';

export type HeadingProps = {
  textColor?: keyof typeof defaultTheme.colors;
  size?: keyof typeof defaultTheme.fontSize;
  weight?: keyof typeof defaultTheme.fontWeight;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  lineHeight: string | number;
};

export const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`
}))<HeadingProps>`
  ${({ textColor = 'white', size = 'base', weight = 'regular', lineHeight = 1.5 }) => css`
    color: ${defaultTheme.colors[textColor]};
    font-family: ${props => props.theme.fontFamily.baloo};
    font-size: ${defaultTheme.fontSize[size]};
    font-weight: ${defaultTheme.fontWeight[weight]};
    line-height: ${lineHeight};
  `}
`;

export type TextProps = {
  textColor?: keyof typeof defaultTheme.colors;
  size?: keyof typeof defaultTheme.fontSize;
  weight?: keyof typeof defaultTheme.fontWeight;
  variant?: string;
  lineHeight: string | number;
};

export const Text = styled('p').attrs<TextProps>(({ variant }) => ({
  as: `${variant}`
}))<TextProps>`
  ${({ textColor = 'white', size = 'base', weight = 'regular', lineHeight = 1.5 }) => css`
    color: ${defaultTheme.colors[textColor]};
    size: ${defaultTheme.fontSize[size]};
    font-weight: ${defaultTheme.fontWeight[weight]};
    line-height: ${lineHeight};
  `}
`;